// ============================================================
// VH BURGER - Checkout Validado (v2-js6-css6)
// ============================================================

// ============================================================
// 1. MÁSCARAS DE DIGITAÇÃO
// ============================================================
function aplicarMascaraTelefone(input) {
  input.addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, ""); // Remove não-números
    valor = valor.substring(0, 11); // Máx 11 dígitos

    // Formata: (11) 99999-9999
    if (valor.length > 10) {
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (valor.length > 6) {
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
      valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (valor.length > 0) {
      valor = valor.replace(/^(\d*)/, "($1");
    }

    e.target.value = valor;
  });
}

function aplicarMascaraCep(input) {
  input.addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.substring(0, 8);

    if (valor.length > 5) {
      valor = valor.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
    }

    e.target.value = valor;
  });
}

// ============================================================
// 2. VALIDAÇÕES INDIVIDUAIS
// ============================================================
function validarNome() {
  const input = document.getElementById("nome");
  const valor = input.value.trim();
  const ok = valor.length >= 3;
  atualizarEstado(input, ok);
  return ok;
}

function validarEmail() {
  const input = document.getElementById("email");
  const valor = input.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const ok = regex.test(valor);
  atualizarEstado(input, ok);
  return ok;
}

function validarTelefone() {
  const input = document.getElementById("telefone");
  const valor = input.value.trim();
  const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  const ok = regex.test(valor);
  atualizarEstado(input, ok);
  return ok;
}

function validarCep() {
  const input = document.getElementById("cep");
  const valor = input.value.trim();
  const regex = /^\d{5}-\d{3}$/;
  const ok = regex.test(valor);
  atualizarEstado(input, ok);
  return ok;
}

function validarEndereco() {
  const input = document.getElementById("endereco");
  const valor = input.value.trim();
  const ok = valor.length >= 10;
  atualizarEstado(input, ok);
  return ok;
}

function validarPagamento() {
  const select = document.getElementById("pagamento");
  const ok = select.value !== "";
  atualizarEstado(select, ok);
  return ok;
}

function atualizarEstado(input, valido) {
  // Adiciona ou remove classes CSS
  if (valido) {
    input.classList.remove("campo-invalido");
    input.classList.add("campo-valido");
  } else {
    input.classList.remove("campo-valido");
    input.classList.add("campo-invalido");
  }

  // Mostra/esconde a mensagem de erro correspondente
  const erro = document.getElementById("erro-" + input.id);
  if (erro) {
    erro.classList.toggle("ativo", !valido);
  }
}

// ============================================================
// 3. RENDERIZAR RESUMO DO PEDIDO
// ============================================================
function renderizarResumo() {
  const container = document.getElementById("resumo-pedido-conteudo");
  if (!container) return;

  const carrinho = JSON.parse(localStorage.getItem("vh-carrinho")) || [];

  if (carrinho.length === 0) {
    container.innerHTML =
      '<p style="color: var(--cor-secundaria);">Seu carrinho está vazio. <a href="cardapio.html">Voltar ao cardápio</a></p>';
    return;
  }

  let html = "";
  let total = 0;

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;
    html += `
            <div class="resumo-linha">
                <span>${item.nome} (x${item.quantidade})</span>
                <span>R$ ${subtotal.toFixed(2).replace(".", ",")}</span>
            </div>
        `;
  });

  html += `
        <div class="resumo-linha total">
            <span>Total</span>
            <span>R$ ${total.toFixed(2).replace(".", ",")}</span>
        </div>
    `;

  container.innerHTML = html;

  // Se vazio, esconde o formulário
  const form = document.getElementById("form-checkout");
  if (form) {
    form.style.display = carrinho.length === 0 ? "none" : "block";
  }
}

// ============================================================
// 4. ⬇️ NOVO (v2-js6-css6): CONFETTI AO FINALIZAR
// ============================================================
function soltarConfetti() {
  const cores = ["#ffcc00", "#e63946", "#2ecc71", "#3498db", "#9b59b6"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      cores[Math.floor(Math.random() * cores.length)];
    confetti.style.width = Math.random() * 10 + 5 + "px";
    confetti.style.height = confetti.style.width;
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 0.5 + "s";

    document.body.appendChild(confetti);

    // Remove após a animação para não entupir o DOM
    setTimeout(() => confetti.remove(), 5000);
  }

  console.log("🎉 Confetti disparado!");
}

// ============================================================
// 5. SUBMIT DO FORMULÁRIO
// ============================================================
function configurarCheckout() {
  const form = document.getElementById("form-checkout");
  if (!form) return;

  // Máscaras
  aplicarMascaraTelefone(document.getElementById("telefone"));
  aplicarMascaraCep(document.getElementById("cep"));

  // Validação em tempo real (blur = ao sair do campo)
  document.getElementById("nome").addEventListener("blur", validarNome);
  document.getElementById("email").addEventListener("blur", validarEmail);
  document.getElementById("telefone").addEventListener("blur", validarTelefone);
  document.getElementById("cep").addEventListener("blur", validarCep);
  document.getElementById("endereco").addEventListener("blur", validarEndereco);
  document
    .getElementById("pagamento")
    .addEventListener("change", validarPagamento);

  // Submit
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // IMPEDE recarregar

    const nomeOk = validarNome();
    const emailOk = validarEmail();
    const telOk = validarTelefone();
    const cepOk = validarCep();
    const endOk = validarEndereco();
    const pagOk = validarPagamento();

    if (nomeOk && emailOk && telOk && cepOk && endOk && pagOk) {
      // SUCESSO!
      const carrinho = JSON.parse(localStorage.getItem("vh-carrinho")) || [];
      const total = carrinho.reduce(
        (acc, i) => acc + i.preco * i.quantidade,
        0,
      );

      // Simula envio
      console.log("📦 Pedido finalizado:");
      console.log("Cliente:", document.getElementById("nome").value);
      console.log("E-mail:", document.getElementById("email").value);
      console.log("Total:", `R$ ${total.toFixed(2)}`);
      console.log("Pagamento:", document.getElementById("pagamento").value);

      // ⬇️ NOVO: Solta confetti
      soltarConfetti();

      // Mostra mensagem de sucesso
      const msg = document.getElementById("mensagem-sucesso");
      if (msg) msg.classList.add("ativo");

      // Limpa o carrinho
      localStorage.removeItem("vh-carrinho");

      // Limpa o formulário
      form.reset();
      document
        .querySelectorAll(".campo-valido")
        .forEach((el) => el.classList.remove("campo-valido"));

      // Atualiza o resumo (agora vazio) e redireciona
      setTimeout(() => {
        renderizarResumo();
        if (msg) msg.classList.remove("ativo");
        window.location.href = "index.html"; // Volta para home
      }, 3000);
    } else {
      // ERRO: foca no primeiro inválido
      const primeiroErro = form.querySelector(".campo-invalido");
      if (primeiroErro) {
        primeiroErro.focus();
        primeiroErro.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });
}

// ============================================================
// 6. INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderizarResumo();
  configurarCheckout();
  console.log("💳 Checkout validado carregado! (v2-js6-css6)");
});
