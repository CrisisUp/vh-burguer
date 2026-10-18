# 🧪 TESTES.md — v2-js2-css2

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js2--css2-blue)
![Testes](https://img.shields.io/badge/testes-32-orange)

Este documento contém **todos os testes** que devem ser executados na **v2-js2-css2** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js2-css2](#-testesmd--v2-js2-css2)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Estrutura e Navegação](#-teste-1--estrutura-e-navegação)
  - [🧪 TESTE 2 — Flexbox no Menu](#-teste-2--flexbox-no-menu)
  - [🧪 TESTE 3 — Renderização Dinâmica](#-teste-3--renderização-dinâmica)
  - [🧪 TESTE 4 — Grid de Cards](#-teste-4--grid-de-cards)
  - [🧪 TESTE 5 — Interatividade dos Cards](#-teste-5--interatividade-dos-cards)
  - [🧪 TESTE 6 — Animações CSS](#-teste-6--animações-css)
  - [🧪 TESTE 7 — Produto Esgotado](#-teste-7--produto-esgotado)
  - [🧪 TESTE 8 — Responsividade](#-teste-8--responsividade)
  - [🧪 TESTE 9 — Console e Logs](#-teste-9--console-e-logs)
  - [📊 Planilha de Resultados](#-planilha-de-resultados)
    - [📈 Progresso Geral](#-progresso-geral)
  - [🎯 Como Reportar Problemas](#-como-reportar-problemas)
    - [Exemplo Preenchido](#exemplo-preenchido)
  - [🚀 Depois dos Testes](#-depois-dos-testes)
  - [💡 Dica Rápida — 3 Testes Prioritários](#-dica-rápida--3-testes-prioritários)
  - [📅 Histórico de Testes](#-histórico-de-testes)
  - [🔗 Referências](#-referências)
  - [📁 Estado Atual da Pasta v2-js2-css2/](#-estado-atual-da-pasta-v2-js2-css2)
  - [🎯 Como Usar Este Arquivo](#-como-usar-este-arquivo)
  - [🚀 Próximo Passo](#-próximo-passo)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] Todos os arquivos estão na pasta v2-js2-css2/
- [ ] Subpasta css/ existe com style.css atualizado
- [ ] Subpasta js/ existe com main.js e cardapio.js
- [ ] O cardapio.html tem a <div id="grid-cardapio">
- [ ] Os 4 arquivos HTML estão salvos (sem ● no VS Code)
- [ ] O navegador foi aberto (de preferência via Live Server)
```

---

## 🧪 TESTE 1 — Estrutura e Navegação

**Como testar:** Abra `index.html` e navegue entre as páginas.

```text
| #   | Ação                              | Resultado Esperado               | Status |
| --- | --------------------------------- | -------------------------------- | ------ |
| 1.1 | Abrir index.html                  | Página carrega sem erros         | ⬜     |
| 1.2 | Clicar em "Cardápio"              | Vai para cardapio.html           | ⬜     |
| 1.3 | Clicar em "Sobre"                 | Vai para sobre.html              | ⬜     |
| 1.4 | Clicar em "Contato"               | Vai para contato.html            | ⬜     |
| 1.5 | Menu em todas as páginas          | Mesmo layout (sem os "|")        | ⬜     |
| 1.6 | Página atual destacada            | Link fica com fundo amarelo      | ⬜     |
```

---

## 🧪 TESTE 2 — Flexbox no Menu

**Como testar:** Passe o mouse sobre os links do menu.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 2.1 | Layout do menu                    | Links lado a lado, com espaçamento (gap)    | ⬜     |
| 2.2 | Hover em link                     | Fica amarelo e sobe 2px (translateY)        | ⬜     |
| 2.3 | Sombra no hover                   | Sombra amarela suave aparece                | ⬜     |
| 2.4 | Transição                         | Mudança suave, não instantânea              | ⬜     |
```

---

## 🧪 TESTE 3 — Renderização Dinâmica

**Como testar:** Abra `cardapio.html` e observe o carregamento.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 3.1 | Ao abrir o cardápio               | Aparece "⏳ Carregando produtos..."         | ⬜     |
| 3.2 | Após 0.8s                         | Mensagem desaparece                         | ⬜     |
| 3.3 | Cards aparecem                    | 8 cards renderizados                        | ⬜     |
| 3.4 | Ordem dos cards                   | VH Clássico, VH Bacon, VH Cheddar, etc.     | ⬜     |
| 3.5 | Inspecionar (F12)                 | <div id="grid-cardapio"> está preenchida    | ⬜     |
```

---

## 🧪 TESTE 4 — Grid de Cards

**Como testar:** Observe o layout dos cards no desktop.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 4.1 | Layout dos cards                  | Em grade (grid), não em lista vertical      | ⬜     |
| 4.2 | Quantidade por linha (desktop)    | 3 cards por linha                           | ⬜     |
| 4.3 | Espaçamento entre cards           | Gap visível (~20px)                         | ⬜     |
| 4.4 | Card com borda arredondada        | Cantos arredondados (border-radius)         | ⬜     |
| 4.5 | Conteúdo do card                  | Nome, descrição, preço e botão              | ⬜     |
| 4.6 | Cor do preço                      | Amarelo, em negrito                         | ⬜     |
```

---

## 🧪 TESTE 5 — Interatividade dos Cards

**Como testar:** Passe o mouse sobre os cards e clique nos botões.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Hover no card                     | Sobe 5px + sombra amarela + borda amarela   | ⬜     |
| 5.2 | Hover no botão                    | Fica mais claro e aumenta de tamanho        | ⬜     |
| 5.3 | Clicar em "Adicionar ao Carrinho" | Alerta "Você adicionou [nome] ao carrinho!" | ⬜     |
| 5.4 | Cursor no botão                   | Muda para "pointer" (mãozinha)              | ⬜     |
```

---

## 🧪 TESTE 6 — Animações CSS

**Como testar:** Recarregue o `cardapio.html` e observe os cards.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Cards entram animados             | FadeInUp (sobem + aparecem)                 | ⬜     |
| 6.2 | Animação em cascata               | Cada card entra em sequência (delay)        | ⬜     |
| 6.3 | Duração da animação               | ~0.5s por card                              | ⬜     |
| 6.4 | Todos os cards animam             | Os 8 cards aparecem suavemente              | ⬜     |
```

---

## 🧪 TESTE 7 — Produto Esgotado

**Como testar:** Procure o card do "VH Veggie".

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 7.1 | Badge "ESGOTADO" no VH Veggie     | Aparece vermelho, maiúsculo                 | ⬜     |
| 7.2 | Botão do VH Veggie                | Diz "❌ Esgotado" e está cinza              | ⬜     |
| 7.3 | Clicar no botão do VH Veggie      | Nada acontece (botão disabled)              | ⬜     |
| 7.4 | Cursor no botão esgotado          | Mostra "not-allowed" (🚫)                   | ⬜     |
| 7.5 | Outros produtos                   | Nenhum tem badge "ESGOTADO"                 | ⬜     |
```

---

## 🧪 TESTE 8 — Responsividade

**Como testar:** Use o DevTools (F12 → ícone de celular).

```text
| #   | Largura       | Resultado Esperado                             | Status |
| --- | ------------- | ---------------------------------------------- | ------ |
| 8.1 | Desktop (900+) | 3 colunas de cards                            | ⬜     |
| 8.2 | Tablet (768)  | 2 colunas de cards                            | ⬜     |
| 8.3 | Mobile (375)  | 1 coluna de cards                             | ⬜     |
| 8.4 | Mobile (375)  | Menu continua legível (flex-wrap funciona)    | ⬜     |
| 8.5 | Mobile (375)  | Sem scroll horizontal em nenhuma página       | ⬜     |
```

---

## 🧪 TESTE 9 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 9.1 | Log de inicialização              | "🍔 VH Burger v2-js2-css2 carregado!"           | ⬜     |
| 9.2 | Log do cardápio                   | "🍔 8 produtos renderizados no cardápio!"       | ⬜     |
| 9.3 | Sem erros vermelhos               | Nenhuma mensagem de erro                        | ⬜     |
```

> 💡 **Dica:** Se aparecer erro, verifique:
>
> - O caminho `<script src="js/cardapio.js">` está correto?
> - A `<div id="grid-cardapio">` existe no HTML?
> - O arquivo `cardapio.js` foi salvo na pasta `js/`?

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                        | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| --------------------------- | ------ | --------- | --------- | ----------- |
| Estrutura e Navegação       | 6      |           |           |             |
| Flexbox no Menu             | 4      |           |           |             |
| Renderização Dinâmica       | 5      |           |           |             |
| Grid de Cards               | 6      |           |           |             |
| Interatividade dos Cards    | 4      |           |           |             |
| Animações CSS               | 4      |           |           |             |
| Produto Esgotado            | 5      |           |           |             |
| Responsividade              | 5      |           |           |             |
| Console e Logs              | 3      |           |           |             |
| TOTAL                       | 42     |           |           |             |
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
### ❌ Teste 5.3 falhou

**O que aconteceu:**
Ao clicar em "Adicionar ao Carrinho", nada acontece.

**O que eu esperava:**
Um alerta aparece com o nome do produto.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
```

---

## 🚀 Depois dos Testes

Quando tudo passar, você pode:

```text
| Opção | Descrição                                            |
| ----- | ---------------------------------------------------- |
| 🚀    | Avançar para v2-js3-css3 (localStorage + carrinho)  |
| 🎨    | Adicionar mais animações nos botões                 |
| 🧪    | Testar em outros navegadores                        |
| 📝    | Finalizar o README da v2-js2-css2                   |
| 🌐    | Publicar no GitHub Pages                            |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 3.3    | Os 8 cards aparecem após o loading  |
| 🥈         | 6.1-6.2| A animação em cascata dos cards     |
| 🥉         | 7.1-7.3| O produto esgotado funciona         |
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
| MDN - Flexbox                  | https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout |
| MDN - Grid                     | https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout |
| MDN - @keyframes               | https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes |
| Can I Use                      | https://caniuse.com/                          |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team

## 📁 Estado Atual da Pasta v2-js2-css2/

```text
v2-js2-css2/
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
    ├── main.js         ✅
    └── cardapio.js     ✅
```

## 🎯 Como Usar Este Arquivo

```text
| Ação                          | Como fazer                              |
| ----------------------------- | --------------------------------------- |
| Ver no VS Code (preview)      | Ctrl + Shift + V                        |
| Marcar testes concluídos      | Trocar ⬜ por ✅ ou ❌                   |
| Rastrear progresso            | Preencher a Planilha de Resultados      |
| Reportar problema             | Usar o template pronto                  |
```

## 🚀 Próximo Passo

Depois de rodar todos os 42 testes:

```text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js3-css3                |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
```

Boa sorte nos testes! 🍔🧪
