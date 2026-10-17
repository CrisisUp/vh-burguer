// js/main.js
import { buscarProdutos } from "./api.js";
import * as Carrinho from "./carrinho.js";
import { configurarCheckout } from "./checkout.js";
import * as UI from "./ui.js";

// ============================================
// ESTADO LOCAL DO MÓDULO (não vaza para o global)
// ============================================
let todosOsProdutos = [];
let categoriaAtual = "todos";
let termoBusca = "";

// ============================================
// FUNÇÕES DE RENDERIZAÇÃO
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
  UI.renderizarCarrinho(
    Carrinho.obterCarrinho(),
    Carrinho.obterTotal(),
    Carrinho.obterQuantidadeTotal(),
  );
}

// ============================================
// EVENTOS CUSTOMIZADOS (Comunicação entre UI e Lógica)
// ============================================
// Quando o UI clica em "Adicionar", ele dispara um evento.
// O main.js escuta esse evento e repassa para o carrinho.
document.addEventListener("adicionar-ao-carrinho", (e) => {
  Carrinho.adicionarItem(e.detail);
  atualizarTelaCarrinho();
});

document.addEventListener("remover-do-carrinho", (e) => {
  Carrinho.removerItem(e.detail);
  atualizarTelaCarrinho();
});

// ============================================
// CONFIGURAÇÃO INICIAL
// ============================================
async function iniciar() {
  // 1. Configura Filtros
  document.querySelectorAll(".btn-filtro").forEach((btn) => {
    btn.addEventListener("click", () => {
      categoriaAtual = btn.dataset.categoria;
      atualizarTelaProdutos();
    });
  });

  // 2. Configura Busca
  document.getElementById("busca").addEventListener("input", function () {
    termoBusca = this.value;
    atualizarTelaProdutos();
  });

  // 3. Configura Limpar Carrinho
  document.getElementById("btn-limpar").addEventListener("click", () => {
    if (confirm("Limpar carrinho?")) {
      Carrinho.limparCarrinho();
      atualizarTelaCarrinho();
    }
  });

  // 4. Configura Checkout
  configurarCheckout({
    verificarCarrinhoVazio: () => Carrinho.obterCarrinho().length === 0,
    sucesso: () => {
      const pedido = {
        itens: Carrinho.obterCarrinho(),
        total: Carrinho.obterTotal(),
      };
      console.log("📦 Pedido enviado:", pedido);
      Carrinho.limparCarrinho();
      atualizarTelaCarrinho();
    },
  });

  // 5. Busca dados da API
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

  // 6. Inicializa o carrinho com dados salvos
  atualizarTelaCarrinho();
}

iniciar();
