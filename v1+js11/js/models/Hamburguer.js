// js/models/Hamburguer.js
import { Produto } from "./Produto.js";

export class Hamburguer extends Produto {
  constructor(id, nome, preco, esgotado, pontoCarne) {
    // super() chama o construtor da classe Pai (Produto)
    // Sempre deve ser a primeira linha!
    super(id, nome, preco, "hamburguer", esgotado);

    // Atributo exclusivo do hambúrguer
    this.pontoCarne = pontoCarne;
  }

  // Sobrescrevendo (Override) o método preparar() do Pai
  preparar() {
    return `🍔 Grelhando o hambúrguer ${this.nome} (${this.pontoCarne})...`;
  }

  // Método exclusivo da filha
  adicionarBacon() {
    this.preco += 5.0;
    return `${this.nome} agora tem bacon! Novo preço: ${this.precoFormatado}`;
  }
}
