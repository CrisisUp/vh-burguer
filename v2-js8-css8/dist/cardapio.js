// src/cardapio.ts
import { Carrinho } from "./models/Carrinho.js";
import { Produto } from "./models/Produto.js";
const carrinho = new Carrinho();
let todosOsProdutos = [];
export async function carregarCardapio() {
    const container = document.getElementById("grid-cardapio");
    if (!container)
        return;
    try {
        const resposta = await fetch("produtos.json");
        const dados = await resposta.json();
        todosOsProdutos = dados.map(item => new Produto(item));
        renderizarProdutos(todosOsProdutos, container);
    }
    catch (erro) {
        container.innerHTML = `<div class="erro-rede"><h3>❌ Erro de rede</h3><button onclick="location.reload()">Tentar novamente</button></div>`;
    }
}
function renderizarProdutos(produtos, container) {
    let html = "";
    produtos.forEach(produto => {
        html += `
            <div class="card-produto">
                <div class="imagem-container">
                    <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy" onerror="this.style.display='none'">
                </div>
                ${!produto.disponivel ? '<span class="badge-esgotado">Esgotado</span>' : ''}
                <h3>${produto.nome}</h3>
                <p class="descricao">${produto.descricao}</p>
                <p class="preco">${produto.precoFormatado}</p>
                <button ${!produto.disponivel ? 'disabled' : ''} data-id="${produto.id}" class="btn-add-carrinho">
                    ${!produto.disponivel ? '❌ Esgotado' : '➕ Adicionar'}
                </button>
            </div>
        `;
    });
    container.innerHTML = html;
    container.querySelectorAll(".btn-add-carrinho").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const target = e.target;
            const id = parseInt(target.dataset.id || "0");
            const produto = todosOsProdutos.find(p => p.id === id);
            if (produto) {
                carrinho.adicionar(produto);
                window.dispatchEvent(new Event("carrinho-atualizado"));
                window.dispatchEvent(new Event("abrir-carrinho"));
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", () => carregarCardapio());
//# sourceMappingURL=cardapio.js.map