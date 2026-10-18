# 🧪 TESTES.md — v2-js1-css1

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js1--css1-blue)
![Testes](https://img.shields.io/badge/testes-28-orange)

Este documento contém **todos os testes** que devem ser executados na **v2-js1-css1** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js1-css1](#-testesmd--v2-js1-css1)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
    - [🖥️ Ferramentas Recomendadas](#️-ferramentas-recomendadas)
  - [🧪 TESTE 1 — Estrutura e Navegação](#-teste-1--estrutura-e-navegação)
  - [🧪 TESTE 2 — CSS Global](#-teste-2--css-global)
  - [🧪 TESTE 3 — Cabeçalho e Saudação](#-teste-3--cabeçalho-e-saudação)
  - [🧪 TESTE 4 — Menu Ativo](#-teste-4--menu-ativo)
  - [🧪 TESTE 5 — Relógio ao Vivo](#-teste-5--relógio-ao-vivo)
  - [🧪 TESTE 6 — Botão Voltar ao Topo](#-teste-6--botão-voltar-ao-topo)
  - [🧪 TESTE 7 — Responsividade Básica](#-teste-7--responsividade-básica)
  - [🧪 TESTE 8 — Console e Logs](#-teste-8--console-e-logs)
  - [📊 Planilha de Resultados](#-planilha-de-resultados)
    - [📈 Progresso Geral](#-progresso-geral)
  - [🎯 Como Reportar Problemas](#-como-reportar-problemas)
    - [Exemplo Preenchido](#exemplo-preenchido)
  - [🚀 Depois dos Testes](#-depois-dos-testes)
  - [💡 Dica Rápida — 3 Testes Prioritários](#-dica-rápida--3-testes-prioritários)
  - [📅 Histórico de Testes](#-histórico-de-testes)
  - [🔗 Referências](#-referências)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] Todos os arquivos estão na pasta v2-js1-css1/
- [ ] Subpasta css/ existe com style.css
- [ ] Subpasta js/ existe com main.js
- [ ] Os 4 arquivos HTML estão salvos (sem ● no VS Code)
- [ ] O navegador foi aberto (de preferência via Live Server)
```

### 🖥️ Ferramentas Recomendadas

```text
| Ferramenta        | Como usar                                  |
| ----------------- | ------------------------------------------ |
| Live Server       | Botão direito no index.html → Open with    |
| DevTools          | Pressione F12 no navegador                 |
| Console           | Aba Console do DevTools                    |
| Validador W3C     | https://validator.w3.org/                  |
```

---

## 🧪 TESTE 1 — Estrutura e Navegação

**Como testar:** Abra `index.html` no navegador e clique em cada link do menu.

```text
| #   | Ação                              | Resultado Esperado               | Status |
| --- | --------------------------------- | -------------------------------- | ------ |
| 1.1 | Abrir index.html                  | Página carrega sem erros         | ⬜     |
| 1.2 | Clicar em "Cardápio"              | Vai para cardapio.html           | ⬜     |
| 1.3 | Clicar em "Sobre"                 | Vai para sobre.html              | ⬜     |
| 1.4 | Clicar em "Contato"               | Vai para contato.html            | ⬜     |
| 1.5 | Clicar em "Home"                  | Volta para index.html            | ⬜     |
| 1.6 | Menu em todas as páginas          | Mesmo layout e mesmos links      | ⬜     |
```

---

## 🧪 TESTE 2 — CSS Global

**Como testar:** Abra qualquer página e observe o estilo.

```text
| #   | Verificar                         | Resultado Esperado                    | Status |
| --- | --------------------------------- | ------------------------------------- | ------ |
| 2.1 | Fundo da página                   | Cor escura (#1a1a1a)                  | ⬜     |
| 2.2 | Fonte do texto                    | Fonte Inter (moderna, sem serifa)     | ⬜     |
| 2.3 | Cor do título principal (h1)      | Amarelo (#ffcc00)                     | ⬜     |
| 2.4 | Cor dos parágrafos                | Cinza claro (#b3b3b3)                 | ⬜     |
| 2.5 | Largura máxima do conteúdo        | ~900px centralizado                   | ⬜     |
| 2.6 | Bordas e espaçamentos             | Visual espaçado, não apertado         | ⬜     |
| 2.7 | Caixas .destaque-box              | Fundo mais escuro + borda amarela     | ⬜     |
```

> 💡 **Dica:** Inspecione no DevTools (F12) e confira as cores exatas.

---

## 🧪 TESTE 3 — Cabeçalho e Saudação

**Como testar:** Abra qualquer página e olhe o topo.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 3.1 | Título "VH Burger"                | Grande, amarelo, em maiúsculas                  | ⬜     |
| 3.2 | Saudação abaixo do título         | Texto itálico, cinza, tipo "Bom dia!"          | ⬜     |
| 3.3 | Data atual                        | "Hoje é sábado, 18 de outubro de 2026."        | ⬜     |
| 3.4 | Mudança de hora                   | Se testar de manhã/tarde/noite, saudação muda   | ⬜     |
| 3.5 | Linha amarela abaixo do header    | Borda inferior visível                          | ⬜     |
```

> 💡 **Como testar a saudação:** Se quiser ver o comportamento em outra hora, altere temporariamente `new Date()` no console:
> ```javascript
> // No console (F12):
> const dataFake = new Date();
> dataFake.setHours(8);
> // A função não vai aceitar diretamente, mas você pode testar a lógica.
> ```

---

## 🧪 TESTE 4 — Menu Ativo

**Como testar:** Abra cada página e veja o menu.

```text
| #   | Página Aberta   | Link Deve Estar Destacado   | Status |
| --- | --------------- | --------------------------- | ------ |
| 4.1 | index.html      | "Home"                      | ⬜     |
| 4.2 | cardapio.html   | "Cardápio"                  | ⬜     |
| 4.3 | sobre.html      | "Sobre"                     | ⬜     |
| 4.4 | contato.html    | "Contato"                   | ⬜     |
```

**O que é "destacado":** Fundo amarelo + texto escuro + negrito (classe `.ativo`).

---

## 🧪 TESTE 5 — Relógio ao Vivo

**Como testar:** Abra qualquer página e olhe o rodapé.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Relógio aparece no rodapé         | Texto "🕐 Hora atual: HH:MM:SS"             | ⬜     |
| 5.2 | Relógio atualiza                  | A cada 1 segundo os números mudam           | ⬜     |
| 5.3 | Formato do horário                | 2 dígitos (ex: "09:05:03", não "9:5:3")     | ⬜     |
| 5.4 | Cor do relógio                    | Amarelo (#ffcc00), negrito                  | ⬜     |
```

---

## 🧪 TESTE 6 — Botão Voltar ao Topo

**Como testar:** Role a página para baixo.

```text
| #   | Ação                              | Resultado Esperado                         | Status |
| --- | --------------------------------- | ------------------------------------------ | ------ |
| 6.1 | Rolar para baixo (300px+)         | Botão "↑" aparece no canto inferior direito| ⬜     |
| 6.2 | Rolar de volta ao topo            | Botão desaparece                           | ⬜     |
| 6.3 | Clicar no botão "↑"               | Página rola suavemente ao topo             | ⬜     |
| 6.4 | Cursor sobre o botão              | Botão cresce levemente (efeito de hover)   | ⬜     |
| 6.5 | O botão em todas as 4 páginas     | Aparece e funciona igual                   | ⬜     |
```

---

## 🧪 TESTE 7 — Responsividade Básica

**Como testar:** Use o DevTools (F12 → ícone de celular).

```text
| #   | Largura       | Comportamento Esperado                     | Status |
| --- | ------------- | ------------------------------------------ | ------ |
| 7.1 | Desktop (900+) | Layout padrão, sem scroll horizontal      | ⬜     |
| 7.2 | Tablet (768)   | Conteúdo ainda legível                    | ⬜     |
| 7.3 | Mobile (375)   | Conteúdo adaptado, sem quebra de layout   | ⬜     |
```

> ⚠️ **Nota:** Nesta versão (js1-css1), não temos **media queries** ainda. O layout pode ficar apertado no mobile, mas não deve **quebrar**. A responsividade completa virá em módulos futuros.

---

## 🧪 TESTE 8 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                                  | Status |
| --- | --------------------------------- | --------------------------------------------------- | ------ |
| 8.1 | Log de inicialização              | "🍔 VH Burger v2-js1-css1 carregado!"              | ⬜     |
| 8.2 | Log de data                       | Data e hora formatadas                              | ⬜     |
| 8.3 | Log de página atual               | Nome do arquivo atual (index.html, etc.)            | ⬜     |
| 8.4 | Sem erros vermelhos               | Nenhuma mensagem de erro no console                 | ⬜     |
```

> 💡 **Dica:** Se aparecer erro vermelho, o problema pode ser:
>
> - Caminho errado no `<link>` do CSS ou `<script>` do JS
> - Caminho errado no `<script src="js/main.js">` (verifique se é `js/main.js` e não `main.js`)

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                        | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| --------------------------- | ------ | --------- | --------- | ----------- |
| Estrutura e Navegação       | 6      |           |           |             |
| CSS Global                  | 7      |           |           |             |
| Cabeçalho e Saudação        | 5      |           |           |             |
| Menu Ativo                  | 4      |           |           |             |
| Relógio ao Vivo             | 4      |           |           |             |
| Botão Voltar ao Topo        | 5      |           |           |             |
| Responsividade Básica       | 3      |           |           |             |
| Console e Logs              | 4      |           |           |             |
| TOTAL                       | 38     |           |           |             |
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
```

### Exemplo Preenchido

```markdown
### ❌ Teste 5.2 falhou

**O que aconteceu:**
O relógio mostra sempre o mesmo horário, não atualiza.

**O que eu esperava:**
Atualizar a cada 1 segundo.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
```

---

## 🚀 Depois dos Testes

Quando tudo passar, você pode:

```text
| Opção | Descrição                                          |
| ----- | -------------------------------------------------- |
| 🚀    | Avançar para v2-js2-css2 (espaçamento, hover)      |
| 🎨    | Adicionar mais estilos CSS                         |
| 🧪    | Testar em outros navegadores                       |
| 📝    | Finalizar o README da v2-js1-css1                  |
| 🌐    | Publicar no GitHub Pages                           |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 4.x    | Menu ativo (destaque visual)        |
| 🥈         | 6.1-6.3| Botão voltar ao topo                |
| 🥉         | 5.1-5.2| Relógio ao vivo                     |
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
| Recurso                        | Link                                          |
| ------------------------------ | --------------------------------------------- |
| Validador HTML W3C             | https://validator.w3.org/                     |
| Validador CSS W3C              | https://jigsaw.w3.org/css-validator/          |
| MDN Web Docs (CSS)             | https://developer.mozilla.org/pt-BR/docs/Web/CSS |
| MDN Web Docs (JavaScript)      | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript |
| Can I Use                      | https://caniuse.com/                          |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team
📁 Estado Atual da Pasta v2-js1-css1/
text
v2-js1-css1/
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
    └── main.js         ✅
🎯 Como Usar Este Arquivo
text
| Ação                          | Como fazer                              |
| ----------------------------- | --------------------------------------- |
| Ver no VS Code (preview)      | Ctrl + Shift + V                        |
| Marcar testes concluídos      | Trocar ⬜ por ✅ ou ❌                  |
| Rastrear progresso            | Preencher a Planilha de Resultados      |
| Reportar problema             | Usar o template pronto                  |
🚀 Próximo Passo
Depois de rodar todos os 38 testes:

text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js2-css2                |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
Boa sorte nos testes! 🍔🧪