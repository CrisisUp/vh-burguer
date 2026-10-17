// js/models/Carrinho.js (mesmo do js10)
export class Carrinho {
  #itens = [];
  static #instancia = null;

  constructor() {
    if (Carrinho.#instancia) return Carrinho.#instancia;
    Carrinho.#instancia = this;
    const salvo = localStorage.getItem("vh-carrinho");
    if (salvo) this.#itens = JSON.parse(salvo);
  }

  get itens() {
    return this.#itens;
  }
  get quantidadeTotal() {
    return this.#itens.reduce((acc, i) => acc + i.quantidade, 0);
  }
  get valorTotal() {
    return this.#itens.reduce((acc, i) => acc + i.preco * i.quantidade, 0);
  }
  get vazio() {
    return this.#itens.length === 0;
  }

  adicionar(produto) {
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

  remover(id) {
    const index = this.#itens.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.#itens[index].quantidade--;
      if (this.#itens[index].quantidade === 0) this.#itens.splice(index, 1);
    }
    this.#salvar();
  }

  limpar() {
    this.#itens = [];
    this.#salvar();
  }

  // Método de teste (para resetar o singleton nos testes)
  static _resetarParaTestes() {
    Carrinho.#instancia = null;
  }

  #salvar() {
    localStorage.setItem("vh-carrinho", JSON.stringify(this.#itens));
  }
}
