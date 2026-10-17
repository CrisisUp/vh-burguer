// js/models/Carrinho.js

export class Carrinho {
  #itens = [];

  // Variável estática que guarda a única instância
  static #instancia = null;

  constructor() {
    // Se já existe uma instância, retorna ela!
    if (Carrinho.#instancia) {
      return Carrinho.#instancia;
    }

    // Se não existe, cria e salva
    Carrinho.#instancia = this;

    // Recupera dados salvos
    const salvo = localStorage.getItem("vh-carrinho");
    if (salvo) {
      this.#itens = JSON.parse(salvo);
    }
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

  #salvar() {
    localStorage.setItem("vh-carrinho", JSON.stringify(this.#itens));
  }
}
