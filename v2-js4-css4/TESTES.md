# 🧪 TESTES.md — v2-js4-css4

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js4--css4-blue)
![Testes](https://img.shields.io/badge/testes-48-orange)

Este documento contém **todos os testes** que devem ser executados na **v2-js4-css4** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js4-css4](#-testesmd--v2-js4-css4)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Integração com o Carrinho](#-teste-1--integração-com-o-carrinho)
  - [🧪 TESTE 2 — Máscaras de Digitação](#-teste-2--máscaras-de-digitação)
  - [🧪 TESTE 3 — Validação de Campos](#-teste-3--validação-de-campos)
  - [🧪 TESTE 4 — Feedback Visual](#-teste-4--feedback-visual)
  - [🧪 TESTE 5 — Submit e Sucesso](#-teste-5--submit-e-sucesso)
  - [🧪 TESTE 6 — Resumo do Pedido](#-teste-6--resumo-do-pedido)
  - [🧪 TESTE 7 — Acessibilidade e Navegação](#-teste-7--acessibilidade-e-navegação)
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
  - [📁 Estado Atual da Pasta v2-js4-css4/](#-estado-atual-da-pasta-v2-js4-css4)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] Todos os arquivos estão na pasta v2-js4-css4/
- [ ] Subpasta css/ existe com style.css atualizado
- [ ] Subpasta js/ existe com main.js, cardapio.js, carrinho.js e checkout.js
- [ ] O contato.html foi substituído pelo novo checkout
- [ ] O carrinho.js foi atualizado para redirecionar ao checkout
- [ ] O navegador foi aberto (de preferência via Live Server)
- [ ] O localStorage está limpo (para testes precisos)
```

---

## 🧪 TESTE 1 — Integração com o Carrinho

**Como testar:** No `cardapio.html`, adicione itens e clique em "Finalizar Pedido" no carrinho.

```text
| #   | Ação                              | Resultado Esperado                                           | Status |
| --- | --------------------------------- | ------------------------------------------------------------ | ------ |
| 1.1 | Adicionar 2 itens no cardápio     | Badge do carrinho mostra "2"                                 | ⬜     |
| 1.2 | Abrir o carrinho e clicar em "Finalizar Pedido" | Redireciona para contato.html                  | ⬜     |
| 1.3 | Na página de checkout             | Resumo do pedido aparece com os 2 itens                      | ⬜     |
| 1.4 | Total do resumo                   | Corresponde à soma dos itens                                 | ⬜     |
| 1.5 | Clicar em "Finalizar" com carrinho vazio | Alerta "Carrinho vazio!" e não redireciona            | ⬜     |
| 1.6 | Acessar contato.html diretamente (sem itens) | Mostra mensagem "carrinho vazio" e esconde o form | ⬜     |
```

---

## 🧪 TESTE 2 — Máscaras de Digitação

**Como testar:** No checkout, digite nos campos de telefone e CEP.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 2.1 | Digitar "11999998888" no telefone | Formata para "(11) 99999-8888"              | ⬜     |
| 2.2 | Apagar um dígito do telefone      | Máscara se ajusta corretamente              | ⬜     |
| 2.3 | Digitar letras no telefone        | Letras são ignoradas                        | ⬜     |
| 2.4 | Digitar "12345678" no CEP         | Formata para "12345-678"                    | ⬜     |
| 2.5 | Apagar dígito do CEP              | Máscara se ajusta corretamente              | ⬜     |
| 2.6 | Colar número no campo             | Máscara aplica mesmo no colar               | ⬜     |
```

---

## 🧪 TESTE 3 — Validação de Campos

**Como testar:** Deixe campos vazios ou preencha com dados inválidos e clique em "Confirmar".

```text
| #   | Cenário                           | Resultado Esperado                             | Status |
| --- | --------------------------------- | ---------------------------------------------- | ------ |
| 3.1 | Clicar em "Confirmar" com tudo vazio | Todos os campos ficam vermelhos             | ⬜     |
| 3.2 | Nome com "Jo" (2 letras)          | Erro "O nome deve ter pelo menos 3 letras."    | ⬜     |
| 3.3 | Nome com "João"                   | Borda verde (válido)                           | ⬜     |
| 3.4 | E-mail "abc" (sem @)              | Erro "Digite um e-mail válido."                | ⬜     |
| 3.5 | E-mail "joao@email.com"           | Borda verde (válido)                           | ⬜     |
| 3.6 | Telefone "123"                    | Erro "Formato inválido."                       | ⬜     |
| 3.7 | CEP "12345" (incompleto)          | Erro "Formato inválido."                       | ⬜     |
| 3.8 | Endereço "Rua A" (curto)          | Erro "Preencha o endereço completo (mín. 10)." | ⬜     |
| 3.9 | Pagamento não selecionado         | Erro "Escolha uma forma de pagamento."         | ⬜     |
| 3.10| Clicar em "Confirmar" com erro    | Foco vai para o primeiro campo inválido        | ⬜     |
| 3.11| Corrigir erro e clicar novamente  | Validação passa                                | ⬜     |
```

---

## 🧪 TESTE 4 — Feedback Visual

**Como testar:** Interaja com os campos e observe as bordas.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 4.1 | Campo inválido                    | Borda vermelha + fundo levemente vermelho   | ⬜     |
| 4.2 | Campo válido                      | Borda verde + fundo levemente verde         | ⬜     |
| 4.3 | Mensagem de erro                  | Aparece abaixo do campo                     | ⬜     |
| 4.4 | Animação shake no erro            | Mensagem "treme" ao aparecer                | ⬜     |
| 4.5 | Focus no campo (clique)           | Borda amarela + brilho suave                | ⬜     |
| 4.6 | Placeholder                       | Texto cinza claro visível                   | ⬜     |
| 4.7 | Label com asterisco vermelho      | Campos obrigatórios marcados                | ⬜     |
```

---

## 🧪 TESTE 5 — Submit e Sucesso

**Como testar:** Com o carrinho cheio e o formulário válido, clique em "Confirmar".

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Clicar em "Confirmar" (válido)    | Página NÃO recarrega                        | ⬜     |
| 5.2 | Após clicar                       | Mensagem verde de sucesso aparece           | ⬜     |
| 5.3 | Após 3 segundos                   | Redireciona para index.html                 | ⬜     |
| 5.4 | Carrinho após sucesso             | localStorage "vh-carrinho" removido         | ⬜     |
| 5.5 | Formulário após sucesso           | Todos os campos limpos                      | ⬜     |
| 5.6 | Clicar em "Limpar"                | Todos os campos resetam (sem enviar)        | ⬜     |
```

---

## 🧪 TESTE 6 — Resumo do Pedido

**Como testar:** Adicione itens e vá para o checkout.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Resumo exibe itens                | Nome + quantidade + preço de cada item      | ⬜     |
| 6.2 | Subtotais corretos                | Preço × quantidade por item                 | ⬜     |
| 6.3 | Linha "Total"                     | Destacada em amarelo, com soma geral        | ⬜     |
| 6.4 | Formato dos preços                | "R$ XX,XX" (vírgula, 2 casas)               | ⬜     |
| 6.5 | Carrinho vazio                    | Mensagem "Seu carrinho está vazio"          | ⬜     |
| 6.6 | Link "Voltar ao cardápio"         | Aparece quando carrinho está vazio          | ⬜     |
```

---

## 🧪 TESTE 7 — Acessibilidade e Navegação

**Como testar:** Use o teclado (Tab, Enter) e verifique semântica.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 7.1 | Pressionar Tab                    | Foco passa pelos campos em ordem            | ⬜     |
| 7.2 | Clicar no label do campo          | Foco vai para o input correspondente        | ⬜     |
| 7.3 | Pressionar Enter no formulário    | Submete (como clicar em Confirmar)          | ⬜     |
| 7.4 | Inspecionar (F12)                 | Inputs têm id, name e label associados      | ⬜     |
| 7.5 | Links do menu                      | Continuam funcionando                      | ⬜     |
```

---

## 🧪 TESTE 8 — Responsividade

**Como testar:** Use o DevTools (F12 → ícone de celular).

```text
| #   | Largura       | Comportamento Esperado                     | Status |
| --- | ------------- | ------------------------------------------ | ------ |
| 8.1 | Desktop (900+) | Formulário centralizado (máx 600px)       | ⬜     |
| 8.2 | Tablet (768)  | Formulário se adapta, sem quebras          | ⬜     |
| 8.3 | Mobile (375)  | Formulário em coluna única, legível        | ⬜     |
| 8.4 | Mobile (375)  | Botões "Confirmar" e "Limpar" empilhados   | ⬜     |
```

---

## 🧪 TESTE 9 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 9.1 | Ao abrir checkout                 | "💳 Checkout validado carregado!"               | ⬜     |
| 9.2 | Ao enviar com sucesso             | "📦 Pedido finalizado:" + dados do cliente      | ⬜     |
| 9.3 | Logs incluem: nome, email, total  | Dados completos do pedido                       | ⬜     |
| 9.4 | Sem erros vermelhos               | Nenhuma mensagem de erro no console             | ⬜     |
```

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                       | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente  |
| -------------------------- | ------ | --------- | --------- | ----------- |
| Integração com Carrinho    | 6      |           |           |             |
| Máscaras de Digitação      | 6      |           |           |             |
| Validação de Campos        | 11     |           |           |             |
| Feedback Visual            | 7      |           |           |             |
| Submit e Sucesso           | 6      |           |           |             |
| Resumo do Pedido           | 6      |           |           |             |
| Acessibilidade             | 5      |           |           |             |
| Responsividade             | 4      |           |           |             |
| Console e Logs             | 4      |           |           |             |
| TOTAL                      | 55     |           |           |             |
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
### ❌ Teste 5.1 falhou

**O que aconteceu:**
Ao clicar em "Confirmar Pedido", a página recarregou e perdi os dados.

**O que eu esperava:**
A página deveria ficar na mesma tela e mostrar a mensagem de sucesso.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
```

---

## 🚀 Depois dos Testes

Quando tudo passar, você pode:

```text
| Opção | Descrição                                             |
| ----- | ----------------------------------------------------- |
| 🚀    | Avançar para v2-js5-css5 (dark mode + responsividade) |
| 🎨    | Adicionar animações extras no checkout                |
| 🧪    | Testar em outros navegadores                          |
| 📝    | Finalizar o README da v2-js4-css4                     |
| 🌐    | Publicar no GitHub Pages                              |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                          |
| ---------- | ------ | ------------------------------------- |
| 🥇         | 3.1-3.2| Validação bloqueia campos vazios      |
| 🥈         | 5.1-5.2| Submit não recarrega e mostra sucesso |
| 🥉         | 2.1-2.4| Máscaras de telefone e CEP            |
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
| MDN - Formulários HTML         | https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/form |
| MDN - Regex                    | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions |
| MDN - event.preventDefault     | https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault |
| Validador HTML W3C             | https://validator.w3.org/                     |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team

## 📁 Estado Atual da Pasta v2-js4-css4/

```text
v2-js4-css4/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅ (checkout)
├── README.md           ✅
├── TESTES.md           ✅ (este arquivo)
│
├── css/
│   └── style.css       ✅
│
└── js/
    ├── main.js         ✅
    ├── cardapio.js     ✅
    ├── carrinho.js     ✅ (ajustado)
    └── checkout.js     ✅
```

🎯 Como Usar Este Arquivo

```text
| Ação                          | Como fazer                              |
| ----------------------------- | --------------------------------------- |
| Ver no VS Code (preview)      | Ctrl + Shift + V                        |
| Marcar testes concluídos      | Trocar ⬜ por ✅ ou ❌                  |
| Rastrear progresso            | Preencher a Planilha de Resultados      |
| Reportar problema             | Usar o template pronto                  |
```

Depois de rodar todos os 55 testes:

```text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js5-css5                |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
```

Boa sorte nos testes! 🍔🧪
