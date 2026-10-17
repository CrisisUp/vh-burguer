// js/carrinho.js

// Recupera o carrinho do localStorage ao iniciar
let carrinho = JSON.parse(localStorage.getItem("vh-carrinho")) || [];

export function obterCarrinho() {
  return carrinho;
}

export function adicionarItem(produto) {
  const itemExistente = carrinho.find((item) => item.id === produto.id);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
  salvarNoStorage();
}

export function removerItem(id) {
  const index = carrinho.findIndex((item) => item.id === id);
  if (index !== -1) {
    carrinho[index].quantidade--;
    if (carrinho[index].quantidade === 0) {
      carrinho.splice(index, 1);
    }
  }
  salvarNoStorage();
}

export function limparCarrinho() {
  carrinho = [];
  salvarNoStorage();
}

export function obterTotal() {
  return carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
}

export function obterQuantidadeTotal() {
  return carrinho.reduce((acc, item) => acc + item.quantidade, 0);
}

function salvarNoStorage() {
  localStorage.setItem("vh-carrinho", JSON.stringify(carrinho));
}
