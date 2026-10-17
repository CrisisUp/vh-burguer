// js/api.js

// Exporta a função para ser usada em outros arquivos
export async function buscarProdutos() {
  const resposta = await fetch("produtos.json");

  if (!resposta.ok) {
    throw new Error(`Erro HTTP: ${resposta.status}`);
  }

  return await resposta.json();
}
