// ============================================================
// VH BURGER - Cardápio Dinâmico com Fetch (v2-js6-css6)
// ============================================================

// ============================================================
// 1. BUSCAR PRODUTOS DA API (JSON EXTERNO)
// ============================================================
async function buscarProdutos() {
  const resposta = await fetch("produtos.json");

  if (!resposta.ok) {
    throw new Error(`Erro HTTP: ${resposta.status}`);
  }

  return await resposta.json();
}

// ============================================================
// 2. SKELETON LOADING (enquanto carrega)
// ============================================================
function mostrarSkeleton() {
  const container = document.getElementById("grid-cardapio");
  if (!container) return;

  let html = "";

  // Cria 8 skeletons (mesmo número de produtos esperados)
  for (let i = 0; i < 8; i++) {
    html += `
            <div class="skeleton-card">
                <div class="skeleton skeleton-imagem"></div>
                <div class="skeleton skeleton-titulo"></div>
                <div class="skeleton skeleton-texto"></div>
                <div class="skeleton skeleton-texto curto"></div>
                <div class="skeleton skeleton-preco"></div>
                <div class="skeleton skeleton-botao"></div>
            </div>
        `;
  }

  container.innerHTML = html;
}

// ============================================================
// 3. RENDERIZAR PRODUTOS (após fetch)
// ============================================================
function renderizarProdutos(produtos) {
  const container = document.getElementById("grid-cardapio");
  if (!container) return;

  let html = "";
  produtos.forEach((produto) => {
    html += `
            <div class="card-produto">
                <div class="imagem-container">
                    <img 
                        src="${produto.imagem}" 
                        alt="${produto.nome}"
                        class="imagem-produto"
                        loading="lazy"
                        onerror="this.style.display='none'">
                </div>
                ${produto.esgotado ? '<span class="badge-esgotado">Esgotado</span>' : ""}
                <h3>${produto.nome}</h3>
                <p class="descricao">${produto.descricao}</p>
                <p class="preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                <button 
                    ${produto.esgotado ? "disabled" : ""} 
                    onclick='adicionarAoCarrinho(${JSON.stringify(produto).replace(/'/g, "&#39;")})'>
                    ${produto.esgotado ? "❌ Esgotado" : "➕ Adicionar ao Carrinho"}
                </button>
            </div>
        `;
  });

  container.innerHTML = html;

  // Animação em cascata
  const cards = container.querySelectorAll(".card-produto");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.4s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 80);
  });

  console.log(`🍔 ${produtos.length} produtos renderizados via API!`);
}

// ============================================================
// 4. MOSTRAR ERRO (se fetch falhar)
// ============================================================
function mostrarErro(mensagem) {
  const container = document.getElementById("grid-cardapio");
  if (!container) return;

  container.innerHTML = `
        <div class="erro-rede" style="grid-column: 1 / -1;">
            <h3>❌ Ops! Algo deu errado</h3>
            <p>${mensagem}</p>
            <button class="btn-tentar-novamente" onclick="location.reload()">
                🔄 Tentar Novamente
            </button>
        </div>
    `;
}

// ============================================================
// 5. FUNÇÃO PRINCIPAL
// ============================================================
async function carregarCardapio() {
  // 1. Mostra skeleton
  mostrarSkeleton();

  // 2. Tenta buscar e renderizar
  try {
    const produtos = await buscarProdutos();
    renderizarProdutos(produtos);
  } catch (erro) {
    console.error("❌ Erro ao carregar cardápio:", erro);
    mostrarErro(
      "Não foi possível carregar os produtos. Verifique sua conexão com a internet ou tente novamente.",
    );
  }
}

// ============================================================
// 6. INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  carregarCardapio();
});
