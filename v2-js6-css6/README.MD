# 🍔 VH Burger - v2-js6-css6

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Fetch](https://img.shields.io/badge/Fetch-API-purple)
![A11y](https://img.shields.io/badge/acessibilidade-WCAG%20AA-purple)

## 📋 Sobre o Projeto

Sexta evolução do site multipáginas da VH Burger.

Esta pasta representa um salto de maturidade: os produtos **deixaram de ser fixos no JavaScript** e passaram a ser carregados de um arquivo **JSON externo** via **Fetch API**. Além disso, adicionamos **Skeleton Loading** (tela de carregamento animada), **tratamento de erros de rede** e **animações avançadas** (confetti, pulso, zoom de imagens).

## 🎯 O Que Foi Adicionado Nesta Versão

### JavaScript (Interatividade)

- **Fetch API** — busca os produtos do `produtos.json`
- **async / await** — código assíncrono legível
- **try / catch** — tratamento de erros de rede
- **Skeleton Loading** — feedback visual durante o carregamento
- **Confetti** — animação ao finalizar pedido
- **Pulso no badge** — feedback ao adicionar item
- **Botão "Tentar Novamente"** — recarrega em caso de erro

### CSS (Visual)

- **Skeleton** com animação `shimmer`
- **Imagens nos cards** com zoom no hover
- **Confetti** caindo (via JS + CSS)
- **Animação de pulso** no badge
- **Float** nas imagens ao hover
- **Spinner** para botões de loading

## 📁 Estrutura do Projeto

```text
v2-js6-css6/
│
├── index.html
├── cardapio.html
├── sobre.html
├── contato.html
├── produtos.json         (NOVO)
│
├── css/
│   └── style.css
│
└── js/
    ├── main.js           (Cópia do js5)
    ├── cardapio.js       (Atualizado: fetch)
    ├── carrinho.js       (Atualizado: pulso)
    └── checkout.js       (Atualizado: confetti)
```

## 🎨 Paleta de Cores

```text
| Cor               | Hex         | Uso                        |
| ----------------- | ----------- | -------------------------- |
| Fundo             | #1a1a1a   | Corpo da página            |
| Fundo alternativo | #242424   | Cards e caixas             |
| Texto             | #f5f5f5   | Textos principais          |
| Texto suave       | #b3b3b3   | Parágrafos                 |
| Destaque          | #ffcc00   | Títulos, botões, links     |
| Secundária        | #e63946   | Badge de esgotado          |
| Borda             | #333      | Bordas sutis               |
```

## 🚀 Como Executar

**⚠️ IMPORTANTE:** Use o Live Server (fetch não funciona em `file://`).

1. Abra a pasta no VS Code
2. Botão direito em `cardapio.html` → **Open with Live Server**
3. O navegador abre em `http://127.0.0.1:5500/cardapio.html`

## 🔍 Testes Realizados

```text
- [x] Skeleton aparece enquanto carrega
- [x] 8 cards com imagens reais após fetch
- [x] Hover no card faz zoom na imagem
- [x] Badge do carrinho pulsa ao adicionar
- [x] Confetti cai ao finalizar pedido
- [x] Erro de rede tratado (desabilitar internet)
- [x] Botão "Tentar Novamente" recarrega a página
- [x] Console mostra "8 produtos renderizados via API!"
- [x] DevTools → Network mostra requisição 200
```

## 🆚 Evolução: v2-js5-css5 → v2-js6-css6

```text
| Aspecto                | v2-js5-css5             | v2-js6-css6                |
| ---------------------- | ----------------------- | -------------------------- |
| Dados dos produtos     | Fixos no JS             | ✅ Fetch do JSON           |
| Assincronismo          | ❌                      | ✅ async/await             |
| Skeleton Loading       | ❌                      | ✅ shimmer                 |
| Tratamento de erro     | ❌                      | ✅ try/catch + botão       |
| Imagens nos cards      | ❌                      | ✅ com zoom                |
| Confetti               | ❌                      | ✅ ao finalizar            |
| Pulso no badge         | ❌                      | ✅                         |
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
| v2-js6-css6   | Fetch/API + skeleton + confetti   | ✅     |
| v2-js7-css7   | Design Patterns (OOP)             | ⏳     |
| v2-js8-css8   | Módulos ES6 (import/export)       | ⏳     |
```

## 🧠 Aprendizados-Chave

```text
| Conceito           | O que foi aprendido                                  |
| ------------------ | ---------------------------------------------------- |
| Fetch API          | Buscar dados de um JSON externo (assincronismo)      |
| async/await        | Escrever código assíncrono de forma legível          |
| try/catch          | Capturar erros de rede sem quebrar a página          |
| Skeleton Loading   | Melhorar a UX durante o carregamento                 |
| Lazy loading       | Carregar imagens sob demanda (loading="lazy")        |
| @keyframes         | Criar animações complexas (shimmer, confetti, pulse) |
| Manipulação DOM    | Criar e remover elementos dinamicamente              |
```

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** Evolução v2 + JS + CSS (nível 6)

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Dica:** Para testar o erro de rede, abra o DevTools (F12) → aba **Network** → marque **Offline** e recarregue a página.

## 📁 Estado Atual da Pasta v2-js6-css6/

```text
v2-js6-css6/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── produtos.json       ✅
├── README.md           ✅ (este arquivo)
│
├── css/
│   └── style.css       ✅
│
└── js/
    ├── main.js         ✅
    ├── cardapio.js     ✅ (fetch)
    ├── carrinho.js     ✅ (pulso)
    └── checkout.js     ✅ (confetti)
```

## 🎯 Próximo Passo

Depois de salvar o README, podemos:

```text
| Opção | Descrição                                       |
| ----- | ----------------------------------------------- |
| 📝    | Criar o TESTES.md da v2-js6-css6                |
| 🚀    | Avançar para v2-js7-css7 (OOP/Design Patterns)  |
| 🧪    | Testar tudo e me reportar                       |
```

Me diga o que prefere! 🍔🌐🎉🚀
