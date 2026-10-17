// js/api.js
import { Produto } from "./models/Produto.js";

export async function buscarProdutos() {
  const resposta = await fetch("produtos.json");

  if (!resposta.ok) {
    throw new Error(`Erro HTTP: ${resposta.status}`);
  }

  const dados = await resposta.json();

  // Transforma os objetos crus em instâncias da classe Produto
  return dados.map(
    (item) =>
      new Produto(
        item.id,
        item.nome,
        item.descricao,
        item.preco,
        item.categoria,
        item.esgotado,
      ),
  );
}
