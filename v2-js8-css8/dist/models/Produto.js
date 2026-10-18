export class Produto {
    id;
    nome;
    descricao;
    preco;
    categoria;
    esgotado;
    imagem;
    constructor(dados) {
        this.id = dados.id;
        this.nome = dados.nome;
        this.descricao = dados.descricao;
        this.preco = dados.preco;
        this.categoria = dados.categoria;
        this.esgotado = dados.esgotado;
        this.imagem = dados.imagem;
    }
    get precoFormatado() {
        return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
    }
    get disponivel() {
        return !this.esgotado;
    }
}
//# sourceMappingURL=Produto.js.map