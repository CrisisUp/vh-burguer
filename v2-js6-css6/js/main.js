// ============================================================
// VH BURGER - JavaScript Principal (js1-css1)
// ============================================================

// ============================================================
// 1. SAUDAÇÃO DINÂMICA + DATA ATUAL
// ============================================================
function exibirSaudacao() {
  const elemento = document.getElementById("saudacao-topo");
  if (!elemento) return;

  const agora = new Date();
  const hora = agora.getHours();

  let saudacao;
  if (hora >= 5 && hora < 12) {
    saudacao = "☀️ Bom dia";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "🌤️ Boa tarde";
  } else {
    saudacao = "🌙 Boa noite";
  }

  // Formata a data: "sábado, 18 de outubro de 2026"
  const dataFormatada = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  elemento.textContent = `${saudacao}! Hoje é ${dataFormatada}.`;
}

// ============================================================
// 2. DESTACAR MENU ATIVO
// ============================================================
function destacarMenuAtivo() {
  // Pega o nome do arquivo atual da URL
  // Ex: "cardapio.html"
  const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

  // Pega todos os links do menu
  const linksMenu = document.querySelectorAll("nav a");

  linksMenu.forEach((link) => {
    // Pega o href do link (ex: "cardapio.html")
    const href = link.getAttribute("href");

    // Se o href for igual à página atual, adiciona classe "ativo"
    if (href === paginaAtual) {
      link.classList.add("ativo");
    }
  });
}

// ============================================================
// 3. RELÓGIO NO RODAPÉ
// ============================================================
function iniciarRelogio() {
  const elemento = document.getElementById("relogio");
  if (!elemento) return; // Se não tiver rodapé com id="relogio", sai

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
// 4. BOTÃO "VOLTAR AO TOPO"
// ============================================================
function configurarBotaoTopo() {
  // Cria o botão via JS (não precisa existir no HTML)
  const botao = document.createElement("button");
  botao.id = "btn-topo";
  botao.textContent = "↑";
  botao.title = "Voltar ao topo";
  botao.setAttribute("aria-label", "Voltar ao topo");
  document.body.appendChild(botao);

  // Mostra/esconde ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      botao.classList.add("visivel");
    } else {
      botao.classList.remove("visivel");
    }
  });

  // Ação: rolar para o topo suavemente
  botao.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================================
// 5. LOG DE INICIALIZAÇÃO
// ============================================================
function logInicializacao() {
  console.log("🍔 VH Burger v2-js2-css2 carregado!");
  console.log("📅 Data:", new Date().toLocaleString("pt-BR"));
  console.log(
    "📄 Página:",
    window.location.pathname.split("/").pop() || "index.html",
  );
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
// O DOM precisa estar carregado antes de manipular
document.addEventListener("DOMContentLoaded", () => {
  exibirSaudacao();
  destacarMenuAtivo();
  iniciarRelogio();
  configurarBotaoTopo();
  logInicializacao();
});

// ============================================================
// NOVIDADES DA v2-js5-css5 — DARK MODE E MENU MOBILE
// ============================================================

// ============================================================
// 6. ALTERNAR TEMA (DARK/LIGHT MODE)
// ============================================================
function configurarTema() {
  // 1. Recupera a preferência salva (ou usa o padrão do sistema)
  const temaSalvo = localStorage.getItem("vh-tema");

  if (temaSalvo) {
    document.documentElement.setAttribute("data-tema", temaSalvo);
  } else {
    // Se não tem preferência, detecta do sistema
    const prefereClaro = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    document.documentElement.setAttribute(
      "data-tema",
      prefereClaro ? "claro" : "escuro",
    );
  }

  // 2. Cria o botão de toggle (se não existir no HTML)
  let btnTema = document.getElementById("btn-tema");

  if (!btnTema) {
    btnTema = document.createElement("button");
    btnTema.id = "btn-tema";
    btnTema.setAttribute("aria-label", "Alternar tema claro/escuro");
    document.body.appendChild(btnTema);
  }

  // 3. Atualiza o ícone do botão
  atualizarIconeTema();

  // 4. Adiciona o evento de clique (se ainda não tem)
  btnTema.addEventListener("click", () => {
    const temaAtual = document.documentElement.getAttribute("data-tema");
    const novoTexto = temaAtual === "claro" ? "escuro" : "claro";

    document.documentElement.setAttribute("data-tema", novoTexto);
    localStorage.setItem("vh-tema", novoTexto);
    atualizarIconeTema();

    console.log(`🎨 Tema alterado para: ${novoTexto}`);
  });
}

function atualizarIconeTema() {
  const btnTema = document.getElementById("btn-tema");
  if (!btnTema) return;

  const temaAtual = document.documentElement.getAttribute("data-tema");
  btnTema.textContent = temaAtual === "claro" ? "🌙" : "☀️";
  btnTema.title =
    temaAtual === "claro" ? "Mudar para modo escuro" : "Mudar para modo claro";
}

// ============================================================
// 7. MENU MOBILE (HAMBÚRGUER)
// ============================================================
function configurarMenuMobile() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if (!header || !nav) return;

  // Cria o botão hambúrguer (se não existir)
  let btnMenu = document.getElementById("btn-menu-mobile");

  if (!btnMenu) {
    btnMenu = document.createElement("button");
    btnMenu.id = "btn-menu-mobile";
    btnMenu.innerHTML = "☰";
    btnMenu.setAttribute("aria-label", "Abrir menu");
    btnMenu.setAttribute("aria-expanded", "false");
    header.insertBefore(btnMenu, nav);
  }

  // Evento de clique
  btnMenu.addEventListener("click", () => {
    const menuAberto = nav.classList.toggle("menu-aberto");
    btnMenu.innerHTML = menuAberto ? "✕" : "☰";
    btnMenu.setAttribute("aria-expanded", menuAberto.toString());
  });

  // Fecha o menu ao clicar em um link (mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("menu-aberto");
        btnMenu.innerHTML = "☰";
        btnMenu.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Fecha o menu ao redimensionar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.classList.remove("menu-aberto");
      btnMenu.innerHTML = "☰";
    }
  });
}

// ============================================================
// 8. SKIP LINK (Acessibilidade)
// ============================================================
function configurarSkipLink() {
  // Cria o skip link se não existir
  if (document.querySelector(".skip-link")) return;

  const main = document.querySelector("main");
  if (!main) return;

  // Adiciona id ao main (se não tiver)
  if (!main.id) main.id = "conteudo-principal";
  main.setAttribute("tabindex", "-1");

  // Cria o link
  const skipLink = document.createElement("a");
  skipLink.href = "#conteudo-principal";
  skipLink.className = "skip-link";
  skipLink.textContent = "⏭️ Ir para o conteúdo principal";
  document.body.insertBefore(skipLink, document.body.firstChild);
}

// ============================================================
// INICIALIZAÇÃO ATUALIZADA (substitua o DOMContentLoaded do js4)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  exibirSaudacao();
  destacarMenuAtivo();
  iniciarRelogio();
  configurarBotaoTopo();
  configurarTema();
  configurarMenuMobile();
  configurarSkipLink();

  console.log("🍔 VH Burger v2-js5-css5 carregado!");
  console.log("🎨 Tema:", document.documentElement.getAttribute("data-tema"));
  console.log("📱 Viewport:", window.innerWidth + "px");
});
