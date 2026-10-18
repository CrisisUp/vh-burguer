// js/carrinho.js
import { Carrinho } from "./models/Carrinho.js";

const carrinho = new Carrinho();

// Função para avisar que algo foi adicionado (Toast)
export function mostrarToast(mensagem) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = mensagem;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("visivel"), 100);
  setTimeout(() => {
    toast.classList.remove("visivel");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function atualizarInterfaceCarrinho() {
  const badge = document.getElementById("badge-carrinho");
  if (badge) {
    badge.textContent = carrinho.quantidadeTotal;
    badge.style.display =
      carrinho.quantidadeTotal > 0 ? "inline-block" : "none";

    if (carrinho.quantidadeTotal > 0) {
      badge.classList.add("pulsando");
      setTimeout(() => badge.classList.remove("pulsando"), 400);
    }
  }

  const lista = document.getElementById("lista-carrinho");
  if (!lista) return;

  if (carrinho.vazio) {
    lista.innerHTML = '<p class="carrinho-vazio">Carrinho vazio.</p>';
  } else {
    let html = "";
    carrinho.itens.forEach((item) => {
      html += `
                <div class="item-carrinho">
                    <div class="item-carrinho-info">
                        <div class="item-carrinho-nome">${item.nome}</div>
                        <div class="item-carrinho-preco">R$ ${item.preco.toFixed(2)}</div>
                        <div class="item-carrinho-controles">
                            <button class="btn-decrementar" data-id="${item.id}">−</button>
                            <span class="quantidade">${item.quantidade}</span>
                            <button class="btn-incrementar" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
            `;
    });
    lista.innerHTML = html;

    // Adiciona os eventos
    lista.querySelectorAll(".btn-decrementar").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        carrinho.remover(parseInt(e.target.dataset.id));
        atualizarInterfaceCarrinho();
      });
    });

    lista.querySelectorAll(".btn-incrementar").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        const produto = carrinho.itens.find((i) => i.id === id);
        carrinho.adicionar(produto);
        atualizarInterfaceCarrinho();
      });
    });
  }

  const totalEl = document.getElementById("total-carrinho");
  if (totalEl)
    totalEl.textContent = `R$ ${carrinho.total.toFixed(2).replace(".", ",")}`;
}

// Cria a estrutura do carrinho no HTML
function criarEstruturaCarrinho() {
  if (document.getElementById("painel-carrinho")) return;

  const btnFlutuante = document.createElement("button");
  btnFlutuante.id = "btn-carrinho-flutuante";
  btnFlutuante.innerHTML =
    '🛒 <span class="badge" id="badge-carrinho" style="display:none;">0</span>';
  btnFlutuante.addEventListener("click", () => abrirCarrinho());
  document.body.appendChild(btnFlutuante);

  const overlay = document.createElement("div");
  overlay.id = "overlay-carrinho";
  overlay.addEventListener("click", () => fecharCarrinho());
  document.body.appendChild(overlay);

  const painel = document.createElement("aside");
  painel.id = "painel-carrinho";
  painel.innerHTML = `
        <div class="carrinho-header">
            <h3>🛒 Carrinho</h3>
            <button id="btn-fechar-carrinho">✕</button>
        </div>
        <div class="carrinho-itens" id="lista-carrinho"></div>
        <div class="carrinho-footer">
            <div class="carrinho-total"><span>Total:</span><strong id="total-carrinho">R$ 0,00</strong></div>
            <button id="btn-finalizar-pedido">✅ Finalizar</button>
            <button id="btn-limpar-carrinho">🗑️ Limpar</button>
        </div>
    `;
  document.body.appendChild(painel);

  document
    .getElementById("btn-fechar-carrinho")
    .addEventListener("click", fecharCarrinho);
  document
    .getElementById("btn-limpar-carrinho")
    .addEventListener("click", () => {
      if (confirm("Limpar carrinho?")) {
        carrinho.limpar();
        atualizarInterfaceCarrinho();
      }
    });
  document
    .getElementById("btn-finalizar-pedido")
    .addEventListener("click", () => {
      if (carrinho.vazio) return mostrarToast("Carrinho vazio!");
      window.location.href = "contato.html";
    });
}

function abrirCarrinho() {
  document.getElementById("painel-carrinho")?.classList.add("aberto");
  document.getElementById("overlay-carrinho")?.classList.add("ativo");
}

function fecharCarrinho() {
  document.getElementById("painel-carrinho")?.classList.remove("aberto");
  document.getElementById("overlay-carrinho")?.classList.remove("ativo");
}

document.addEventListener("DOMContentLoaded", () => {
  criarEstruturaCarrinho();
  atualizarInterfaceCarrinho();

  // Escuta quando o cardápio avisa que adicionou algo
  window.addEventListener("carrinho-atualizado", atualizarInterfaceCarrinho);
  window.addEventListener("abrir-carrinho", abrirCarrinho);
});
