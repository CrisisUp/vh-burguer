# 🧪 TESTES.md — v2-js8-css8

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js8--css8-blue)
![Testes](https://img.shields.io/badge/testes-40-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Este documento contém **todos os testes** que devem ser executados na **v2-js8-css8** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js8-css8](#-testesmd--v2-js8-css8)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Compilação TypeScript](#-teste-1--compilação-typescript)
  - [🧪 TESTE 2 — Arquitetura de Pastas](#-teste-2--arquitetura-de-pastas)
  - [🧪 TESTE 3 — Tipagem e Interfaces](#-teste-3--tipagem-e-interfaces)
  - [🧪 TESTE 4 — Funcionalidades (Carrinho e Checkout)](#-teste-4--funcionalidades-carrinho-e-checkout)
  - [🧪 TESTE 5 — Design Patterns](#-teste-5--design-patterns)
  - [🧪 TESTE 6 — Debug com Source Maps](#-teste-6--debug-com-source-maps)
  - [🧪 TESTE 7 — Console e Logs](#-teste-7--console-e-logs)
  - [📊 Planilha de Resultados](#-planilha-de-resultados)
    - [📈 Progresso Geral](#-progresso-geral)
  - [🎯 Como Reportar Problemas](#-como-reportar-problemas)
    - [Exemplo Preenchido](#exemplo-preenchido)
  - [🚀 Depois dos Testes](#-depois-dos-testes)
  - [💡 Dica Rápida — 3 Testes Prioritários](#-dica-rápida--3-testes-prioritários)
  - [📅 Histórico de Testes](#-histórico-de-testes)
  - [🔗 Referências](#-referências)
  - [🎯 Próximo Passo](#-próximo-passo)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] A pasta src/ existe com os arquivos .ts
- [ ] A pasta dist/ foi gerada (após rodar `npm run build`)
- [ ] O package.json e tsconfig.json estão na raiz
- [ ] Você está usando o Live Server para abrir o HTML
- [ ] O console do navegador está aberto (F12)
```

---

## 🧪 TESTE 1 — Compilação TypeScript

**Como testar:** Abra o terminal na pasta e rode os comandos.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 1.1 | Rodar `npm run build`             | Compila sem NENHUM erro no terminal         | ⬜     |
| 1.2 | Verificar a pasta `dist/`         | Arquivos .js gerados com sucesso            | ⬜     |
| 1.3 | Verificar `dist/models/`          | Produto.js, Carrinho.js e Pagamento.js lá   | ⬜     |
| 1.4 | Verificar arquivos `.js.map`      | Source maps gerados (para debug)            | ⬜     |
| 1.5 | Alterar código no `.ts`           | O terminal não compila automaticamente      | ⬜     |
| 1.6 | Rodar `npm run build` de novo     | Reflete a alteração no `dist/`              | ⬜     |
```

> 💡 **Dica:** Se você apagar a pasta `dist/` e rodar `npm run build`, ela deve ser recriada inteira.

---

## 🧪 TESTE 2 — Arquitetura de Pastas

**Como testar:** Inspecione o explorador de arquivos do VS Code.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 2.1 | Pasta `src/`                      | Contém os arquivos .ts originais            | ⬜     |
| 2.2 | Pasta `dist/`                     | Contém os arquivos .js compilados           | ⬜     |
| 2.3 | Pasta `src/models/`               | Classes separadas                           | ⬜     |
| 2.4 | Os HTMLs apontam para `dist/`     | `<script src="dist/main.js">`               | ⬜     |
| 2.5 | Os HTMLs NÃO apontam para `src/`  | O navegador não entende `.ts`               | ⬜     |
```

---

## 🧪 TESTE 3 — Tipagem e Interfaces

**Como testar:** No VS Code, abra os arquivos `.ts` e passe o mouse sobre as variáveis.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 3.1 | `Produto.ts`                      | Interface `ProdutoDados` definida           | ⬜     |
| 3.2 | `Carrinho.ts`                     | Interface `ItemCarrinho` definida           | ⬜     |
| 3.3 | `Pagamento.ts`                    | Interface `PagamentoStrategy` definida      | ⬜     |
| 3.4 | Hover em `#itens`                 | Mostra `ItemCarrinho[]`                     | ⬜     |
| 3.5 | Hover em `adicionar(produto)`     | Mostra que espera um `Produto`              | ⬜     |
| 3.6 | `tsconfig.json`                   | Opção `"strict": true` ativa                | ⬜     |
```

---

## 🧪 TESTE 4 — Funcionalidades (Carrinho e Checkout)

**Como testar:** Use o Live Server e navegue pelas páginas.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 4.1 | Abrir `cardapio.html`             | Produtos carregam via fetch                 | ⬜     |
| 4.2 | Clicar em "Adicionar"             | Toast aparece e painel abre                 | ⬜     |
| 4.3 | Verificar o carrinho              | Item está na lista e total correto          | ⬜     |
| 4.4 | Clicar em "Finalizar Pedido"      | Redireciona para `contato.html`             | ⬜     |
| 4.5 | Preencher checkout e enviar       | Confetti cai e mostra mensagem              | ⬜     |
| 4.6 | Testar PIX                        | Console mostra mensagem específica do PIX   | ⬜     |
| 4.7 | Recarregar a página (F5)          | Carrinho continua salvo (localStorage)      | ⬜     |
```

---

## 🧪 TESTE 5 — Design Patterns

**Como testar:** Abra o Console (F12) e interaja com os objetos.

```text
| #   | Ação no Console                       | Resultado Esperado                          | Status |
| --- | ------------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Digitar `new Carrinho()`              | Retorna um objeto Carrinho                  | ⬜     |
| 5.2 | `const c1 = new Carrinho()` e `c2 = new Carrinho()` | São o MESMO objeto (`true`)   | ⬜     |
| 5.3 | `carrinho.#itens`                     | Erro: propriedade privada                   | ⬜     |
| 5.4 | Alterar forma de pagamento            | O Strategy se adapta                        | ⬜     |
| 5.5 | Digitar `window.carrinho`             | `undefined` (escopo isolado)                | ⬜     |
```

> 💡 **Dica:** O teste 5.5 é a prova de que o ES6 Modules funcionou. Nenhuma variável vazou para o escopo global.

---

## 🧪 TESTE 6 — Debug com Source Maps

**Como testar:** Abra o DevTools (F12).

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Aba "Sources" no DevTools         | Os arquivos `.ts` aparecem na árvore        | ⬜     |
| 6.2 | Clicar em `carrinho.ts`           | O código-fonte aparece (com tipagem)        | ⬜     |
| 6.3 | Colocar um breakpoint             | O debug para no `.ts` e não no `.js`        | ⬜     |
| 6.4 | Console                           | Mostra a linha exata do `.ts`               | ⬜     |
```

---

## 🧪 TESTE 7 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 7.1 | Ao abrir a página                 | "🍔 VH Burger v2-js8-css8 (TypeScript)..."      | ⬜     |
| 7.2 | Ao finalizar pedido               | "✅ Pedido Aprovado!"                           | ⬜     |
| 7.3 | Mensagem de pagamento             | "⚡ Gerando QR Code PIX..." (exemplo)            | ⬜     |
| 7.4 | Sem erros vermelhos               | Nenhum erro no console                          | ⬜     |
```

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                       | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| -------------------------- | ------ | --------- | --------- | ----------- |
| Compilação TypeScript      | 6      |           |           |             |
| Arquitetura de Pastas      | 5      |           |           |             |
| Tipagem e Interfaces       | 6      |           |           |             |
| Funcionalidades            | 7      |           |           |             |
| Design Patterns            | 5      |           |           |             |
| Debug com Source Maps      | 4      |           |           |             |
| Console e Logs             | 4      |           |           |             |
| TOTAL                      | 37     |           |           |             |
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
- O `npm run build` rodou sem erros? (Sim/Não)
- Erros no console? (cole aqui)
```

### Exemplo Preenchido

```markdown
### ❌ Teste 4.2 falhou

**O que aconteceu:**
Ao clicar em "Adicionar", nada acontece na tela.

**O que eu esperava:**
Ver o toast e o carrinho abrindo.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
- O `npm run build` rodou sem erros? Sim
- Erros no console: "Uncaught TypeError: Cannot read properties of null (reading 'classList')"
```

---

## 🚀 Depois dos Testes

Quando tudo passar, você pode:

```text
| Opção | Descrição                                            |
| ----- | ---------------------------------------------------- |
| 🚀    | Avançar para v2-js9-css9 (Testes Unitários - Jest)   |
| 🧪    | Testar em outros navegadores                         |
| 🎨    | Refinar UI com base no TypeScript                    |
| 🌐    | Publicar no GitHub Pages                             |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 1.1    | O TypeScript compila sem erros      |
| 🥈         | 4.1-4.2| O cardápio e o carrinho funcionam   |
| 🥉         | 5.2    | O padrão Singleton está ativo       |
```

Se esses 3 passarem, a arquitetura TypeScript está sólida.

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
| Documentação Oficial TS        | https://www.typescriptlang.org/docs/          |
| TS Playground                  | https://www.typescriptlang.org/play           |
| MDN - TypeScript               | https://developer.mozilla.org/pt-BR/docs/Glossary/TypeScript |
| Refactoring Guru - Patterns    | https://refactoring.guru/design-patterns      |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team
📁 Estado Atual da Pasta v2-js8-css8/

```text
v2-js8-css8/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── produtos.json       ✅
├── README.md           ✅
├── TESTES.md           ✅ (este arquivo)
├── package.json        ✅
├── tsconfig.json       ✅
│
├── css/
│   └── style.css       ✅
│
├── src/
│   ├── main.ts         ✅
│   ├── cardapio.ts     ✅
│   ├── carrinho.ts     ✅
│   ├── checkout.ts     ✅
│   └── models/         ✅
│
└── dist/               ✅ (compilado)
```

## 🎯 Próximo Passo

Depois de rodar todos os 37 testes:

```text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js9-css9 (Testes Jest)  |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
```

Boa sorte nos testes! 🍔💻🧪
