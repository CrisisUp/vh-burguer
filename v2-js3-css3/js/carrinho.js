// ============================================================
// VH BURGER - Carrinho de Compras (v2-js3-css3)
// ============================================================

// ============================================================
// 1. ESTADO DO CARRINHO
// ============================================================
// Carrega do localStorage ou começa vazio
let carrinho = JSON.parse(localStorage.getItem("vh-carrinho")) || [];

// ============================================================
// 2. PERSISTÊNCIA
// ============================================================
function salvarCarrinho() {
  localStorage.setItem("vh-carrinho", JSON.stringify(carrinho));
}

// ============================================================
// 3. ADICIONAR ITEM
// ============================================================
function adicionarAoCarrinho(produto) {
  const itemExistente = carrinho.find((item) => item.id === produto.id);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1,
    });
  }

  salvarCarrinho();
  atualizarCarrinho();
  abrirCarrinho();

  // Feedback visual rápido
  console.log(`✅ ${produto.nome} adicionado ao carrinho!`);
}

// ============================================================
// 4. REMOVER ITEM (completo)
// ============================================================
function removerItem(id) {
  carrinho = carrinho.filter((item) => item.id !== id);
  salvarCarrinho();
  atualizarCarrinho();
}

// ============================================================
// 5. DECREMENTAR QUANTIDADE
// ============================================================
function decrementarItem(id) {
  const item = carrinho.find((item) => item.id === id);
  if (!item) return;

  item.quantidade--;
  if (item.quantidade <= 0) {
    removerItem(id);
    return;
  }

  salvarCarrinho();
  atualizarCarrinho();
}

// ============================================================
// 6. INCREMENTAR QUANTIDADE
// ============================================================
function incrementarItem(id) {
  const item = carrinho.find((item) => item.id === id);
  if (!item) return;

  item.quantidade++;
  salvarCarrinho();
  atualizarCarrinho();
}

// ============================================================
// 7. LIMPAR CARRINHO
// ============================================================
function limparCarrinho() {
  if (!confirm("Tem certeza que deseja limpar o carrinho?")) return;

  carrinho = [];
  salvarCarrinho();
  atualizarCarrinho();
}

// ============================================================
// 8. CALCULAR TOTAL
// ============================================================
function calcularTotal() {
  return carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
}

function calcularQuantidade() {
  return carrinho.reduce((acc, item) => acc + item.quantidade, 0);
}

// ============================================================
// 9. RENDERIZAR CARRINHO NA TELA
// ============================================================
function atualizarCarrinho() {
  // Atualiza o badge do botão flutuante
  const badge = document.getElementById("badge-carrinho");
  const qtd = calcularQuantidade();

  if (badge) {
    badge.textContent = qtd;
    badge.style.display = qtd > 0 ? "inline-block" : "none";
  }

  // Atualiza a lista de itens
  const lista = document.getElementById("lista-carrinho");
  if (!lista) return;

  if (carrinho.length === 0) {
    lista.innerHTML =
      '<p class="carrinho-vazio">🛒 Seu carrinho está vazio.<br>Adicione itens do cardápio!</p>';
  } else {
    let html = "";
    carrinho.forEach((item) => {
      html += `
                <div class="item-carrinho">
                    <div class="item-carrinho-info">
                        <div class="item-carrinho-nome">${item.nome}</div>
                        <div class="item-carrinho-preco">
                            R$ ${item.preco.toFixed(2).replace(".", ",")}
                        </div>
                        <div class="item-carrinho-controles">
                            <button onclick="decrementarItem(${item.id})" title="Diminuir">−</button>
                            <span class="quantidade">${item.quantidade}</span>
                            <button onclick="incrementarItem(${item.id})" title="Aumentar">+</button>
                            <button class="btn-remover-item" onclick="removerItem(${item.id})" title="Remover">🗑️</button>
                        </div>
                    </div>
                </div>
            `;
    });
    lista.innerHTML = html;
  }

  // Atualiza o total
  const totalEl = document.getElementById("total-carrinho");
  if (totalEl) {
    totalEl.textContent = `R$ ${calcularTotal().toFixed(2).replace(".", ",")}`;
  }
}

// ============================================================
// 10. ABRIR/FECHAR CARRINHO
// ============================================================
function abrirCarrinho() {
  const painel = document.getElementById("painel-carrinho");
  const overlay = document.getElementById("overlay-carrinho");

  if (painel && overlay) {
    painel.classList.add("aberto");
    overlay.classList.add("ativo");
  }
}

function fecharCarrinho() {
  const painel = document.getElementById("painel-carrinho");
  const overlay = document.getElementById("overlay-carrinho");

  if (painel && overlay) {
    painel.classList.remove("aberto");
    overlay.classList.remove("ativo");
  }
}

// ============================================================
// 11. INICIALIZAÇÃO (cria os elementos no HTML)
// ============================================================
function criarEstruturaCarrinho() {
  // Verifica se já existe para não duplicar
  if (document.getElementById("painel-carrinho")) return;

  // Cria o botão flutuante
  const btnFlutuante = document.createElement("button");
  btnFlutuante.id = "btn-carrinho-flutuante";
  btnFlutuante.innerHTML =
    '🛒 <span class="badge" id="badge-carrinho" style="display: none;">0</span>';
  btnFlutuante.setAttribute("aria-label", "Abrir carrinho");
  btnFlutuante.addEventListener("click", abrirCarrinho);
  document.body.appendChild(btnFlutuante);

  // Cria o overlay
  const overlay = document.createElement("div");
  overlay.id = "overlay-carrinho";
  overlay.addEventListener("click", fecharCarrinho);
  document.body.appendChild(overlay);

  // Cria o painel lateral
  const painel = document.createElement("aside");
  painel.id = "painel-carrinho";
  painel.innerHTML = `
        <div class="carrinho-header">
            <h3>🛒 Seu Carrinho</h3>
            <button id="btn-fechar-carrinho" aria-label="Fechar">✕</button>
        </div>
        <div class="carrinho-itens" id="lista-carrinho"></div>
        <div class="carrinho-footer">
            <div class="carrinho-total">
                <span>Total:</span>
                <strong id="total-carrinho">R$ 0,00</strong>
            </div>
            <button id="btn-finalizar-pedido">✅ Finalizar Pedido</button>
            <button id="btn-limpar-carrinho">🗑️ Limpar Carrinho</button>
        </div>
    `;
  document.body.appendChild(painel);

  // Eventos
  document
    .getElementById("btn-fechar-carrinho")
    .addEventListener("click", fecharCarrinho);
  document
    .getElementById("btn-limpar-carrinho")
    .addEventListener("click", limparCarrinho);
  document
    .getElementById("btn-finalizar-pedido")
    .addEventListener("click", () => {
      if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
      }
      const total = calcularTotal().toFixed(2).replace(".", ",");
      alert(
        `✅ Pedido finalizado!\n\nTotal: R$ ${total}\n\nObrigado pela preferência! 🍔`,
      );
      carrinho = [];
      salvarCarrinho();
      atualizarCarrinho();
      fecharCarrinho();
    });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharCarrinho();
  });
}

// ============================================================
// 12. INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  criarEstruturaCarrinho();
  atualizarCarrinho();
  console.log("🛒 Carrinho inicializado. Itens salvos:", carrinho.length);
});
