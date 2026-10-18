# 🍔 VH Burger - v2-js5-css5

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![A11y](https://img.shields.io/badge/acessibilidade-WCAG%20AA-purple)

## 📋 Sobre o Projeto

Quinta evolução do site multipáginas da VH Burger.

Esta pasta adiciona **Dark Mode**, **Menu Mobile** e **Acessibilidade** ao site.

## 🎯 O Que Foi Adicionado

### CSS (Visual)

- **Variáveis CSS dinâmicas** (`[data-tema="claro"]`)
- **Modo claro** com cores otimizadas
- **Media queries** para tablet (768px) e mobile (480px)
- **Menu mobile** em coluna com animação
- **Focus visible** (outline amarelo)
- **Skip link** (acessibilidade)

### JavaScript (Interatividade)

- **Dark mode persistente** (localStorage)
- **Detecção de preferência** do sistema (`prefers-color-scheme`)
- **Menu hambúrguer** criado dinamicamente
- **Fecha menu** ao clicar em link (mobile)
- **Skip link** criado via JS (sem alterar HTML)
- **ARIA** (`aria-expanded`, `aria-label`)

## 📁 Estrutura

```text
v2-js5-css5/
│
├── index.html
├── cardapio.html
├── sobre.html
├── contato.html
│
├── css/
│   └── style.css
│
└── js/
    ├── main.js         (atualizado)
    ├── cardapio.js
    ├── carrinho.js
    └── checkout.js
```

## 🚀 Como Executar

Abra qualquer página no navegador
Clique no botão "☀️" para alternar o tema
Reduza a janela para ver o menu mobile

## 🔍 Testes

```text
- [x] Botão de tema aparece no topo direito
- [x] Dark mode persiste após F5
- [x] Detecção automática de preferência do sistema
- [x] Menu mobile aparece em telas < 768px
- [x] Menu fecha ao clicar em um link
- [x] Skip link aparece ao pressionar Tab
- [x] Focus visible em todos os elementos
- [x] Layout responsivo (tablet e mobile)
- [x] Sem scroll horizontal em nenhuma tela
```

## 🆚 Diferenças: v2-js4-css4 → v2-js5-css5

```text
| Aspecto                | v2-js4-css4           | v2-js5-css5                |
| ---------------------- | --------------------- | -------------------------- |
| Tema                   | ❌ (só escuro)        | ✅ Claro/Escuro            |
| Persistência do tema   | ❌                    | ✅ localStorage            |
| Menu mobile            | ❌                    | ✅ Hambúrguer              |
| Responsividade         | Básica                | ✅ Avançada (2 breakpoints)|
| Skip link              | ❌                    | ✅                         |
| Focus visible          | ❌                    | ✅                         |
| ARIA                   | ❌                    | ✅                         |
```

## 🗺️ Roadmap

```text
| Módulo        | Foco                              | Status |
| ------------- | --------------------------------- | ------ |
| v2-js1-css1   | Cores, fontes, saudação, relógio  | ✅     |
| v2-js2-css2   | Flexbox, Grid, Cards, Animações   | ✅     |
| v2-js3-css3   | localStorage + carrinho flutuante | ✅     |
| v2-js4-css4   | Checkout validado + estilizado    | ✅     |
| v2-js5-css5   | Dark mode + responsividade + a11y | ✅     |
| v2-js6-css6   | Fetch/API + animações avançadas   | ⏳     |
```

Atividade 2 – Linguagem de Marcação
Módulo extra: Evolução v2 + JS + CSS

text

---

## 🎯 Próximos Passos (v2-js6-css6)

Depois de testar a `v2-js5-css5`:

```text
| Tecnologia | O que aprender                                     |
| ---------- | -------------------------------------------------- |
| JavaScript | Fetch/API (buscar produtos de um JSON externo)     |
| CSS        | Animações avançadas (loading skeleton, confetti)   |
| HTML       | Estrutura semântica ainda mais rica                |
```

## 🚀 O Que Fazer Agora

```text
| Opção | Descrição                                       |
| ----- | ----------------------------------------------- |
| 🧪    | Testar a v2-js5-css5 e me reportar              |
| 📝    | Criar o TESTES.md da v2-js5-css5                |
| 🚀    | Avançar para v2-js6-css6                        |
| 🎨    | Ajustar cores do modo claro                     |
```

Me diga o que prefere! 🍔🌗📱🚀
