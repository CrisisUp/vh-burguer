// ============================================================
// VH BURGER - Cardápio Dinâmico (v2-js3-css3)
// ============================================================

// ARRAY DE PRODUTOS (mantém o mesmo do js2)
const produtos = [
  {
    id: 1,
    nome: "VH Clássico",
    descricao: "Pão brioche, blend 180g, queijo cheddar, alface e tomate.",
    preco: 28.0,
    categoria: "hamburguer",
    esgotado: false,
  },
  {
    id: 2,
    nome: "VH Bacon",
    descricao: "Blend 180g, cheddar, bacon crocante e molho barbecue.",
    preco: 32.0,
    categoria: "hamburguer",
    esgotado: false,
  },
  {
    id: 3,
    nome: "VH Cheddar Duplo",
    descricao: "Dois blends de 180g, cheddar cremoso e cebola caramelizada.",
    preco: 35.0,
    categoria: "hamburguer",
    esgotado: false,
  },
  {
    id: 4,
    nome: "VH Veggie",
    descricao: "Hambúrguer de grão-de-bico, queijo minas e rúcula.",
    preco: 30.0,
    categoria: "hamburguer",
    esgotado: true,
  },
  {
    id: 5,
    nome: "Batata Frita Rústica",
    descricao: "Batatas com casca e temperos especiais.",
    preco: 18.0,
    categoria: "acompanhamento",
    esgotado: false,
  },
  {
    id: 6,
    nome: "Onion Rings",
    descricao: "Anéis de cebola empanados (8 unidades).",
    preco: 16.0,
    categoria: "acompanhamento",
    esgotado: false,
  },
  {
    id: 7,
    nome: "Refrigerante Lata",
    descricao: "Coca-Cola, Guaraná ou Fanta (350ml).",
    preco: 7.0,
    categoria: "bebida",
    esgotado: false,
  },
  {
    id: 8,
    nome: "Milkshake",
    descricao: "Chocolate, morango ou ovomaltine (400ml).",
    preco: 18.0,
    categoria: "bebida",
    esgotado: false,
  },
];

function formatarPreco(preco) {
  return `R$ ${preco.toFixed(2).replace(".", ",")}`;
}

function renderizarProdutos() {
  const container = document.getElementById("grid-cardapio");
  if (!container) return;

  container.innerHTML = '<p class="carregando">⏳ Carregando produtos...</p>';

  setTimeout(() => {
    let html = "";
    produtos.forEach((produto) => {
      html += `
                <div class="card-produto">
                    ${produto.esgotado ? '<span class="badge-esgotado">Esgotado</span>' : ""}
                    <h3>${produto.nome}</h3>
                    <p class="descricao">${produto.descricao}</p>
                    <p class="preco">${formatarPreco(produto.preco)}</p>
                    <button 
                        ${produto.esgotado ? "disabled" : ""} 
                        onclick='adicionarAoCarrinho(${JSON.stringify(produto).replace(/'/g, "&#39;")})'>
                        ${produto.esgotado ? "❌ Esgotado" : "➕ Adicionar ao Carrinho"}
                    </button>
                </div>
            `;
    });
    container.innerHTML = html;
    console.log(`🍔 ${produtos.length} produtos renderizados no cardápio!`);
  }, 800);
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
});
