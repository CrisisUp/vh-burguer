// src/main.ts
// ============================================================
// 1. SAUDAÇÃO DINÂMICA + DATA ATUAL
// ============================================================
function exibirSaudacao(): void {
    const elemento = document.getElementById("saudacao-topo");
    if (!elemento) return;

    const agora = new Date();
    const hora = agora.getHours();

    let saudacao: string;
    if (hora >= 5 && hora < 12) {
        saudacao = "☀️ Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "🌤️ Boa tarde";
    } else {
        saudacao = "🌙 Boa noite";
    }

    const dataFormatada = agora.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    elemento.textContent = `${saudacao}! Hoje é ${dataFormatada}.`;
}

// ============================================================
// 2. DESTACAR MENU ATIVO
// ============================================================
function destacarMenuAtivo(): void {
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
// 3. RELÓGIO NO RODAPÉ
// ============================================================
function iniciarRelogio(): void {
    const elemento = document.getElementById("relogio");
    if (!elemento) return;

    function atualizar(): void {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, "0");
        const minutos = String(agora.getMinutes()).padStart(2, "0");
        const segundos = String(agora.getSeconds()).padStart(2, "0");
        elemento!.textContent = `${horas}:${minutos}:${segundos}`;
    }

    atualizar();
    setInterval(atualizar, 1000);
}

// ============================================================
// 4. BOTÃO "VOLTAR AO TOPO"
// ============================================================
function configurarBotaoTopo(): void {
    if (document.getElementById("btn-topo")) return;

    const botao = document.createElement("button");
    botao.id = "btn-topo";
    botao.textContent = "↑";
    botao.title = "Voltar ao topo";
    botao.setAttribute("aria-label", "Voltar ao topo");
    document.body.appendChild(botao);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            botao.classList.add("visivel");
        } else {
            botao.classList.remove("visivel");
        }
    });

    botao.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ============================================================
// 5. ALTERNAR TEMA (DARK/LIGHT MODE)
// ============================================================
function configurarTema(): void {
    const temaSalvo = localStorage.getItem("vh-tema");
    
    if (temaSalvo) {
        document.documentElement.setAttribute("data-tema", temaSalvo);
    } else {
        const prefereClaro = window.matchMedia("(prefers-color-scheme: light)").matches;
        document.documentElement.setAttribute("data-tema", prefereClaro ? "claro" : "escuro");
    }

    let btnTema = document.getElementById("btn-tema") as HTMLButtonElement | null;
    
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

function atualizarIconeTema(): void {
    const btnTema = document.getElementById("btn-tema");
    if (!btnTema) return;

    const temaAtual = document.documentElement.getAttribute("data-tema");
    btnTema.textContent = temaAtual === "claro" ? "🌙" : "☀️";
}

// ============================================================
// 6. MENU MOBILE
// ============================================================
function configurarMenuMobile(): void {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    
    if (!header || !nav) return;

    let btnMenu = document.getElementById("btn-menu-mobile") as HTMLButtonElement | null;
    
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
        btnMenu!.innerHTML = menuAberto ? "✕" : "☰";
        btnMenu!.setAttribute("aria-expanded", menuAberto.toString());
    });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    exibirSaudacao();
    destacarMenuAtivo();
    iniciarRelogio();
    configurarBotaoTopo();
    configurarTema();
    configurarMenuMobile();
    console.log("🍔 VH Burger v2-js8-css8 (TypeScript) carregado!");
});