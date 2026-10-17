// js/ui.js

export function renderizarProdutos(lista) {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  lista.forEach((produto) => {
    const div = document.createElement("div");
    div.className = `produto ${!produto.disponivel ? "esgotado" : ""}`;

    div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">${produto.precoFormatado}</p>
        `;

    const btn = document.createElement("button");
    btn.className = "btn-carrinho";
    btn.textContent = !produto.disponivel ? "❌ Esgotado" : "➕ Adicionar";
    btn.disabled = !produto.disponivel;

    if (produto.disponivel) {
      btn.addEventListener("click", () => {
        const evento = new CustomEvent("adicionar-ao-carrinho", {
          detail: produto,
        });
        document.dispatchEvent(evento);
      });
    }

    div.appendChild(btn);
    container.appendChild(div);
  });
}

// O resto (renderizarCarrinho, mostrarLoading, etc.) fica igual ao js7
export function renderizarCarrinho(carrinhoObj) {
  // Agora recebe o objeto Carrinho inteiro
  document.getElementById("qtd-carrinho").textContent =
    carrinhoObj.quantidadeTotal;
  document.getElementById("total-carrinho").textContent = carrinhoObj.valorTotal
    .toFixed(2)
    .replace(".", ",");

  const listaCarrinho = document.getElementById("lista-carrinho");
  listaCarrinho.innerHTML = "";

  if (carrinhoObj.vazio) {
    listaCarrinho.innerHTML = "<p>Carrinho vazio.</p>";
  } else {
    carrinhoObj.itens.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `<span>${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}</span>`;

      const btnRemover = document.createElement("button");
      btnRemover.textContent = "❌";

      btnRemover.onclick = () => {
        const evento = new CustomEvent("remover-do-carrinho", {
          detail: item.id,
        });
        document.dispatchEvent(evento);
      };

      div.appendChild(btnRemover);
      listaCarrinho.appendChild(div);
    });
  }
}

export function mostrarLoading(mostrar) {
  document.getElementById("loading").style.display = mostrar ? "block" : "none";
}

export function mostrarErroRede(mostrar) {
  document.getElementById("erro-rede").classList.toggle("ativo", mostrar);
}
