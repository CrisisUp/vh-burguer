// src/cardapio.ts
import { Bebida } from "./models/Bebida.js";
import { Carrinho } from "./models/Carrinho.js";
import { Hamburguer } from "./models/Hamburguer.js";
import { Produto } from "./models/Produto.js";

const carrinho = new Carrinho();
let todosOsProdutos: Produto[] = [];
let termoBusca = "";

export async function carregarCardapio(): Promise<void> {
    const container = document.getElementById("grid-cardapio") as HTMLDivElement | null;
    if (!container) return;

    try {
        const resposta = await fetch("produtos.json");
        const dados = await resposta.json() as any[];

        // Transforma os dados do JSON na classe correta
        todosOsProdutos = dados.map(item => {
            if (item.categoria === "bebida") {
                return new Bebida(item.id, item.nome, item.preco, item.esgotado, "350ml", true);
            }
            // Assume que o resto é hamburguer
            return new Hamburguer(item.id, item.nome, item.preco, item.esgotado, "ao ponto");
        });

        renderizarProdutos(todosOsProdutos, container);

        // LÓGICA DA BUSCA
        const inputBusca = document.getElementById("busca") as HTMLInputElement;
        if (inputBusca) {
            inputBusca.addEventListener("input", (e) => {
                const target = e.target as HTMLInputElement;
                termoBusca = target.value.toLowerCase();
                
                const produtosFiltrados = todosOsProdutos.filter(p => 
                    p.nome.toLowerCase().includes(termoBusca)
                );
                
                renderizarProdutos(produtosFiltrados, container);
            });
        }

    } catch (erro) {
        container.innerHTML = `<div class="erro-rede"><h3>❌ Erro de rede</h3><button onclick="location.reload()">Tentar novamente</button></div>`;
    }
}

function renderizarProdutos(produtos: Produto[], container: HTMLDivElement): void {
    // Se a busca não retornar nada
    if (produtos.length === 0) {
        container.innerHTML = `<p class="sem-resultados" style="grid-column: 1/-1; text-align: center; color: var(--cor-texto-suave);">Nenhum produto encontrado para "${termoBusca}".</p>`;
        return;
    }

    let html = "";
    produtos.forEach(produto => {
        html += `
            <div class="card-produto">
                <div class="imagem-container">
                    <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy" width="300" height="200" onerror="this.style.display='none'">
                </div>
                ${!produto.disponivel ? '<span class="badge-esgotado">Esgotado</span>' : ''}
                <h3>${produto.nome}</h3>
                <p class="descricao">${produto.descricao || ""}</p>
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
            const target = e.target as HTMLButtonElement;
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