# 🧪 TESTES.md — v2-js3-css3

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js3--css3-blue)
![Testes](https://img.shields.io/badge/testes-42-orange)

Este documento contém **todos os testes** que devem ser executados na **v2-js3-css3** do projeto VH Burger.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js3-css3](#-testesmd--v2-js3-css3)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Inicialização do Carrinho](#-teste-1--inicialização-do-carrinho)
  - [🧪 TESTE 2 — Abertura e Fechamento do Painel](#-teste-2--abertura-e-fechamento-do-painel)
  - [🧪 TESTE 3 — Adicionar Itens](#-teste-3--adicionar-itens)
  - [🧪 TESTE 4 — Controles do Item](#-teste-4--controles-do-item)
  - [🧪 TESTE 5 — Cálculo do Total](#-teste-5--cálculo-do-total)
  - [🧪 TESTE 6 — Limpar e Finalizar](#-teste-6--limpar-e-finalizar)
  - [🧪 TESTE 7 — Persistência (localStorage)](#-teste-7--persistência-localstorage)
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
  - [📁 Estado Atual da Pasta v2-js3-css3/](#-estado-atual-da-pasta-v2-js3-css3)
  - [🎯 Como Usar Este Arquivo](#-como-usar-este-arquivo)
  - [🚀 Próximo Passo](#-próximo-passo)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] Todos os arquivos estão na pasta v2-js3-css3/
- [ ] Subpasta css/ existe com style.css atualizado
- [ ] Subpasta js/ existe com main.js, cardapio.js e carrinho.js
- [ ] Os 4 HTMLs têm os 3 scripts na ordem correta (carrinho → main → cardapio)
- [ ] O navegador foi aberto (de preferência via Live Server)
```

---

## 🧪 TESTE 1 — Inicialização do Carrinho

**Como testar:** Abra qualquer página (menos o cardápio, para começar).

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 1.1 | Abrir index.html                  | Botão flutuante "🛒" aparece no canto inferior esquerdo | ⬜     |
| 1.2 | Badge de contagem                 | Inicialmente oculto (carrinho vazio)        | ⬜     |
| 1.3 | Abrir cardapio.html               | Botão flutuante continua visível            | ⬜     |
| 1.4 | Abrir sobre.html                  | Botão flutuante continua visível            | ⬜     |
| 1.5 | Abrir contato.html                | Botão flutuante continua visível            | ⬜     |
| 1.6 | Inspecionar (F12)                 | Elemento <aside id="painel-carrinho"> existe no DOM | ⬜   |
```

---

## 🧪 TESTE 2 — Abertura e Fechamento do Painel

**Como testar:** Clique no botão flutuante e use as opções de fechamento.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 2.1 | Clicar no botão "🛒"              | Painel lateral abre com animação slide      | ⬜     |
| 2.2 | Painel aberto                     | Overlay escuro cobre o resto da tela        | ⬜     |
| 2.3 | Clicar no overlay                 | Painel fecha                                | ⬜     |
| 2.4 | Clicar no botão "✕"               | Painel fecha                                | ⬜     |
| 2.5 | Pressionar ESC                    | Painel fecha                                | ⬜     |
| 2.6 | Abrir e fechar várias vezes       | Animação funciona consistentemente          | ⬜     |
| 2.7 | Scroll com painel aberto          | Página não rola por baixo (overlay bloqueia) | ⬜    |
```

---

## 🧪 TESTE 3 — Adicionar Itens

**Como testar:** Abra o `cardapio.html` e clique em "Adicionar ao Carrinho".

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 3.1 | Clicar em "Adicionar" no VH Clássico | Painel abre automaticamente               | ⬜     |
| 3.2 | Badge de contagem                 | Passa a mostrar "1"                         | ⬜     |
| 3.3 | Clicar novamente no VH Clássico   | Quantidade do item vira 2 (não duplica)     | ⬜     |
| 3.4 | Adicionar VH Bacon                | Novo item aparece no carrinho               | ⬜     |
| 3.5 | Total de itens                    | Badge mostra "3" (2 clássicos + 1 bacon)    | ⬜     |
| 3.6 | Item esgotado (VH Veggie)         | Botão continua desabilitado, não adiciona   | ⬜     |
```

---

## 🧪 TESTE 4 — Controles do Item

**Como testar:** Com itens no carrinho, use os botões dentro de cada item.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 4.1 | Clicar em "+"                     | Quantidade aumenta em 1                     | ⬜     |
| 4.2 | Clicar em "−"                     | Quantidade diminui em 1                     | ⬜     |
| 4.3 | Clicar em "−" até quantidade = 1  | Item ainda está no carrinho                 | ⬜     |
| 4.4 | Clicar em "−" mais uma vez        | Item é removido do carrinho                 | ⬜     |
| 4.5 | Clicar em "🗑️"                    | Item removido imediatamente                 | ⬜     |
| 4.6 | Clicar em "+" repetidamente       | Quantidade pode chegar a 10, 20, etc.       | ⬜     |
| 4.7 | Badge atualiza em tempo real      | Cada clique reflete no botão flutuante      | ⬜     |
| 4.8 | Animação slideIn no item novo     | Novo item entra deslizando                  | ⬜     |
```

---

## 🧪 TESTE 5 — Cálculo do Total

**Como testar:** Adicione vários itens e observe o total.

```text
| #   | Cenário                            | Cálculo Esperado                  | Status |
| --- | ---------------------------------- | --------------------------------- | ------ |
| 5.1 | 1x VH Clássico (R$ 28)            | Total: R$ 28,00                   | ⬜     |
| 5.2 | 2x VH Clássico                     | Total: R$ 56,00                   | ⬜     |
| 5.3 | 1x Clássico + 1x Bacon             | Total: R$ 60,00                   | ⬜     |
| 5.4 | 2x Clássico + 1x Bacon             | Total: R$ 88,00                   | ⬜     |
| 5.5 | Remover todos                     | Total: R$ 0,00                    | ⬜     |
| 5.6 | Formato                          | Sempre com 2 casas e vírgula      | ⬜     |
```

> 💡 **Dica:** O total deve estar no rodapé do painel, com o rótulo **"Total:"** em destaque amarelo.

---

## 🧪 TESTE 6 — Limpar e Finalizar

**Como testar:** Com itens no carrinho, use os botões do rodapé.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Clicar em "Limpar Carrinho"       | Pede confirmação                            | ⬜     |
| 6.2 | Clicar em "OK" na confirmação     | Carrinho fica vazio, badge desaparece       | ⬜     |
| 6.3 | Clicar em "Cancelar"              | Carrinho permanece com os itens             | ⬜     |
| 6.4 | Clicar em "Finalizar Pedido"      | Alerta com o total + mensagem de sucesso    | ⬜     |
| 6.5 | Após finalizar                    | Carrinho é limpo automaticamente            | ⬜     |
| 6.6 | Clicar "Finalizar" com carrinho vazio | Alerta avisando que está vazio           | ⬜     |
```

---

## 🧪 TESTE 7 — Persistência (localStorage)

**Como testar:** Adicione itens e recarregue a página.

```text
| #   | Ação                              | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 7.1 | Adicionar 2 itens                 | Badge mostra "2"                            | ⬜     |
| 7.2 | Recarregar (F5)                   | Badge continua "2" (persistência!)          | ⬜     |
| 7.3 | Abrir o painel                    | Itens continuam lá com as quantidades       | ⬜     |
| 7.4 | Navegar para outra página         | Badge mantém o valor                        | ⬜     |
| 7.5 | Fechar e abrir o navegador        | Carrinho continua salvo                     | ⬜     |
| 7.6 | DevTools → Application → LocalStorage | Chave "vh-carrinho" com JSON dos itens | ⬜     |
| 7.7 | Limpar carrinho e recarregar      | Badge desaparece (não restaura)             | ⬜     |
```

> 💡 **Dica:** Se o carrinho **não persistir**, verifique:
>
> - O `localStorage.setItem` está sendo chamado? (Console)
> - O navegador **não está em modo anônimo**?
> - O **Live Server** está rodando?

---

## 🧪 TESTE 8 — Responsividade

**Como testar:** Use o DevTools (F12 → ícone de celular).

```text
| #   | Largura       | Comportamento Esperado                     | Status |
| --- | ------------- | ------------------------------------------ | ------ |
| 8.1 | Desktop (900+) | Painel abre com largura fixa (~380px)     | ⬜     |
| 8.2 | Tablet (768)  | Painel continua funcional                 | ⬜     |
| 8.3 | Mobile (480)  | Painel ocupa 100% da tela                 | ⬜     |
| 8.4 | Mobile (375)  | Botão flutuante acessível, não cobre menu | ⬜     |
| 8.5 | Mobile        | Itens do carrinho com scroll interno      | ⬜     |
```

---

## 🧪 TESTE 9 — Console e Logs

**Como testar:** Abra o DevTools (F12) → aba Console.

```text
| #   | Verificar                         | Resultado Esperado                              | Status |
| --- | --------------------------------- | ----------------------------------------------- | ------ |
| 9.1 | Ao abrir a página                 | "🛒 Carrinho inicializado. Itens salvos: X"    | ⬜     |
| 9.2 | Ao adicionar item                 | "✅ [nome] adicionado ao carrinho!"             | ⬜     |
| 9.3 | Ao recarregar com itens           | "Itens salvos: 2" (número correto)             | ⬜     |
| 9.4 | Sem erros vermelhos               | Nenhuma mensagem de erro                        | ⬜     |
```

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                       | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| -------------------------- | ------ | --------- | --------- | ----------- |
| Inicialização              | 6      |           |           |             |
| Abrir/Fechar Painel        | 7      |           |           |             |
| Adicionar Itens            | 6      |           |           |             |
| Controles do Item          | 8      |           |           |             |
| Cálculo do Total           | 6      |           |           |             |
| Limpar/Finalizar           | 6      |           |           |             |
| Persistência               | 7      |           |           |             |
| Responsividade             | 5      |           |           |             |
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
### ❌ Teste 7.2 falhou

**O que aconteceu:**
Ao recarregar a página, o carrinho perdeu todos os itens e o badge voltou a ficar oculto.

**O que eu esperava:**
Os itens e o badge deveriam continuar com a quantidade salva.

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
| 🚀    | Avançar para v2-js4-css4 (responsividade avançada)  |
| 🎨    | Adicionar animações extras nos botões               |
| 🧪    | Testar em outros navegadores                        |
| 📝    | Finalizar o README da v2-js3-css3                   |
| 🌐    | Publicar no GitHub Pages                            |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 3.1-3.2| Adicionar itens e ver o badge       |
| 🥈         | 5.1-5.4| Cálculo do total                    |
| 🥉         | 7.2    | Persistência após F5                |
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
| MDN - localStorage             | https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage |
| MDN - JSON.stringify           | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify |
| MDN - transform (CSS)          | https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform |
| Can I Use                      | https://caniuse.com/                          |
```

---

> 💡 **Última atualização:** 18/10/2026
>
> **Mantido por:** VH Burger Dev Team

## 📁 Estado Atual da Pasta v2-js3-css3/

```text
v2-js3-css3/
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
    ├── cardapio.js     ✅
    └── carrinho.js     ✅
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

Depois de rodar todos os 55 testes:

```text
| Resultado             | Ação Recomendada                        |
| --------------------- | --------------------------------------- |
| ✅ Todos passaram     | Avançar para v2-js4-css4                |
| ❌ Alguns falharam    | Me avisar com o template de reporte     |
| 🔧 Testes pendentes   | Completar antes de avançar              |
```

Boa sorte nos testes! 🍔🛒🧪
