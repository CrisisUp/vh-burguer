// js/models/Carrinho.js

export class Carrinho {
  // O "#" define uma propriedade privada (não pode ser acessada de fora)
  #itens = [];

  constructor() {
    // Ao criar um carrinho, tenta recuperar do localStorage
    const salvo = localStorage.getItem("vh-carrinho");
    if (salvo) {
      this.#itens = JSON.parse(salvo);
    }
  }

  // Getter: propriedade calculada
  get itens() {
    return this.#itens;
  }

  get quantidadeTotal() {
    return this.#itens.reduce((acc, item) => acc + item.quantidade, 0);
  }

  get valorTotal() {
    return this.#itens.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0,
    );
  }

  get vazio() {
    return this.#itens.length === 0;
  }

  // Métodos de ação
  adicionar(produto) {
    const itemExistente = this.#itens.find((item) => item.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      // Cria um objeto novo com a quantidade inicial
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
    const index = this.#itens.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.#itens[index].quantidade--;
      if (this.#itens[index].quantidade === 0) {
        this.#itens.splice(index, 1);
      }
    }
    this.#salvar();
  }

  limpar() {
    this.#itens = [];
    this.#salvar();
  }

  // Método privado: só a classe pode chamar
  #salvar() {
    localStorage.setItem("vh-carrinho", JSON.stringify(this.#itens));
  }
}
