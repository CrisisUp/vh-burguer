// js/main.js
import { buscarProdutos } from "./api.js";
import { configurarCheckout } from "./checkout.js";
import { Carrinho } from "./models/Carrinho.js";
import * as UI from "./ui.js";

// ============================================
// INSTANCIANDO AS CLASSES
// ============================================
const meuCarrinho = new Carrinho(); // Objeto vivo!

let todosOsProdutos = [];
let categoriaAtual = "todos";
let termoBusca = "";

// ============================================
// RENDERIZAÇÃO
// ============================================
function atualizarTelaProdutos() {
  let filtrados = todosOsProdutos;

  if (categoriaAtual !== "todos") {
    filtrados = filtrados.filter((p) => p.categoria === categoriaAtual);
  }
  if (termoBusca !== "") {
    filtrados = filtrados.filter((p) =>
      p.nome.toLowerCase().includes(termoBusca.toLowerCase()),
    );
  }

  UI.renderizarProdutos(filtrados);
}

function atualizarTelaCarrinho() {
  // Passa o objeto inteiro para o UI, que usa os getters
  UI.renderizarCarrinho(meuCarrinho);
}

// ============================================
// EVENTOS
// ============================================
document.addEventListener("adicionar-ao-carrinho", (e) => {
  meuCarrinho.adicionar(e.detail); // Delega para a classe
  atualizarTelaCarrinho();
});

document.addEventListener("remover-do-carrinho", (e) => {
  meuCarrinho.remover(e.detail); // Delega para a classe
  atualizarTelaCarrinho();
});

// ============================================
// INICIALIZAÇÃO
// ============================================
async function iniciar() {
  // Filtros e busca
  document.querySelectorAll(".btn-filtro").forEach((btn) => {
    btn.addEventListener("click", () => {
      categoriaAtual = btn.dataset.categoria;
      atualizarTelaProdutos();
    });
  });

  document.getElementById("busca").addEventListener("input", function () {
    termoBusca = this.value;
    atualizarTelaProdutos();
  });

  // Limpar carrinho
  document.getElementById("btn-limpar").addEventListener("click", () => {
    if (confirm("Limpar carrinho?")) {
      meuCarrinho.limpar(); // O objeto sabe se limpar
      atualizarTelaCarrinho();
    }
  });

  // Checkout
  configurarCheckout({
    verificarCarrinhoVazio: () => meuCarrinho.vazio,
    sucesso: () => {
      const pedido = {
        itens: meuCarrinho.itens,
        total: meuCarrinho.valorTotal,
      };
      console.log("📦 Pedido enviado:", pedido);
      meuCarrinho.limpar();
      atualizarTelaCarrinho();
    },
  });

  // Carrega produtos
  UI.mostrarLoading(true);
  UI.mostrarErroRede(false);

  try {
    todosOsProdutos = await buscarProdutos();
    UI.mostrarLoading(false);
    atualizarTelaProdutos();
  } catch (erro) {
    console.error(erro);
    UI.mostrarLoading(false);
    UI.mostrarErroRede(true);
  }

  atualizarTelaCarrinho();
}

iniciar();
