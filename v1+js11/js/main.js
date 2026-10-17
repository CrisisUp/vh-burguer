// js/main.js
import { buscarProdutos } from "./api.js";
import { configurarCheckout } from "./checkout.js";
import { Carrinho } from "./models/Carrinho.js";
import { criarPagamento } from "./models/Pagamento.js"; // <-- NOVO
import * as UI from "./ui.js";

// Ao chamar new Carrinho() duas vezes, o Singleton garante ser o mesmo objeto
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

  document.getElementById("btn-limpar").addEventListener("click", () => {
    if (confirm("Limpar carrinho?")) {
      meuCarrinho.limpar();
      atualizarTelaCarrinho();
    }
  });

  // Configura o Checkout com Strategy
  configurarCheckout({
    verificarCarrinhoVazio: () => meuCarrinho.vazio,
    sucesso: (dadosForm) => {
      const total = meuCarrinho.valorTotal;

      // 1. Instancia a estratégia correta
      const pagamento = criarPagamento(dadosForm.pagamento);

      // 2. Processa o pagamento usando o método polimórfico
      const mensagemPagamento = pagamento.processar(total);

      // 3. Junta tudo e "envia"
      const pedido = {
        cliente: dadosForm.cliente,
        itens: meuCarrinho.itens,
        total: total,
        formaPagamento: dadosForm.pagamento,
        statusPagamento: mensagemPagamento,
      };

      console.log("📦 Pedido Final:", pedido);

      // 4. Limpa o carrinho
      meuCarrinho.limpar();
      atualizarTelaCarrinho();

      // 5. Retorna mensagem para o Checkout exibir
      return { mensagemPagamento };
    },
  });

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
