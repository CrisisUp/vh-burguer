// js/api.js
import { Bebida } from "./models/Bebida.js";
import { Hamburguer } from "./models/Hamburguer.js";

export async function buscarProdutos() {
  const resposta = await fetch("produtos.json");

  if (!resposta.ok) {
    throw new Error(`Erro HTTP: ${resposta.status}`);
  }

  const dados = await resposta.json();

  // Transforma cada objeto no seu tipo específico (Polimorfismo)
  return dados.map((item) => {
    if (item.tipo === "hamburguer") {
      return new Hamburguer(
        item.id,
        item.nome,
        item.preco,
        item.esgotado,
        item.pontoCarne,
      );
    } else if (item.tipo === "bebida") {
      return new Bebida(
        item.id,
        item.nome,
        item.preco,
        item.esgotado,
        item.volume,
        item.gelada,
      );
    }
    // Fallback de segurança (não deveria chegar aqui)
    throw new Error(`Tipo desconhecido: ${item.tipo}`);
  });
}
