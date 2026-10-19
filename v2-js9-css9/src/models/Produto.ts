// src/models/Produto.ts

export interface ProdutoDados {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  esgotado: boolean;
  imagem: string;
}

export abstract class Produto implements ProdutoDados {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  esgotado: boolean;
  imagem: string;

  constructor(dados: ProdutoDados) {
    // ⬇️ PROTEÇÃO EM RUNTIME ⬇️
    if (this.constructor === Produto) {
      throw new Error("A classe Produto é abstrata e não pode ser instanciada diretamente.");
    }
    // ⬆️ PROTEÇÃO EM RUNTIME ⬆️

    this.id = dados.id;
    this.nome = dados.nome;
    this.descricao = dados.descricao;
    this.preco = dados.preco;
    this.categoria = dados.categoria;
    this.esgotado = dados.esgotado;
    this.imagem = dados.imagem;
  }

  get precoFormatado(): string {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  get disponivel(): boolean {
    return !this.esgotado;
  }

  abstract preparar(): string;
}