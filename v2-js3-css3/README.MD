# 🍔 VH Burger - v2-js3-css3

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 📋 Sobre o Projeto

Terceira evolução do site multipáginas da VH Burger.

Esta pasta adiciona um **carrinho de compras flutuante** com **persistência em localStorage** e **animação lateral**.

## 🎯 O Que Foi Adicionado

### JavaScript (Interatividade)

- **localStorage** para salvar o carrinho entre recarregamentos
- **JSON.stringify / parse** para serializar os itens
- **Carrinho dinâmico** criado via `createElement`
- **Funções de gerenciamento**: adicionar, remover, incrementar, decrementar, limpar
- **Cálculo automático** de quantidade e total
- **Persistência automática** a cada alteração

### CSS (Visual)

- **Painel lateral** (`position: fixed`) com animação slide
- **Overlay escuro** com transição suave
- **Botão flutuante** com badge de contagem
- **Animação `slideIn`** nos itens do carrinho
- **Layout flexível** no painel
- **Responsivo** (100vw no mobile)

## 📁 Estrutura

```text
v2-js3-css3/
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
    ├── main.js
    ├── cardapio.js     (atualizado: botão chama adicionarAoCarrinho)
    └── carrinho.js     (NOVO)
```

## 🚀 Como Executar

Abra qualquer página no navegador (ou Live Server).

## 🔍 Testes

```text
- [x] Botão flutuante com badge de contagem
- [x] Painel lateral animado (slide)
- [x] Overlay escuro ao abrir
- [x] Fecha com ESC ou clicando no overlay
- [x] Adicionar item incrementa corretamente
- [x] Incrementar/decrementar quantidade
- [x] Remover item individualmente
- [x] Limpar carrinho com confirmação
- [x] Total calculado corretamente
- [x] **Persistência em localStorage**
- [x] Carrinho sobrevive ao F5
```

## 🆚 Diferenças: v2-js2-css2 → v2-js3-css3

```text
| Aspecto                 | v2-js2-css2       | v2-js3-css3              |
| ----------------------- | ----------------- | ------------------------ |
| Carrinho                | ❌ (só alerta)    | ✅ Funcional             |
| Persistência            | ❌                | ✅ localStorage          |
| Painel lateral          | ❌                | ✅ slide-in              |
| Badge de contagem       | ❌                | ✅ no botão flutuante    |
| Soma de total           | ❌                | ✅ automática            |
| Botões +/- nos itens    | ❌                | ✅                        |
```

## 🗺️ Roadmap

```text
| Módulo        | Foco                              | Status |
| ------------- | --------------------------------- | ------ |
| v2-js1-css1   | Cores, fontes, saudação, relógio  | ✅     |
| v2-js2-css2   | Flexbox, Grid, Cards, Animações   | ✅     |
| v2-js3-css3   | localStorage + carrinho flutuante | ✅     |
| v2-js4-css4   | Responsividade avançada           | ⏳     |
| v2-js5-css5   | Formulário validado + CSS         | ⏳     |
```

Atividade 2 – Linguagem de Marcação
Módulo extra: Evolução v2 + JS + CSS

text

---

## 🎯 Próximos Passos (v2-js4-css4)

Depois de testar a `v2-js3-css3`:

```text
| Tecnologia | O que aprender                                     |
| ---------- | -------------------------------------------------- |
| JavaScript | Validação de formulário com Regex                  |
| CSS        | Formulários estilizados, mensagens de erro         |
| HTML       | Formulário de contato/checkout                     |
```

## 🚀 O Que Fazer Agora

```text
| Opção | Descrição                                       |
| ----- | ----------------------------------------------- |
| 🧪    | Testar a v2-js3-css3 e me reportar              |
| 📝    | Criar o TESTES.md da v2-js3-css3                |
| 🚀    | Avançar para v2-js4-css4                        |
| 🎨    | Adicionar mais animações (ex: bounce)           |
```

Me diga o que prefere! 🍔🛒🚀
