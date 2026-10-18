// js/checkout.js
import { criarEstrategiaPagamento } from "./models/Pagamento.js";

function soltarConfetti() {
  const cores = ["#ffcc00", "#e63946", "#2ecc71"];
  for (let i = 0; i < 50; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

function configurarCheckout() {
  const form = document.getElementById("form-checkout");
  if (!form) return;

  // [As validações e máscaras continuam iguais às do js4...]
  // ...

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // (Imagine que validou tudo com sucesso)
    const tudoValido = true;

    if (tudoValido) {
      const carrinho = JSON.parse(localStorage.getItem("vh-carrinho")) || [];
      const total = carrinho.reduce(
        (acc, i) => acc + i.preco * i.quantidade,
        0,
      );
      const tipoPagamento = document.getElementById("pagamento").value;

      // ====== DESIGN PATTERN STRATEGY ======
      try {
        const estrategia = criarEstrategiaPagamento(tipoPagamento);
        const mensagem = estrategia.processar(total);

        console.log("✅ Pedido Aprovado!");
        console.log(mensagem);

        soltarConfetti();
        localStorage.removeItem("vh-carrinho");
        form.reset();

        const msgEl = document.getElementById("mensagem-sucesso");
        if (msgEl) {
          msgEl.innerHTML = `🎉 Pedido realizado!<br><small>${mensagem}</small>`;
          msgEl.classList.add("ativo");
        }

        setTimeout(() => (window.location.href = "index.html"), 4000);
      } catch (erro) {
        console.error(erro);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", configurarCheckout);
