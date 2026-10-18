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
  console.log("🍔 VH Burger v2-js1-css1 carregado!");
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
