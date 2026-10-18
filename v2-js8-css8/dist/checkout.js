// src/checkout.ts
import { criarEstrategiaPagamento } from "./models/Pagamento.js";
// ============================================================
// 1. MÁSCARAS DE DIGITAÇÃO
// ============================================================
function aplicarMascaraTelefone(input) {
    input.addEventListener("input", (e) => {
        const target = e.target;
        let valor = target.value.replace(/\D/g, "").substring(0, 11);
        if (valor.length > 10) {
            valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        }
        else if (valor.length > 6) {
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        }
        else if (valor.length > 2) {
            valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
        }
        else if (valor.length > 0) {
            valor = valor.replace(/^(\d*)/, "($1");
        }
        target.value = valor;
    });
}
function aplicarMascaraCep(input) {
    input.addEventListener("input", (e) => {
        const target = e.target;
        let valor = target.value.replace(/\D/g, "").substring(0, 8);
        if (valor.length > 5) {
            valor = valor.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
        }
        target.value = valor;
    });
}
// ============================================================
// 2. VALIDAÇÕES
// ============================================================
function validarCampo(idInput, condicao) {
    const input = document.getElementById(idInput);
    const erro = document.getElementById(`erro-${idInput}`);
    if (condicao) {
        input.classList.remove("campo-invalido");
        input.classList.add("campo-valido");
        erro?.classList.remove("ativo");
    }
    else {
        input.classList.remove("campo-valido");
        input.classList.add("campo-invalido");
        erro?.classList.add("ativo");
    }
    return condicao;
}
// ============================================================
// 3. RESUMO DO PEDIDO
// ============================================================
function renderizarResumo() {
    const container = document.getElementById("resumo-pedido-conteudo");
    if (!container)
        return;
    const carrinho = JSON.parse(localStorage.getItem("vh-carrinho") || "[]");
    const form = document.getElementById("form-checkout");
    if (carrinho.length === 0) {
        container.innerHTML = '<p style="color: var(--cor-secundaria);">Seu carrinho está vazio.</p>';
        if (form)
            form.style.display = "none";
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
    if (form)
        form.style.display = "block";
}
// ============================================================
// 4. CONFETTI (Animação)
// ============================================================
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
// ============================================================
// 5. CONFIGURAÇÃO DO CHECKOUT
// ============================================================
function configurarCheckout() {
    const form = document.getElementById("form-checkout");
    if (!form)
        return;
    // Máscaras
    aplicarMascaraTelefone(document.getElementById("telefone"));
    aplicarMascaraCep(document.getElementById("cep"));
    // Submit
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const tel = document.getElementById("telefone").value.trim();
        const cep = document.getElementById("cep").value.trim();
        const end = document.getElementById("endereco").value.trim();
        const pag = document.getElementById("pagamento").value;
        const nomeOk = validarCampo("nome", nome.length >= 3);
        const emailOk = validarCampo("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
        const telOk = validarCampo("telefone", /^\(\d{2}\) \d{4,5}-\d{4}$/.test(tel));
        const cepOk = validarCampo("cep", /^\d{5}-\d{3}$/.test(cep));
        const endOk = validarCampo("endereco", end.length >= 10);
        const pagOk = validarCampo("pagamento", pag !== "");
        if (nomeOk && emailOk && telOk && cepOk && endOk && pagOk) {
            const carrinho = JSON.parse(localStorage.getItem("vh-carrinho") || "[]");
            const total = carrinho.reduce((acc, i) => acc + i.preco * i.quantidade, 0);
            try {
                // STRATEGY PATTERN
                const estrategia = criarEstrategiaPagamento(pag);
                const mensagem = estrategia.processar(total);
                console.log("✅ Pedido Aprovado!");
                console.log(mensagem);
                soltarConfetti();
                localStorage.removeItem("vh-carrinho");
                form.reset();
                document.querySelectorAll(".campo-valido").forEach(el => el.classList.remove("campo-valido"));
                const msgEl = document.getElementById("mensagem-sucesso");
                if (msgEl) {
                    msgEl.innerHTML = `🎉 Pedido realizado!<br><small>${mensagem}</small>`;
                    msgEl.classList.add("ativo");
                }
                setTimeout(() => window.location.href = "index.html", 4000);
            }
            catch (erro) {
                console.error("Erro no pagamento:", erro);
            }
        }
        else {
            const primeiroErro = form.querySelector(".campo-invalido");
            primeiroErro?.focus();
        }
    });
}
// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    renderizarResumo();
    configurarCheckout();
    console.log("💳 Checkout (TypeScript) carregado!");
});
//# sourceMappingURL=checkout.js.map