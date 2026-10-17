// js/models/Produto.js

export class Produto {
  constructor(id, nome, preco, categoria, esgotado = false) {
    // Se alguém tentar dar "new Produto()", avisamos que é abstrata
    if (this.constructor === Produto) {
      throw new Error(
        "A classe Produto é abstrata e não pode ser instanciada diretamente.",
      );
    }
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.esgotado = esgotado;
  }

  get precoFormatado() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  get disponivel() {
    return !this.esgotado;
  }

  // Método genérico que pode ser sobrescrito pelas classes filhas
  preparar() {
    return `Preparando ${this.nome}...`;
  }
}
