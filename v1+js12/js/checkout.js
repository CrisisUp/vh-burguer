// js/checkout.js

export function configurarCheckout(callbacks) {
  const form = document.getElementById("form-pedido");
  const secaoCheckout = document.getElementById("secao-checkout");
  const msgSucesso = document.getElementById("mensagem-sucesso");
  const btnIrCheckout = document.getElementById("btn-ir-checkout");

  btnIrCheckout.addEventListener("click", () => {
    if (callbacks.verificarCarrinhoVazio()) {
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
    const pagOk = validarCampo(
      "pagamento",
      "erro-pagamento",
      document.getElementById("pagamento").value !== "",
    );

    if (nomeOk && telOk && endOk && pagOk) {
      // Pega os dados
      const dadosForm = {
        cliente: {
          nome: document.getElementById("nome").value,
          telefone: document.getElementById("telefone").value,
          endereco: document.getElementById("endereco").value,
        },
        pagamento: document.getElementById("pagamento").value,
      };

      // Delega o processamento do pagamento e do pedido para o main
      const resultado = callbacks.sucesso(dadosForm);

      // Mostra mensagem de sucesso (opcionalmente inclui mensagem do Strategy)
      msgSucesso.innerHTML = `🎉 Pedido realizado com sucesso!<br><small>${resultado.mensagemPagamento}</small>`;
      msgSucesso.classList.add("ativo");

      form.reset();
      document
        .querySelectorAll(".campo-valido")
        .forEach((el) => el.classList.remove("campo-valido"));

      setTimeout(() => {
        msgSucesso.classList.remove("ativo");
        secaoCheckout.style.display = "none";
      }, 6000);
    }
  });
}
