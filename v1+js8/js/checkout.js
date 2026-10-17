// js/checkout.js

export function configurarCheckout(aoFinalizarPedido) {
  const form = document.getElementById("form-pedido");
  const secaoCheckout = document.getElementById("secao-checkout");
  const msgSucesso = document.getElementById("mensagem-sucesso");
  const btnIrCheckout = document.getElementById("btn-ir-checkout");

  btnIrCheckout.addEventListener("click", () => {
    if (aoFinalizarPedido.verificarCarrinhoVazio()) {
      alert("Carrinho vazio!");
      return;
    }
    secaoCheckout.style.display = "block";
    secaoCheckout.scrollIntoView({ behavior: "smooth" });
  });

  function validarCampo(idInput, idErro, condicao) {
    const input = document.getElementById(idInput);
    const erro = document.getElementById(idErro);
    if (condicao) {
      input.classList.add("campo-valido");
      input.classList.remove("campo-invalido");
      erro.classList.remove("ativo");
      return true;
    } else {
      input.classList.add("campo-invalido");
      input.classList.remove("campo-valido");
      erro.classList.add("ativo");
      return false;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeOk = validarCampo(
      "nome",
      "erro-nome",
      document.getElementById("nome").value.trim().length >= 3,
    );
    const telOk = validarCampo(
      "telefone",
      "erro-telefone",
      document.getElementById("telefone").value.trim().length >= 8,
    );
    const endOk = validarCampo(
      "endereco",
      "erro-endereco",
      document.getElementById("endereco").value.trim().length >= 10,
    );

    if (nomeOk && telOk && endOk) {
      // Chama a função de callback passada pelo main.js
      aoFinalizarPedido.sucesso();

      msgSucesso.classList.add("ativo");
      form.reset();
      document
        .querySelectorAll(".campo-valido")
        .forEach((el) => el.classList.remove("campo-valido"));

      setTimeout(() => {
        msgSucesso.classList.remove("ativo");
        secaoCheckout.style.display = "none";
      }, 4000);
    }
  });
}
