// src/models/Bebida.ts
import { Produto } from "./Produto.js";

export class Bebida extends Produto {
    volume: string;
    gelada: boolean;

    constructor(
        id: number,
        nome: string,
        preco: number,
        esgotado: boolean,
        volume: string,
        gelada: boolean
    ) {
        super(id, nome, preco, "bebida", esgotado);
        this.volume = volume;
        this.gelada = gelada;
    }

    preparar(): string {
        if (this.gelada) {
            return `🧊 Pegando ${this.nome} (${this.volume}) na geladeira...`;
        }
        return `🥤 Servindo ${this.nome} (${this.volume})...`;
    }
}