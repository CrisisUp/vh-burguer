// src/models/Hamburguer.ts
import { Produto } from "./Produto.js";

export class Hamburguer extends Produto {
    pontoCarne: string;

    constructor(
        id: number,
        nome: string,
        preco: number,
        esgotado: boolean,
        pontoCarne: string
    ) {
        super({ id, nome, descricao: "", preco, categoria: "hamburguer", esgotado, imagem: "" });
        this.pontoCarne = pontoCarne;
    }

    preparar(): string {
        return `🍔 Grelhando o hambúrguer ${this.nome} (${this.pontoCarne})...`;
    }

    adicionarBacon(): string {
        this.preco += 5.00;
        return `${this.nome} agora tem bacon! Novo preço: ${this.precoFormatado}`;
    }
}