// src/models/Carrinho.ts
import type { Produto } from "./Produto.js";

export interface ItemCarrinho {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
}

export class Carrinho {
    #itens: ItemCarrinho[] = [];
    static #instancia: Carrinho | null = null;

    constructor() {
        if (Carrinho.#instancia) {
            return Carrinho.#instancia; // linha 10
        }
        Carrinho.#instancia = this;

        const salvo = localStorage.getItem("vh-carrinho");
        if (salvo) {
            this.#itens = JSON.parse(salvo) as ItemCarrinho[];
        }
    }

    get itens(): ItemCarrinho[] {
        return this.#itens;
    }

    get quantidadeTotal(): number {
        return this.#itens.reduce((acc, i) => acc + i.quantidade, 0);
    }

    get valorTotal(): number {
        return this.#itens.reduce((acc, i) => acc + i.preco * i.quantidade, 0);
    }

    get vazio(): boolean {
        return this.#itens.length === 0;
    }

    adicionar(produto: Produto): void {
        const itemExistente = this.#itens.find((i) => i.id === produto.id);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            this.#itens.push({
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: 1,
            });
        }
        this.#salvar();
    }

    remover(id: number): void {
        const index = this.#itens.findIndex((i) => i.id === id);
        if (index === -1) return; // ← NOVO: sai cedo (testar este caso)

        this.#itens[index].quantidade--;

        if (this.#itens[index].quantidade === 0) {
            this.#itens.splice(index, 1); // linha 43
        }

        this.#salvar();
    }

    limpar(): void {
        this.#itens = [];
        this.#salvar();
    }

    static _resetarParaTestes(): void {
        Carrinho.#instancia = null;
    }

    #salvar(): void {
        localStorage.setItem("vh-carrinho", JSON.stringify(this.#itens));
    }
}