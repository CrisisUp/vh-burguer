# 🧪 TESTES.md — v2-js6-css6

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js6--css6-blue)
![Testes](https://img.shields.io/badge/testes-46-orange)
![Fetch](https://img.shields.io/badge/Fetch-API-purple)

Este documento contém **todos os testes** que devem ser executados na **v2-js6-css6** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js6-css6](#-testesmd--v2-js6-css6)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Fetch API e Carregamento](#-teste-1--fetch-api-e-carregamento)
  - [🧪 TESTE 2 — Skeleton Loading](#-teste-2--skeleton-loading)
  - [🧪 TESTE 3 — Imagens e Cards](#-teste-3--imagens-e-cards)
  - [🧪 TESTE 4 — Tratamento de Erro de Rede](#-teste-4--tratamento-de-erro-de-rede)
  - [🧪 TESTE 5 — Animações do Carrinho](#-teste-5--animações-do-carrinho)
  - [🧪 TESTE 6 — Confetti ao Finalizar](#-teste-6--confetti-ao-finalizar)
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
  - [📁 Estado Atual da Pasta v2-js6-css6/](#-estado-atual-da-pasta-v2-js6-css6)
  - [🎯 Como Usar Este Arquivo](#-como-usar-este-arquivo)
  - [🚀 Próximo Passo](#-próximo-passo)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] Todos os arquivos estão na pasta v2-js6-css6/
- [ ] O arquivo produtos.json existe na raiz da pasta
- [ ] Subpasta css/ existe com style.css atualizado
- [ ] Subpasta js/ existe com main.js, cardapio.js, carrinho.js e checkout.js
- [ ] O cardapio.js foi atualizado (usa fetch)
- [ ] O carrinho.js foi atualizado (pulso no badge)
- [ ] O checkout.js foi atualizado (confetti)
- [ ] Você está usando o Live Server (http://127.0.0.1:5500)
- [ ] O localStorage está limpo (para testes precisos)
```

> ⚠️ **IMPORTANTE:** Sem o Live Server, o `fetch()` falha por segurança do navegador (CORS). Se abrir o HTML direto (`file://`), o cardápio não carrega.

---

## 🧪 TESTE 1 — Fetch API e Carregamento

**Como testar:** Abra `cardapio.html` no Live Server.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 1.1 | Abrir cardapio.html               | Página carrega sem erros                    | ⬜     |
| 1.2 | Aguardar carregamento             | 8 cards aparecem com imagens e preços       | ⬜     |
| 1.3 | DevTools → Network (F12)          | Requisição "produtos.json" com status 200   | ⬜     |
| 1.4 | Tempo de carregamento             | Skeleton desaparece em ~500ms-1s            | ⬜     |
| 1.5 | Inspecionar (F12)                 | Dados vieram do JSON (não hardcoded)        | ⬜     |
| 1.6 | Alterar preço no produtos.json    | Recarregar mostra o novo preço              | ⬜     |
```

> 💡 **Teste extra:** Abra o `produtos.json` e altere o nome de um produto (ex: "VH Clássico" → "VH Teste"). Salve e recarregue o cardápio. O card deve atualizar.

---

## 🧪 TESTE 2 — Skeleton Loading

**Como testar:** Abra o DevTools → Network → marque "Slow 3G" e recarregue.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 2.1 | Ao recarregar (rápido)            | Skeleton pisca rapidamente                  | ⬜     |
| 2.2 | Com "Slow 3G" ativo               | Skeleton fica visível por vários segundos   | ⬜     |
| 2.3 | Aparência do skeleton             | Cards cinza com animação shimmer            | ⬜     |
| 2.4 | Quantidade de skeletons           | 8 skeletons (mesmo número de produtos)      | ⬜     |
| 2.5 | Animação shimmer                  | Gradiente se movendo da esquerda p/ direita | ⬜     |
| 2.6 | Após carregar                     | Skeletons substituídos pelos cards reais    | ⬜     |
```

---

## 🧪 TESTE 3 — Imagens e Cards

**Como testar:** Observe os cards carregados.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 3.1 | Imagens dos produtos              | Aparecem (vindas do Unsplash)               | ⬜     |
| 3.2 | Hover no card                     | Imagem aumenta (zoom suave)                 | ⬜     |
| 3.3 | Card com borda e sombra           | Cantos arredondados, sombra amarela         | ⬜     |
| 3.4 | Produto esgotado                  | Badge "ESGOTADO" vermelho                   | ⬜     |
| 3.5 | Botão do esgotado                 | Cinza com "❌ Esgotado" (disabled)           | ⬜     |
| 3.6 | Animação de entrada dos cards     | Cards entram em cascata (esquerda p/ dir)   | ⬜     |
| 3.7 | Imagem quebrada                   | Se URL falhar, imagem some (onerror)        | ⬜     |
```

---

## 🧪 TESTE 4 — Tratamento de Erro de Rede

**Como testar:** Desabilite a internet ou use o DevTools.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 4.1 | DevTools → Network → Offline      | Recarregue o cardapio.html                  | ⬜     |
| 4.2 | Após carregar (offline)           | Mensagem "❌ Ops! Algo deu errado"          | ⬜     |
| 4.3 | Mensagem de erro                  | Explica que não foi possível carregar       | ⬜     |
| 4.4 | Botão "Tentar Novamente"          | Aparece abaixo da mensagem                  | ⬜     |
| 4.5 | Voltar online e clicar no botão   | Página recarrega e produtos aparecem        | ⬜     |
| 4.6 | Console                           | Mostra o erro (esperado) e não quebra       | ⬜     |
```

> 💡 **Como simular offline:** No Chrome, abra F12 → aba **Network** → marque a caixa **Offline** (ou "No throttling" → "Offline"). Depois recarregue a página.

---

## 🧪 TESTE 5 — Animações do Carrinho

**Como testar:** Adicione itens ao carrinho.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Clicar em "Adicionar ao Carrinho" | Badge do carrinho PULA (animação pulse)     | ⬜     |
| 5.2 | Adicionar várias vezes seguidas   | Pulso ocorre a cada clique                  | ⬜     |
| 5.3 | Clicar no carrinho flutuante      | Painel abre (slide da direita)              | ⬜     |
| 5.4 | Item novo no carrinho             | Animação slideIn (entra deslizando)         | ⬜     |
| 5.5 | Remover item                      | Item some suavemente                        | ⬜     |
| 5.6 | Console (F12)                     | "✅ [nome] adicionado ao carrinho!"         | ⬜     |
```

---

## 🧪 TESTE 6 — Confetti ao Finalizar

**Como testar:** Adicione itens, vá para o checkout e finalize o pedido.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Adicionar itens no carrinho       | Carrinho enche                              | ⬜     |
| 6.2 | Clicar em "Finalizar Pedido"      | Vai para o checkout (contato.html)          | ⬜     |
| 6.3 | Preencher todos os campos         | Campos ficam verdes (válidos)               | ⬜     |
| 6.4 | Clicar em "Confirmar Pedido"      | 🎉 CONFETTI CAI NA TELA!                    | ⬜     |
| 6.5 | Console (F12)                     | "🎉 Confetti disparado!"                    | ⬜     |
| 6.6 | Após 3 segundos                   | Redireciona para index.html                 | ⬜     |
| 6.7 | Após 5 segundos                   | Confetti some do DOM (limpo)                | ⬜     |
| 6.8 | Carrinho após sucesso             | localStorage "vh-carrinho" removido         | ⬜     |
```

> 💡 **Dica:** Se não ver o confetti, verifique se o CSS contém `@keyframes confetti-fall` e a classe `.confetti`.

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
| 7.5 | Carrinho flutuante (js3)          | Abre e fecha, persiste no localStorage      | ⬜     |
| 7.6 | Checkout (js4)                    | Validação funciona, redireciona após envio  | ⬜     |
| 7.7 | Dark mode (js5)                   | Alterna tema, persiste após F5              | ⬜     |
| 7.8 | Menu mobile (js5)                 | Abre/fecha em telas pequenas                | ⬜     |
```

---

## 🧪 TESTE 8 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 8.1 | Ao abrir cardapio.html            | "🍔 8 produtos renderizados via API!"           | ⬜     |
| 8.2 | Ao adicionar item                 | "✅ [nome] adicionado ao carrinho!"             | ⬜     |
| 8.3 | Ao finalizar pedido               | "📦 Pedido finalizado:" + dados do cliente      | ⬜     |
| 8.4 | Ao finalizar pedido               | "🎉 Confetti disparado!"                        | ⬜     |
| 8.5 | Sem erros vermelhos               | Nenhuma mensagem de erro                        | ⬜     |
```

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                       | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| -------------------------- | ------ | --------- | --------- | ----------- |
| Fetch API e Carregamento   | 6      |           |           |             |
| Skeleton Loading           | 6      |           |           |             |
| Imagens e Cards            | 7      |           |           |             |
| Erro de Rede               | 6      |           |           |             |
| Animações do Carrinho      | 6      |           |           |             |
| Confetti                   | 8      |           |           |             |
| Integração                 | 8      |           |           |             |
| Console e Logs             | 5      |           |           |             |
| TOTAL                      | 52     |           |           |             |
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
- Está usando Live Server? (Sim/Não)
- Erros no console? (cole aqui)
```

### Exemplo Preenchido

```markdown
### ❌ Teste 2.2 falhou

**O que aconteceu:**
Com "Slow 3G" ativo, não vejo o skeleton. Aparece uma tela branca vazia por uns segundos.

**O que eu esperava:**
Ver 8 cards cinza com animação shimmer enquanto carrega.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
- Live Server: Sim
- Erros no console: Nenhum
```

---

## 🚀 Depois dos Testes

Quando tudo passar, você pode:

```text
| Opção | Descrição                                            |
| ----- | ---------------------------------------------------- |
| 🚀    | Avançar para v2-js7-css7 (OOP/Design Patterns)       |
| 🎨    | Ajustar imagens dos produtos                         |
| 🧪    | Testar em outros navegadores                         |
| 📝    | Finalizar o README da v2-js6-css6                    |
| 🌐    | Publicar no GitHub Pages                             |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 1.2    | 8 cards carregam via fetch          |
| 🥈         | 2.2    | Skeleton visível com Slow 3G        |
| 🥉         | 6.4    | Confetti cai ao finalizar pedido    |
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
| MDN - Fetch API                | https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API |
| MDN - async/await              | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function |
| MDN - @keyframes               | https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes |
| Como simular offline no Chrome | https://developer.chrome.com/docs/devtools/network/reference/#offline |
| Validador HTML W3C             | https://validator.w3.org/                     |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team

## 📁 Estado Atual da Pasta v2-js6-css6/

```text
v2-js6-css6/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── produtos.json       ✅
├── README.md           ✅
├── TESTES.md           ✅ (este arquivo)
│
├── css/
│   └── style.css       ✅
│
└── js/
    ├── main.js         ✅
    ├── cardapio.js     ✅ (fetch + skeleton)
    ├── carrinho.js     ✅ (pulso no badge)
    └── checkout.js     ✅ (confetti)
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

Depois de rodar todos os 52 testes:

```text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js7-css7                |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
```

Boa sorte nos testes! 🍔🌐🎉🧪