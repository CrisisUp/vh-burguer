// src/carrinho.ts
import { Carrinho } from "./models/Carrinho.js";

const carrinho = new Carrinho();

// ============================================================
// 1. TOAST (Notificação)
// ============================================================
export function mostrarToast(mensagem: string): void {
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

// ============================================================
// 2. CRIA A ESTRUTURA HTML DO CARRINHO
// ============================================================
function criarEstruturaCarrinho(): void {
    if (document.getElementById("painel-carrinho")) return;

    // Botão Flutuante (Mobile)
    const btnFlutuante = document.createElement("button");
    btnFlutuante.id = "btn-carrinho-flutuante";
    btnFlutuante.innerHTML = '🛒 <span class="badge" id="badge-carrinho" style="display:none;">0</span>';
    btnFlutuante.addEventListener("click", abrirCarrinho);
    document.body.appendChild(btnFlutuante);

    // Overlay (Fundo escuro)
    const overlay = document.createElement("div");
    overlay.id = "overlay-carrinho";
    overlay.addEventListener("click", fecharCarrinho);
    document.body.appendChild(overlay);

    // Painel Lateral
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

    document.getElementById("btn-fechar-carrinho")?.addEventListener("click", fecharCarrinho);
    document.getElementById("btn-limpar-carrinho")?.addEventListener("click", () => {
        if (confirm("Limpar carrinho?")) {
            carrinho.limpar();
            atualizarInterfaceCarrinho();
        }
    });
    document.getElementById("btn-finalizar-pedido")?.addEventListener("click", () => {
        if (carrinho.vazio) {
            mostrarToast("Carrinho vazio!");
            return;
        }
        window.location.href = "contato.html";
    });

    // NOVO: Escuta o botão do header
    const btnHeader = document.getElementById("btn-carrinho-header");
    if (btnHeader) {
        btnHeader.addEventListener("click", abrirCarrinho);
    }
}

// ============================================================
// 3. ATUALIZA A INTERFACE (Lista e Badges)
// ============================================================
function atualizarInterfaceCarrinho(): void {
    // Atualiza o badge do botão flutuante (Mobile)
    const badgeFlutuante = document.getElementById("badge-carrinho");
    if (badgeFlutuante) {
        badgeFlutuante.textContent = carrinho.quantidadeTotal.toString();
        badgeFlutuante.style.display = carrinho.quantidadeTotal > 0 ? "inline-block" : "none";
    }

    // NOVO: Atualiza o badge do header (Desktop)
    const badgeHeader = document.getElementById("badge-carrinho-header");
    if (badgeHeader) {
        badgeHeader.textContent = carrinho.quantidadeTotal.toString();
        badgeHeader.style.display = carrinho.quantidadeTotal > 0 ? "inline-block" : "none";
    }

    const lista = document.getElementById("lista-carrinho");
    if (!lista) return;

    if (carrinho.vazio) {
        lista.innerHTML = '<p class="carrinho-vazio">Carrinho vazio.</p>';
    } else {
        let html = "";
        carrinho.itens.forEach(item => {
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

        lista.querySelectorAll(".btn-decrementar").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const target = e.target as HTMLButtonElement;
                carrinho.remover(parseInt(target.dataset.id || "0"));
                atualizarInterfaceCarrinho();
            });
        });

        lista.querySelectorAll(".btn-incrementar").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const target = e.target as HTMLButtonElement;
                const id = parseInt(target.dataset.id || "0");
                const produto = carrinho.itens.find(i => i.id === id);
                if (produto) {
                    carrinho.adicionar(produto as any);
                    atualizarInterfaceCarrinho();
                }
            });
        });
    }

    const totalEl = document.getElementById("total-carrinho");
    if (totalEl) totalEl.textContent = `R$ ${carrinho.total.toFixed(2).replace(".", ",")}`;
}

// ============================================================
// 4. ABRIR E FECHAR
// ============================================================
function abrirCarrinho(): void {
    document.getElementById("painel-carrinho")?.classList.add("aberto");
    document.getElementById("overlay-carrinho")?.classList.add("ativo");
}

function fecharCarrinho(): void {
    document.getElementById("painel-carrinho")?.classList.remove("aberto");
    document.getElementById("overlay-carrinho")?.classList.remove("ativo");
}

// ============================================================
// 5. INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    criarEstruturaCarrinho();
    atualizarInterfaceCarrinho();
    
    window.addEventListener("carrinho-atualizado", atualizarInterfaceCarrinho);
    window.addEventListener("abrir-carrinho", abrirCarrinho);
});