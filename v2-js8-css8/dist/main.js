// src/main.ts
// ============================================================
// 1. DESTACAR MENU ATIVO
// ============================================================
function destacarMenuAtivo() {
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
    const linksMenu = document.querySelectorAll("nav a");
    linksMenu.forEach(link => {
        const href = link.getAttribute("href");
        if (href === paginaAtual) {
            link.classList.add("ativo");
        }
    });
}
// ============================================================
// 2. RELÓGIO NO RODAPÉ
// ============================================================
function iniciarRelogio() {
    const elemento = document.getElementById("relogio");
    if (!elemento)
        return;
    function atualizar() {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, "0");
        const minutos = String(agora.getMinutes()).padStart(2, "0");
        const segundos = String(agora.getSeconds()).padStart(2, "0");
        elemento.textContent = `${horas}:${minutos}:${segundos}`;
    }
    atualizar();
    setInterval(atualizar, 1000);
}
// ============================================================
// 3. BOTÃO "VOLTAR AO TOPO"
// ============================================================
function configurarBotaoTopo() {
    if (document.getElementById("btn-topo"))
        return;
    const botao = document.createElement("button");
    botao.id = "btn-topo";
    botao.textContent = "↑";
    botao.title = "Voltar ao topo";
    botao.setAttribute("aria-label", "Voltar ao topo");
    document.body.appendChild(botao);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botao.classList.add("visivel");
        }
        else {
            botao.classList.remove("visivel");
        }
    });
    botao.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
// ============================================================
// 4. ALTERNAR TEMA (DARK/LIGHT MODE)
// ============================================================
function configurarTema() {
    const temaSalvo = localStorage.getItem("vh-tema");
    if (temaSalvo) {
        document.documentElement.setAttribute("data-tema", temaSalvo);
    }
    else {
        const prefereClaro = window.matchMedia("(prefers-color-scheme: light)").matches;
        document.documentElement.setAttribute("data-tema", prefereClaro ? "claro" : "escuro");
    }
    let btnTema = document.getElementById("btn-tema");
    if (!btnTema) {
        btnTema = document.createElement("button");
        btnTema.id = "btn-tema";
        btnTema.setAttribute("aria-label", "Alternar tema claro/escuro");
        document.body.appendChild(btnTema);
    }
    atualizarIconeTema();
    btnTema.addEventListener("click", () => {
        const temaAtual = document.documentElement.getAttribute("data-tema");
        const novoTexto = temaAtual === "claro" ? "escuro" : "claro";
        document.documentElement.setAttribute("data-tema", novoTexto);
        localStorage.setItem("vh-tema", novoTexto);
        atualizarIconeTema();
    });
}
function atualizarIconeTema() {
    const btnTema = document.getElementById("btn-tema");
    if (!btnTema)
        return;
    const temaAtual = document.documentElement.getAttribute("data-tema");
    btnTema.textContent = temaAtual === "claro" ? "🌙" : "☀️";
}
// ============================================================
// 5. MENU MOBILE
// ============================================================
function configurarMenuMobile() {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    if (!header || !nav)
        return;
    let btnMenu = document.getElementById("btn-menu-mobile");
    if (!btnMenu) {
        btnMenu = document.createElement("button");
        btnMenu.id = "btn-menu-mobile";
        btnMenu.innerHTML = "☰";
        btnMenu.setAttribute("aria-label", "Abrir menu");
        btnMenu.setAttribute("aria-expanded", "false");
        header.insertBefore(btnMenu, nav);
    }
    btnMenu.addEventListener("click", () => {
        const menuAberto = nav.classList.toggle("menu-aberto");
        btnMenu.innerHTML = menuAberto ? "✕" : "☰";
        btnMenu.setAttribute("aria-expanded", menuAberto.toString());
    });
}
// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    destacarMenuAtivo();
    iniciarRelogio();
    configurarBotaoTopo();
    configurarTema();
    configurarMenuMobile();
    console.log("🍔 VH Burger v2-js8-css8 (TypeScript) carregado!");
});
export {};
//# sourceMappingURL=main.js.map