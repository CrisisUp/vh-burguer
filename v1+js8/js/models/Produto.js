// js/models/Produto.js

export class Produto {
  constructor(id, nome, descricao, preco, categoria, esgotado = false) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
    this.esgotado = esgotado;
  }

  // Método para formatar o preço
  get precoFormatado() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  // Método para saber se pode ser vendido
  get disponivel() {
    return !this.esgotado;
  }
}
