// js/ui.js

// Desenha a lista de produtos
export function renderizarProdutos(lista) {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  lista.forEach((produto) => {
    const div = document.createElement("div");
    div.className = `produto ${produto.esgotado ? "esgotado" : ""}`;

    div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        `;

    const btn = document.createElement("button");
    btn.className = "btn-carrinho";
    btn.textContent = produto.esgotado ? "❌ Esgotado" : "➕ Adicionar";
    btn.disabled = produto.esgotado;

    // Dispara um evento customizado quando o botão é clicado
    if (!produto.esgotado) {
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

// Desenha a lista do carrinho
export function renderizarCarrinho(carrinho, total, quantidade) {
  document.getElementById("qtd-carrinho").textContent = quantidade;
  document.getElementById("total-carrinho").textContent = total
    .toFixed(2)
    .replace(".", ",");

  const listaCarrinho = document.getElementById("lista-carrinho");
  listaCarrinho.innerHTML = "";

  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = "<p>Carrinho vazio.</p>";
  } else {
    carrinho.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `<span>${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}</span>`;

      const btnRemover = document.createElement("button");
      btnRemover.textContent = "❌";

      // Dispara evento customizado para remover
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

// Controle de UI básica
export function mostrarLoading(mostrar) {
  document.getElementById("loading").style.display = mostrar ? "block" : "none";
}

export function mostrarErroRede(mostrar) {
  document.getElementById("erro-rede").classList.toggle("ativo", mostrar);
}
