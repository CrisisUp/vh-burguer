# 🧪 TESTES.md — v2-js9-css9

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v2--js9--css9-blue)
![Testes](https://img.shields.io/badge/testes-42-orange)
![Interface](https://img.shields.io/badge/interface-premium-gold)

Este documento contém **todos os testes de interface** que devem ser executados na **v2-js9-css9** do projeto VH Burger.

> ⚠️ **Nota:** Os testes automatizados (Jest) já validam a lógica. Este documento foca em validar a **experiência visual e a interação do usuário** no navegador.

---

## 📋 Sumário

- [🧪 TESTES.md — v2-js9-css9](#-testesmd--v2-js9-css9)
  - [📋 Sumário](#-sumário)
  - [📋 Antes de Começar — Preparação](#-antes-de-começar--preparação)
    - [✅ Passo 0 — Checklist Inicial](#-passo-0--checklist-inicial)
  - [🧪 TESTE 1 — Home e Identidade Visual](#-teste-1--home-e-identidade-visual)
  - [🧪 TESTE 2 — Cardápio e Carrinho](#-teste-2--cardápio-e-carrinho)
  - [🧪 TESTE 3 — Página Sobre](#-teste-3--página-sobre)
  - [🧪 TESTE 4 — Checkout e Validação](#-teste-4--checkout-e-validação)
  - [🧪 TESTE 5 — Dark Mode e Responsividade](#-teste-5--dark-mode-e-responsividade)
  - [🧪 TESTE 6 — Performance e Console](#-teste-6--performance-e-console)
  - [📊 Planilha de Resultados](#-planilha-de-resultados)
    - [📈 Progresso Geral](#-progresso-geral)
  - [🎯 Como Reportar Problemas](#-como-reportar-problemas)
    - [Exemplo Preenchido](#exemplo-preenchido)
  - [🚀 Depois dos Testes](#-depois-dos-testes)
  - [💡 Dica Rápida — 3 Testes Prioritários](#-dica-rápida--3-testes-prioritários)
  - [📅 Histórico de Testes](#-histórico-de-testes)
  - [🔗 Referências](#-referências)
  - [📁 Estado Atual da Pasta v2-js9-css9/](#-estado-atual-da-pasta-v2-js9-css9)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

```text
- [ ] O projeto foi compilado (`npm run build`)
- [ ] Os testes automatizados passaram (`npm test`)
- [ ] O site está aberto no Live Server (http://127.0.0.1:5500)
- [ ] O console do navegador está aberto (F12)
- [ ] O localStorage está limpo (para testes precisos)
```

---

## 🧪 TESTE 1 — Home e Identidade Visual

**Como testar:** Abra o `index.html` no Live Server.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 1.1 | Logo no topo                      | Ícone de hambúrguer em CSS + "VH Burger"    | ⬜     |
| 1.2 | Hover no logo                     | O logo aumenta levemente                    | ⬜     |
| 1.3 | Fundo da página                   | Imagem de chef com efeito escuro (blur)     | ⬜     |
| 1.4 | Título "O Verdadeiro Sabor..."    | Fonte grande e em destaque                  | ⬜     |
| 1.5 | Botão "Ver Cardápio"              | Botão amarelo com sombra (neon)             | ⬜     |
| 1.6 | Imagem do hambúrguer (Hero)       | Circular, com borda amarela e flutuando     | ⬜     |
| 1.7 | Seção "Os Mais Pedidos"           | 3 cards com imagens e preços                | ⬜     |
| 1.8 | Hover nos cards                   | Card sobe e a imagem aumenta (zoom)         | ⬜     |
| 1.9 | Seção de depoimentos              | 3 cards de vidro fosco com estrelas         | ⬜     |
| 1.10| Rodapé                            | Relógio atualizando e direitos autorais     | ⬜     |
| 1.11| Favicon                           | Ícone de hambúrguer na aba do navegador     | ⬜     |
```

---

## 🧪 TESTE 2 — Cardápio e Carrinho

**Como testar:** Vá para a página `cardapio.html`.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 2.1 | Banner do cardápio                | Imagem de fundo + "Explore Nossos Sabores"  | ⬜     |
| 2.2 | Carregamento (Skeleton)           | Cards cinza animados antes de carregar      | ⬜     |
| 2.3 | Produtos carregados (Fetch)       | 8 cards com imagens do JSON                 | ⬜     |
| 2.4 | Botão "Adicionar" (Neon)          | Borda amarela, brilho no hover              | ⬜     |
| 2.5 | Produto esgotado (VH Veggie)      | Badge "ESGOTADO" e botão desabilitado       | ⬜     |
| 2.6 | Clicar em "Adicionar"             | Toast desce do topo + painel abre           | ⬜     |
| 2.7 | Badge do carrinho flutuante       | Número aumenta com animação de pulso        | ⬜     |
| 2.8 | Painel lateral do carrinho        | Lista de itens e total calculado            | ⬜     |
| 2.9 | Botões "+" e "-"                  | Quantidade e total atualizam                | ⬜     |
| 2.10| Recarregar a página (F5)          | Carrinho permanece salvo (localStorage)     | ⬜     |
```

---

## 🧪 TESTE 3 — Página Sobre

**Como testar:** Vá para a página `sobre.html`.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 3.1 | Banner "Mais que um hambúrguer"   | Imagem com overlay escuro                   | ⬜     |
| 3.2 | Linha do tempo (Timeline)         | Marcos em 2020, 2021, 2023 e 2026           | ⬜     |
| 3.3 | Layout da timeline (Desktop)      | Alternando esquerda e direita               | ⬜     |
| 3.4 | Seção "Nossos Valores"            | 4 cards com ícones SVG amarelos             | ⬜     |
| 3.5 | Hover nos valores                 | Ícone aumenta (zoom) e card sobe            | ⬜     |
| 3.6 | Citação do fundador               | Aspas gigantes e texto destacado            | ⬜     |
| 3.7 | Seção da equipe                   | 3 fotos circulares dos chefs                | ⬜     |
```

---

## 🧪 TESTE 4 — Checkout e Validação

**Como testar:** Adicione itens e clique em "Finalizar Pedido".

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 4.1 | Resumo do pedido                  | Itens e total corretos                      | ⬜     |
| 4.2 | Floating Labels                   | Labels sobem ao clicar/focar                | ⬜     |
| 4.3 | Máscara de Telefone               | Formata para (11) 99999-9999                | ⬜     |
| 4.4 | Máscara de CEP                    | Formata para 12345-678                      | ⬜     |
| 4.5 | Validação de campos vazios        | Borda vermelha e mensagem de erro           | ⬜     |
| 4.6 | E-mail inválido                   | Mensagem "Digite um e-mail válido"          | ⬜     |
| 4.7 | Foco no primeiro erro             | Cursor vai para o campo inválido            | ⬜     |
| 4.8 | Envio com sucesso                 | Confetti cai na tela                        | ⬜     |
| 4.9 | Mensagem de sucesso               | "Pedido realizado!" aparece                 | ⬜     |
| 4.10| Após 4 segundos                   | Redireciona para a Home                     | ⬜     |
```

---

## 🧪 TESTE 5 — Dark Mode e Responsividade

**Como testar:** Clique no botão de tema (sol/lua) e use o DevTools.

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 5.1 | Clicar no botão de tema           | Alterna entre escuro e claro                | ⬜     |
| 5.2 | Modo claro                        | Fundo branco, texto marrom café             | ⬜     |
| 5.3 | Modo escuro                       | Fundo escuro, texto claro                   | ⬜     |
| 5.4 | Recarregar a página (F5)          | Tema escolhido permanece                    | ⬜     |
| 5.5 | Reduzir a tela (Mobile)           | Menu vira hambúrguer (☰)                    | ⬜     |
| 5.6 | Abrir o menu mobile               | Links em coluna com animação                | ⬜     |
| 5.7 | Grid do cardápio (Mobile)         | Cards em 1 coluna                           | ⬜     |
| 5.8 | Timeline do Sobre (Mobile)        | Vira coluna única, alinhada à esquerda      | ⬜     |
```

---

## 🧪 TESTE 6 — Performance e Console

**Como testar:** Abra o DevTools (F12).

```text
| #   | Verificar                         | Resultado Esperado                          | Status |
| --- | --------------------------------- | ------------------------------------------- | ------ |
| 6.1 | Console                           | Nenhum erro vermelho                        | ⬜     |
| 6.2 | Logs de carregamento              | "🍔 VH Burger v2-js8-css8 carregado!"       | ⬜     |
| 6.3 | Log de produtos                   | "🍔 8 produtos renderizados via API!"       | ⬜     |
| 6.4 | Aba Network                       | Requisição produtos.json com status 200     | ⬜     |
| 6.5 | Lighthouse (Performance)          | Nota acima de 80                            | ⬜     |
| 6.6 | Lighthouse (Acessibilidade)       | Nota acima de 90                            | ⬜     |
```

---

## 📊 Planilha de Resultados

Preencha conforme testa:

```text
| Área                       | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| -------------------------- | ------ | --------- | --------- | ----------- |
| Home e Identidade Visual   | 11     |           |           |             |
| Cardápio e Carrinho        | 10     |           |           |             |
| Página Sobre               | 7      |           |           |             |
| Checkout e Validação       | 10     |           |           |             |
| Dark Mode e Responsividade | 8      |           |           |             |
| Performance e Console      | 6      |           |           |             |
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
- Erros no console? (cole aqui)
```

### Exemplo Preenchido

```markdown
### ❌ Teste 4.8 falhou

**O que aconteceu:**
Ao enviar o pedido, o confetti não cai na tela.

**O que eu esperava:**
Ver a chuva de confetti colorido.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
- Erros no console: Nenhum
```

---

## 🚀 Depois dos Testes

Quando tudo passar, você pode:

```text
| Opção | Descrição                                            |
| ----- | ---------------------------------------------------- |
| 🚀    | Avançar para v2-js10-css10 (Deploy no GitHub Pages) |
| 📝    | Finalizar o README da v2-js9-css9                   |
| 🌐    | Publicar no GitHub Pages                            |
| 🎨    | Adicionar novas funcionalidades                     |
```

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

```text
| Prioridade | Teste  | O que valida                        |
| ---------- | ------ | ----------------------------------- |
| 🥇         | 2.6    | Toast e painel do carrinho          |
| 🥈         | 4.8    | Confetti ao finalizar pedido        |
| 🥉         | 5.1    | Alternância do Dark Mode            |
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
| Live Server                    | https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer |
| Lighthouse (Google)            | Chrome DevTools → aba Lighthouse              |
| Validador HTML W3C             | https://validator.w3.org/                     |
| Validador CSS W3C              | https://jigsaw.w3.org/css-validator/          |
```

---

> 💡 **Última atualização:** 19/10/2026
>
> **Mantido por:** VH Burger Dev Team

## 📁 Estado Atual da Pasta v2-js9-css9/

```text
v2-js9-css9/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── produtos.json       ✅
├── README.md           ✅
├── TESTES.md           ✅ (este arquivo)
├── package.json        ✅
├── jest.config.js      ✅
├── tsconfig.json       ✅
├── tsconfig.test.json  ✅
│
├── css/
│   └── style.css       ✅
│
├── src/                ✅
├── tests/              ✅
└── dist/               ✅
```
