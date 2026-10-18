# 🧪 TESTES.md — v2-js5-css5

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js5--css5-blue)
![Testes](https://img.shields.io/badge/testes-45-orange)
![A11y](https://img.shields.io/badge/acessibilidade-WCAG-purple)

Este documento contém **todos os testes** que devem ser executados na **v2-js5-css5** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js5-css5](#-testesmd--v2-js5-css5)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Dark Mode](#-teste-1--dark-mode)
  - [🧪 TESTE 2 — Persistência do Tema](#-teste-2--persistência-do-tema)
  - [🧪 TESTE 3 — Menu Mobile](#-teste-3--menu-mobile)
  - [🧪 TESTE 4 — Responsividade](#-teste-4--responsividade)
  - [🧪 TESTE 5 — Acessibilidade (Skip Link e ARIA)](#-teste-5--acessibilidade-skip-link-e-aria)
  - [🧪 TESTE 6 — Navegação por Teclado](#-teste-6--navegação-por-teclado)
  - [🧪 TESTE 7 — Integração com Módulos Anteriores](#-teste-7--integração-com-módulos-anteriores)
  - [🧪 TESTE 8 — Console e Logs](#-teste-8--console-e-logs)
  - [📊 Planilha de Resultados](#-planilha-de-resultados)
    - [📈 Progresso Geral](#-progresso-geral)
  - [🎯 Como Reportar Problemas](#-como-reportar-problemas)
    - [Exemplo Preenchido](#exemplo-preenchido)
  - [🚀 Depois dos Testes](#-depois-dos-testes)
  - [💡 Dica Rápida — 3 Testes Prioritários](#-dica-rápida--3-testes-prioritários)
  - [📅 Histórico de Testes](#-histórico-de-testes)
  - [🔗 Referências](#-referências)
  - [📁 Estado Atual da Pasta v2-js5-css5/](#-estado-atual-da-pasta-v2-js5-css5)
  - [🎯 Como Usar Este Arquivo](#-como-usar-este-arquivo)
  - [🚀 Próximo Passo](#-próximo-passo)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] Todos os arquivos estão na pasta v2-js5-css5/
- [ ] Subpasta css/ existe com style.css atualizado
- [ ] Subpasta js/ existe com main.js atualizado
- [ ] O main.js NÃO tem dois blocos DOMContentLoaded duplicados
- [ ] Os 4 HTMLs têm aria-label="Menu principal" no <nav>
- [ ] O navegador foi aberto (de preferência via Live Server)
- [ ] O localStorage está limpo (para testes precisos)
```

---

## 🧪 TESTE 1 — Dark Mode

**Como testar:** Clique no botão "☀️" no canto superior direito.

```text
| #   | Ação                              | Resultado Esperado                           | Status |
| --- | --------------------------------- | -------------------------------------------- | ------ |
| 1.1 | Abrir qualquer página             | Botão "☀️" aparece no canto superior direito | ⬜     |
| 1.2 | Clicar no botão "☀️"              | Tema muda para claro (fundo branco)          | ⬜     |
| 1.3 | Botão após clique                 | Ícone muda de "☀️" para "🌙"                 | ⬜     |
| 1.4 | Clicar novamente                  | Volta ao tema escuro                         | ⬜     |
| 1.5 | Cores no modo claro               | Texto escuro, fundo claro, legível           | ⬜     |
| 1.6 | Cores no modo escuro              | Texto claro, fundo escuro, legível           | ⬜     |
| 1.7 | Hover no botão de tema            | Botão cresce e rotaciona levemente           | ⬜     |
```

---

## 🧪 TESTE 2 — Persistência do Tema

**Como testar:** Alterne o tema e recarregue a página (F5).

```text
| #   | Ação                              | Resultado Esperado                           | Status |
| --- | --------------------------------- | -------------------------------------------- | ------ |
| 2.1 | Mudar para modo claro             | Página fica clara                            | ⬜     |
| 2.2 | Recarregar (F5)                   | Tema claro permanece                         | ⬜     |
| 2.3 | Mudar para modo escuro e F5       | Tema escuro permanece                        | ⬜     |
| 2.4 | Navegar para outra página         | Tema escolhido continua                      | ⬜     |
| 2.5 | DevTools → Local Storage          | Chave "vh-tema" com valor "claro" ou "escuro"| ⬜     |
| 2.6 | Primeira visita (localStorage limpo)| Tema segue preferência do sistema          | ⬜     |
```

---

## 🧪 TESTE 3 — Menu Mobile

**Como testar:** Use o DevTools (F12 → ícone de celular, largura 375px).

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 3.1 | Em desktop (900px+)               | Botão "☰" NÃO aparece                       | ⬜     |
| 3.2 | Em mobile (375px)                 | Botão "☰" aparece no topo esquerdo          | ⬜     |
| 3.3 | Clicar no "☰"                     | Menu abre em coluna, animação slideDown     | ⬜     |
| 3.4 | Botão após abrir                  | Ícone muda de "☰" para "✕"                  | ⬜     |
| 3.5 | Clicar em um link do menu         | Menu fecha automaticamente                  | ⬜     |
| 3.6 | Clicar no "✕"                     | Menu fecha                                  | ⬜     |
| 3.7 | Redimensionar para desktop        | Menu mobile fecha automaticamente           | ⬜     |
| 3.8 | Links do menu                     | Funcionam normalmente (navegam para páginas)| ⬜     |
```

---

## 🧪 TESTE 4 — Responsividade

**Como testar:** Redimensione a janela ou use o DevTools.

```text
| #   | Largura       | Comportamento Esperado                     | Status |
| --- | ------------- | ------------------------------------------ | ------ |
| 4.1 | Desktop (900+) | Layout normal, menu horizontal            | ⬜     |
| 4.2 | Tablet (768)  | Menu hambúrguer, grid com 2 colunas        | ⬜     |
| 4.3 | Mobile (480)  | Grid com 1 coluna                          | ⬜     |
| 4.4 | Mobile (375)  | Botões do form empilhados                  | ⬜     |
| 4.5 | Mobile (375)  | Painel do carrinho ocupa 100% da tela      | ⬜     |
| 4.6 | Qualquer largura | Sem scroll horizontal                   | ⬜     |
| 4.7 | Mobile (375)  | Textos legíveis, sem sobreposição          | ⬜     |
```

---

## 🧪 TESTE 5 — Acessibilidade (Skip Link e ARIA)

**Como testar:** Pressione Tab e inspecione com F12.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Pressionar Tab no início          | "⏭️ Ir para o conteúdo principal" aparece   | ⬜     |
| 5.2 | Clicar/Enter no skip link         | Pula direto para o <main>                   | ⬜     |
| 5.3 | Skip link visível                 | Fundo amarelo, texto escuro, borda          | ⬜     |
| 5.4 | Inspecionar <nav>                 | Tem aria-label="Menu principal"             | ⬜     |
| 5.5 | Inspecionar botão de tema         | Tem aria-label descritivo                   | ⬜     |
| 5.6 | Inspecionar botão hambúrguer      | Tem aria-expanded="false" (inicialmente)    | ⬜     |
| 5.7 | Após abrir menu mobile            | aria-expanded="true"                        | ⬜     |
```

---

## 🧪 TESTE 6 — Navegação por Teclado

**Como testar:** Use apenas o teclado (Tab, Enter, Escape).

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Tab nos links                     | Foco visível (borda amarela)                | ⬜     |
| 6.2 | Tab nos campos do form            | Foco visível                                | ⬜     |
| 6.3 | Enter no botão de tema            | Alterna o tema                              | ⬜     |
| 6.4 | Enter no botão "☰"                | Abre o menu                                 | ⬜     |
| 6.5 | Escape com carrinho aberto        | Fecha o carrinho                            | ⬜     |
| 6.6 | Tab pelo site completo            | Nenhum elemento "perdido"                   | ⬜     |
```

---

## 🧪 TESTE 7 — Integração com Módulos Anteriores

**Como testar:** Verifique se nada quebrou com as mudanças.

```text
| #   | Funcionalidade                    | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 7.1 | Saudação dinâmica (js1)           | Continua funcionando no topo                | ⬜     |
| 7.2 | Menu ativo (js1)                  | Página atual destacada em amarelo           | ⬜     |
| 7.3 | Relógio ao vivo (js1)             | Atualiza no rodapé                          | ⬜     |
| 7.4 | Botão "voltar ao topo" (js1)      | Aparece ao rolar                            | ⬜     |
| 7.5 | Cards do cardápio (js2)           | 8 cards renderizados                        | ⬜     |
| 7.6 | Carrinho flutuante (js3)          | Abre e fecha, persiste no localStorage      | ⬜     |
| 7.7 | Checkout (js4)                    | Validação funciona, redireciona após envio  | ⬜     |
```

---

## 🧪 TESTE 8 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 8.1 | Ao abrir a página                 | "🍔 VH Burger v2-js5-css5 carregado!"           | ⬜     |
| 8.2 | Log de tema                       | "🎨 Tema: escuro" (ou "claro")                  | ⬜     |
| 8.3 | Log de viewport                   | "📱 Viewport: 1024px" (valor real)              | ⬜     |
| 8.4 | Ao alternar tema                  | "🎨 Tema alterado para: claro" (ou "escuro")    | ⬜     |
| 8.5 | Sem erros vermelhos               | Nenhuma mensagem de erro                        | ⬜     |
```

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                       | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| -------------------------- | ------ | --------- | --------- | ----------- |
| Dark Mode                  | 7      |           |           |             |
| Persistência do Tema       | 6      |           |           |             |
| Menu Mobile                | 8      |           |           |             |
| Responsividade             | 7      |           |           |             |
| Acessibilidade             | 7      |           |           |             |
| Navegação por Teclado      | 6      |           |           |             |
| Integração                 | 7      |           |           |             |
| Console e Logs             | 5      |           |           |             |
| TOTAL                      | 53     |           |           |             |
```

### 📈 Progresso Geral

```text
[          ] 0%    ← Você está aqui
[===       ] 25%
[======    ] 50%
[========  ] 75%
[==========] 100%
```

---

## 🎯 Como Reportar Problemas

Se algum teste falhar, use este template:

```markdown
### ❌ Teste X.Y falhou

**O que aconteceu:**
(descrição do comportamento observado)

**O que eu esperava:**
(descrição do comportamento correto)

**Ambiente:**
- Navegador: Chrome / Firefox / Edge
- Sistema: Windows / macOS / Linux
- Dispositivo: Desktop / Tablet / Celular
- Largura da janela: (ex: 1024px)
```

### Exemplo Preenchido

```markdown
### ❌ Teste 3.1 falhou

**O que aconteceu:**
Em desktop (900px+), o botão "☰" continua aparecendo.

**O que eu esperava:**
O botão deveria estar oculto em telas grandes.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
- Largura: 1024px
```

---

## 🚀 Depois dos Testes

Quando tudo passar, você pode:

```text
| Opção | Descrição                                            |
| ----- | ---------------------------------------------------- |
| 🚀    | Avançar para v2-js6-css6 (Fetch/API + Animações)     |
| 🎨    | Ajustar cores do modo claro (contraste)              |
| 🧪    | Testar em outros navegadores                         |
| 📝    | Finalizar o README da v2-js5-css5                    |
| 🌐    | Publicar no GitHub Pages                             |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 1.1-1.3| Botão de tema funciona              |
| 🥈         | 2.2    | Tema persiste após F5               |
| 🥉         | 3.2-3.3| Menu mobile abre e fecha            |
```

Se esses 3 passarem, o resto provavelmente também passará.

---

## 📅 Histórico de Testes

```text
| Data       | Testador | Total | ✅ | ❌ | Observações |
| ---------- | -------- | ----- | -- | -- | ----------- |
|            |          |       |    |    |             |
|            |          |       |    |    |             |
```

---

## 🔗 Referências

```text
| Recurso                        | Link                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------- |
| MDN - prefers-color-scheme     | https://developer.mozilla.org/pt-BR/docs/Web/CSS/@media/prefers-color-scheme |
| MDN - CSS Media Queries        | https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries               |
| MDN - ARIA                     | https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA              |
| WCAG 2.1 (Acessibilidade)      | https://www.w3.org/WAI/WCAG21/quickref/                                      |
| Lighthouse (Google)            | Chrome DevTools → aba Lighthouse                                             |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team

## 📁 Estado Atual da Pasta v2-js5-css5/

```text
v2-js5-css5/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── README.md           ✅
├── TESTES.md           ✅ (este arquivo)
│
├── css/
│   └── style.css       ✅
│
└── js/
    ├── main.js         ✅ (atualizado)
    ├── cardapio.js     ✅
    ├── carrinho.js     ✅
    └── checkout.js     ✅
```

## 🎯 Como Usar Este Arquivo

```text
| Ação                          | Como fazer                              |
| ----------------------------- | --------------------------------------- |
| Ver no VS Code (preview)      | Ctrl + Shift + V                        |
| Marcar testes concluídos      | Trocar ⬜ por ✅ ou ❌                  |
| Rastrear progresso            | Preencher a Planilha de Resultados      |
| Reportar problema             | Usar o template pronto                  |
```

## 🚀 Próximo Passo

Depois de rodar todos os 53 testes:

```text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js6-css6                |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
```

Boa sorte nos testes! 🍔🌗📱🧪
