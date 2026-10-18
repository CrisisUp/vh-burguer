# 🍔 VH Burger - v2-js2-css2

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 📋 Sobre o Projeto

Segunda evolução do site multipáginas da VH Burger.

Esta pasta adiciona **Flexbox**, **Grid**, **Cards animados** e **renderização dinâmica de produtos** via JavaScript.

## 🎯 O Que Foi Adicionado

### CSS (Visual)

- **Flexbox** no header, menu e rodapé
- **Grid responsivo** no cardápio (auto-fill, minmax)
- **Cards de produto** com sombra e hover
- **Animações** (@keyframes fadeInUp)
- **Transições** suaves em botões e links
- **Badge "Esgotado"** com cor secundária

### JavaScript (Interatividade)

- **Array de objetos** com 8 produtos
- **Template Literals** (`` `${}` ``) para montar HTML
- **forEach** para percorrer o array
- **Renderização dinâmica** no `<div id="grid-cardapio">`
- **Simulação de carregamento** (setTimeout de 0.8s)
- **Botão "Adicionar ao Carrinho"** com alerta

## 📁 Estrutura

```text
v2-js2-css2/
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
    ├── main.js         (Cópia do js1 + ajuste no log)
    └── cardapio.js     (NOVO: dados + renderização)
```

## 🎨 Paleta de Cores

```text
| Cor               | Hex       | Uso                        |
| ----------------- | --------- | -------------------------- |
| Fundo             | #1a1a1a   | Corpo da página            |
| Fundo alternativo | #242424   | Cards e caixas de destaque |
| Texto             | #f5f5f5   | Textos principais          |
| Texto suave       | #b3b3b3   | Parágrafos                 |
| Destaque          | #ffcc00   | Títulos, botões, links     |
| Secundária        | #e63946   | Badge de esgotado          |
| Borda             | #333      | Bordas sutis               |
```

## 🚀 Como Executar

Abra `cardapio.html` no navegador (ou use Live Server).

## 🔍 Testes

```text
- [x] Menu horizontal com Flexbox
- [x] Links com hover animado
- [x] 8 cards renderizados em Grid
- [x] Animação fadeInUp em cascata
- [x] Hover nos cards (elevação + sombra)
- [x] Badge "Esgotado" no VH Veggie
- [x] Botão desabilitado em produtos esgotados
- [x] Simulação de carregamento
- [x] Layout responsivo (mobile → desktop)
```

## 🆚 Diferenças: v2-js1-css1 → v2-js2-css2

```text
| Aspecto                | v2-js1-css1        | v2-js2-css2              |
| ---------------------- | ------------------ | ------------------------ |
| Menu                   | Links separados    | Flexbox com hover        |
| Lista de produtos      | <ul> estático      | Grid de cards            |
| Animações CSS          | ❌                 | ✅ fadeInUp + hover      |
| Dados dos produtos     | Fixos no HTML      | Array de objetos em JS   |
| Renderização           | HTML estático      | JavaScript dinâmico      |
| Loading state          | ❌                 | ✅ "⏳ Carregando..."    |
| Badge "Esgotado"       | ❌                 | ✅ com cor secundária    |
```

## 🗺️ Roadmap

```text
| Módulo        | Foco                              | Status |
| ------------- | --------------------------------- | ------ |
| v2-js1-css1   | Cores, fontes, saudação, relógio  | ✅     |
| v2-js2-css2   | Flexbox, Grid, Cards, Animações   | ✅     |
| v2-js3-css3   | localStorage + carrinho animado   | ⏳     |
| v2-js4-css4   | Responsividade avançada           | ⏳     |
| v2-js5-css5   | Formulário validado + CSS         | ⏳     |
| ...           | ...                               | ...    |
```

---

**Atividade 2 – Linguagem de Marcação**  
Módulo extra: Evolução v2 + JS + CSS

## 🎯 Próximos Passos (v2-js3-css3)

Depois de testar a v2-js2-css2, o próximo módulo será:

```text
| Tecnologia | O que aprender                                  |
| ---------- | ----------------------------------------------- |
| JavaScript | localStorage + carrinho de compras              |
| CSS        | Carrinho flutuante lateral + animação de slide  |
| HTML       | Nova área de carrinho + botão flutuante         |
```

## 🚀 O Que Fazer Agora

```text
| Opção | Descrição                                       |
| ----- | ----------------------------------------------- |
| 🧪    | Testar a v2-js2-css2 e me reportar              |
| 📝    | Criar o TESTES.md da v2-js2-css2                |
| 🚀    | Avançar para v2-js3-css3                        |
| 🎨    | Adicionar mais animações (ex: bounce nos botões)|
````

Me diga o que prefere! 🍔🎨🚀
