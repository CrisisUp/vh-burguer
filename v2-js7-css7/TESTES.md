# 🧪 TESTES.md — v2-js7-css7

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js7--css7-blue)
![Testes](https://img.shields.io/badge/testes-42-orange)
![OOP](https://img.shields.io/badge/OOP-Design%20Patterns-red)

Este documento contém **todos os testes** que devem ser executados na **v2-js7-css7** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js7-css7](#-testesmd--v2-js7-css7)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Arquitetura e Módulos](#-teste-1--arquitetura-e-módulos)
  - [🧪 TESTE 2 — Classes e Encapsulamento](#-teste-2--classes-e-encapsulamento)
  - [🧪 TESTE 3 — Padrão Singleton](#-teste-3--padrão-singleton)
  - [🧪 TESTE 4 — Strategy Pattern (Pagamentos)](#-teste-4--strategy-pattern-pagamentos)
  - [🧪 TESTE 5 — Interface do Carrinho e Toast](#-teste-5--interface-do-carrinho-e-toast)
  - [🧪 TESTE 6 — Integração com Módulos Anteriores](#-teste-6--integração-com-módulos-anteriores)
  - [🧪 TESTE 7 — Console e Logs](#-teste-7--console-e-logs)
  - [📊 Planilha de Resultados](#-planilha-de-resultados)
    - [📈 Progresso Geral](#-progresso-geral)
  - [🎯 Como Reportar Problemas](#-como-reportar-problemas)
    - [Exemplo Preenchido](#exemplo-preenchido)
  - [🚀 Depois dos Testes](#-depois-dos-testes)
  - [💡 Dica Rápida — 3 Testes Prioritários](#-dica-rápida--3-testes-prioritários)
  - [📅 Histórico de Testes](#-histórico-de-testes)
  - [🔗 Referências](#-referências)
  - [📁 Estado Atual da Pasta v2-js7-css7/](#-estado-atual-da-pasta-v2-js7-css7)
  - [🎯 Como Usar Este Arquivo](#-como-usar-este-arquivo)
  - [🚀 Próximo Passo](#-próximo-passo)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] Todos os arquivos estão na pasta v2-js7-css7/
- [ ] A subpasta js/models/ existe com Produto.js, Carrinho.js e Pagamento.js
- [ ] Todos os HTMLs usam <script type="module" src="...">
- [ ] Você está usando o Live Server (http://127.0.0.1:5500)
- [ ] O localStorage está limpo (para testes precisos)
```

> ⚠️ **IMPORTANTE:** Sem o Live Server, o navegador vai bloquear os `import`/`export` por causa da política de CORS para arquivos locais (`file://`).

---

## 🧪 TESTE 1 — Arquitetura e Módulos

**Como testar:** Abra o `cardapio.html` e inspecione a aba Network.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 1.1 | Abrir o cardápio                  | Página carrega sem erros                    | ⬜     |
| 1.2 | DevTools → Network (F12)          | Os arquivos .js são carregados separadamente| ⬜     |
| 1.3 | Network                           | Requisição "Produto.js" com status 200      | ⬜     |
| 1.4 | Network                           | Requisição "Carrinho.js" com status 200     | ⬜     |
| 1.5 | Network                           | Requisição "Pagamento.js" com status 200    | ⬜     |
| 1.6 | Abrir o HTML direto (file://)     | Console mostra erro de CORS (esperado)      | ⬜     |
```

---

## 🧪 TESTE 2 — Classes e Encapsulamento

**Como testar:** Abra o Console (F12) e digite os comandos abaixo.

```text
| #   | Ação no Console                   | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 2.1 | Digitar `new Carrinho()`          | Retorna um objeto Carrinho                  | ⬜     |
| 2.2 | Digitar `carrinho.#itens`         | Erro: propriedade privada não acessível     | ⬜     |
| 2.3 | Digitar `carrinho.itens`          | Retorna o array (via getter)                | ⬜     |
| 2.4 | Digitar `carrinho.total`          | Retorna o valor total em R$                 | ⬜     |
| 2.5 | Digitar `carrinho.quantidadeTotal`| Retorna a soma das quantidades              | ⬜     |
```

> 💡 **Dica:** O encapsulamento é a prova de que a classe está protegida. Ninguém de fora pode mexer no array diretamente, só pelos métodos `adicionar()`, `remover()` e `limpar()`.

---

## 🧪 TESTE 3 — Padrão Singleton

**Como testar:** Abra o Console (F12) e crie duas instâncias do carrinho.

```text
| #   | Ação no Console                       | Resultado Esperado                          | Status |
| --- | ------------------------------------- | ------------------------------------------- | ------ |
| 3.1 | `const c1 = new Carrinho()`           | Cria instância                              | ⬜     |
| 3.2 | `const c2 = new Carrinho()`           | Retorna a MESMA instância (Singleton)       | ⬜     |
| 3.3 | `c1 === c2`                           | `true` (são o mesmo objeto na memória)      | ⬜     |
| 3.4 | `c1.adicionar({id:1, nome:"X", preco:10})` | Adiciona ao carrinho                  | ⬜     |
| 3.5 | `c2.itens.length`                     | Retorna `1` (a mudança reflete nos dois)    | ⬜     |
```

---

## 🧪 TESTE 4 — Strategy Pattern (Pagamentos)

**Como testar:** No checkout (`contato.html`), preencha o formulário e alterne a forma de pagamento.

```text
| #   | Forma de Pagamento | Resultado Esperado (no Console / Tela)      | Status |
| --- | ------------------ | ------------------------------------------- | ------ |
| 4.1 | PIX                | "⚡ Gerando QR Code PIX no valor de R$..."   | ⬜     |
| 4.2 | Cartão             | "💳 Processando cartão no valor de R$..."   | ⬜     |
| 4.3 | Dinheiro           | "💵 Pagamento em dinheiro: R$... Tenha o troco!" | ⬜  |
| 4.4 | Inspecionar código | O checkout usa `criarEstrategiaPagamento()` | ⬜     |
| 4.5 | Inspecionar código | Não há um bloco gigante de `if/else`        | ⬜     |
```

---

## 🧪 TESTE 5 — Interface do Carrinho e Toast

**Como testar:** Adicione produtos e observe os avisos.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Clicar em "Adicionar"             | Toast amarelo desce do topo da tela         | ⬜     |
| 5.2 | Toast após 3 segundos             | Sobe e desaparece suavemente                | ⬜     |
| 5.3 | Badge do carrinho                 | Pula (animação pulse)                       | ⬜     |
| 5.4 | Clicar no carrinho flutuante      | Painel abre (slide lateral)                 | ⬜     |
| 5.5 | Clicar em "+" / "−"               | Quantidade atualiza no carrinho             | ⬜     |
| 5.6 | Clicar em "Limpar"                | Pede confirmação e limpa                    | ⬜     |
| 5.7 | Finalizar vazio                   | Mostra Toast "Carrinho vazio!" (não alert)  | ⬜     |
```

---

## 🧪 TESTE 6 — Integração com Módulos Anteriores

**Como testar:** Verifique se nada quebrou com a refatoração.

```text
| #   | Funcionalidade                    | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Saudação dinâmica (js1)           | Continua funcionando no topo                | ⬜     |
| 6.2 | Dark mode / Menu mobile (js5)     | Funcionam perfeitamente                     | ⬜     |
| 6.3 | Fetch API (js6)                   | Cardápio ainda carrega do JSON              | ⬜     |
| 6.4 | Skeleton Loading (js6)            | Aparece durante o carregamento              | ⬜     |
| 6.5 | Confetti (js6)                    | Cai ao finalizar pedido                     | ⬜     |
| 6.6 | Carrinho persistente (js3)        | Recarregar (F5) mantém os itens             | ⬜     |
```

---

## 🧪 TESTE 7 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 7.1 | Sem erros vermelhos               | Nenhum erro no console                          | ⬜     |
| 7.2 | Ao finalizar pedido               | "✅ Pedido Aprovado!" + mensagem do Strategy    | ⬜     |
| 7.3 | Console                           | Não há logs de variáveis soltas (escopo limpo)  | ⬜     |
```

> 💡 **Dica:** Digite `window.carrinho` no console. Deve retornar `undefined`. Isso prova que a variável está encapsulada dentro do módulo e não polui o escopo global.

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                       | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| -------------------------- | ------ | --------- | --------- | ----------- |
| Arquitetura e Módulos      | 6      |           |           |             |
| Classes e Encapsulamento   | 5      |           |           |             |
| Padrão Singleton           | 5      |           |           |             |
| Strategy Pattern           | 5      |           |           |             |
| Interface e Toast          | 7      |           |           |             |
| Integração                 | 6      |           |           |             |
| Console e Logs             | 3      |           |           |             |
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
- Está usando Live Server? (Sim/Não)
- Erros no console? (cole aqui)
```

### Exemplo Preenchido

```markdown
### ❌ Teste 3.3 falhou

**O que aconteceu:**
Ao rodar `c1 === c2` no console, retornou `false`.

**O que eu esperava:**
Retornar `true`, pois o Singleton deve retornar a mesma instância.

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
| 🚀    | Avançar para v2-js8-css8 (TypeScript)               |
| 🧪    | Testar em outros navegadores                        |
| 📝    | Finalizar o README da v2-js7-css7                   |
| 🌐    | Publicar no GitHub Pages                            |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 3.3    | Singleton funciona (`c1 === c2`)    |
| 🥈         | 2.2    | Encapsulamento (`#itens` privado)   |
| 🥉         | 4.1-4.3| Strategy retorna mensagens corretas |
```

Se esses 3 passarem, o restante da arquitetura está sólido.

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
| MDN - Classes                  | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes |
| MDN - Private class fields     | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/Private_class_fields |
| MDN - Módulos (import/export)  | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules |
| Refactoring Guru - Patterns    | https://refactoring.guru/design-patterns      |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team

## 📁 Estado Atual da Pasta v2-js7-css7/

```text
v2-js7-css7/
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
    ├── cardapio.js     ✅
    ├── carrinho.js     ✅
    ├── checkout.js     ✅
    └── models/         ✅
        ├── Produto.js  ✅
        ├── Carrinho.js ✅
        └── Pagamento.js✅
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

Depois de rodar todos os 37 testes:

```text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js8-css8                |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
```

Boa sorte nos testes! 🍔🏗️🧪
