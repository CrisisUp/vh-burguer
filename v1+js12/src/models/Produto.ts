// src/models/Produto.ts

export interface ProdutoDados {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    esgotado: boolean;
}

export abstract class Produto implements ProdutoDados {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    esgotado: boolean;

    constructor(
        id: number,
        nome: string,
        preco: number,
        categoria: string,
        esgotado: boolean = false
    ) {
        // ⬇️ PROTEÇÃO EM RUNTIME: classe abstrata
        if (this.constructor === Produto) {
            throw new Error(
                "A classe Produto é abstrata e não pode ser instanciada diretamente."
            );
        }

        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.esgotado = esgotado;
    }

    get precoFormatado(): string {
        return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
    }

    get disponivel(): boolean {
        return !this.esgotado;
    }

    abstract preparar(): string;
}