// js/main.js
import { buscarProdutos } from "./api.js";
import { configurarCheckout } from "./checkout.js";
import { Bebida } from "./models/Bebida.js";
import { Carrinho } from "./models/Carrinho.js";
import { Hamburguer } from "./models/Hamburguer.js";
import * as UI from "./ui.js";

const meuCarrinho = new Carrinho();
let todosOsProdutos = [];
let categoriaAtual = "todos";
let termoBusca = "";

function atualizarTelaProdutos() {
  let filtrados = todosOsProdutos;
  if (categoriaAtual !== "todos")
    filtrados = filtrados.filter((p) => p.categoria === categoriaAtual);
  if (termoBusca !== "")
    filtrados = filtrados.filter((p) =>
      p.nome.toLowerCase().includes(termoBusca.toLowerCase()),
    );
  UI.renderizarProdutos(filtrados);
}

function atualizarTelaCarrinho() {
  UI.renderizarCarrinho(meuCarrinho);
}

document.addEventListener("adicionar-ao-carrinho", (e) => {
  meuCarrinho.adicionar(e.detail);
  atualizarTelaCarrinho();
});

document.addEventListener("remover-do-carrinho", (e) => {
  meuCarrinho.remover(e.detail);
  atualizarTelaCarrinho();
});

async function iniciar() {
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

  document.getElementById("btn-limpar").addEventListener("click", () => {
    if (confirm("Limpar carrinho?")) {
      meuCarrinho.limpar();
      atualizarTelaCarrinho();
    }
  });

  configurarCheckout({
    verificarCarrinhoVazio: () => meuCarrinho.vazio,
    sucesso: () => {
      console.log("📦 Pedido enviado:", meuCarrinho.itens);
      meuCarrinho.limpar();
      atualizarTelaCarrinho();
    },
  });

  UI.mostrarLoading(true);
  UI.mostrarErroRede(false);

  try {
    todosOsProdutos = await buscarProdutos();
    UI.mostrarLoading(false);
    atualizarTelaProdutos();

    // TESTE DE HERANÇA: rodando no console
    console.log("🔬 Teste de Polimorfismo:");
    todosOsProdutos.forEach((p) => {
      console.log(
        `${p.nome} é Hamburguer? ${p instanceof Hamburguer} | é Bebida? ${p instanceof Bebida}`,
      );
    });
  } catch (erro) {
    console.error(erro);
    UI.mostrarLoading(false);
    UI.mostrarErroRede(true);
  }

  atualizarTelaCarrinho();
}

iniciar();
