// js/models/Bebida.js
import { Produto } from "./Produto.js";

export class Bebida extends Produto {
  constructor(id, nome, preco, esgotado, volume, gelada) {
    super(id, nome, preco, "bebida", esgotado);
    this.volume = volume;
    this.gelada = gelada;
  }

  // Sobrescrevendo o preparar()
  preparar() {
    if (this.gelada) {
      return `🧊 Pegando ${this.nome} (${this.volume}) na geladeira...`;
    }
    return `🥤 Servindo ${this.nome} (${this.volume})...`;
  }
}
