# 🍔 VH Burger - Projeto de Linguagem de Marcação (v4)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a **versão 4** do site da **VH Burger**, uma hamburgueria artesanal fictícia.
Nesta etapa, adicionamos:

- **Formulário de contato completo**
- **Tabelas de preços** no cardápio
- **FAQ interativo** com `<details>`
- **Semântica extra** (`<address>`, `<time>`, `<meta description>`)
- **Acessibilidade** (`aria-label`, `<label>`)

## 🎯 Objetivo da v4

Aprofundar o uso do HTML5 puro (sem CSS), aplicando formulários, tabelas,
elementos semânticos extras e boas práticas de acessibilidade.

## 📁 Estrutura do Projeto

```text
v4/
│
├── index.html          # Home
├── cardapio.html       # Cardápio com tabelas
├── sobre.html          # Sobre a hamburgueria
├── contato.html        # Contato com formulário
└── README.md           # Documentação
```

## 📄 Páginas do Site

| Página | Arquivo | Descrição |
| ------ | ------- | --------- |
| 🏠 Home | `index.html` | Apresentação, destaques e como pedir |
| 🍔 Cardápio | `cardapio.html` | Tabelas com produtos, preços e FAQ |
| 👤 Sobre | `sobre.html` | História, missão, valores e equipe |
| 📞 Contato | `contato.html` | Formulário + canais de contato |

## ✅ Checklist Completo

### Semântica HTML5

- [x] `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

### Formulário (novo)

- [x] `<form>` com `action` e `method`
- [x] `<fieldset>` + `<legend>` (3 grupos)
- [x] `<label>` em todos os campos
- [x] `input` (text, email, tel, checkbox, radio)
- [x] `<select>` + `<option>`
- [x] `<textarea>`
- [x] `<button type="submit">` + `<button type="reset">`
- [x] Validação: `required`, `minlength`, `maxlength`, `pattern`

### Tabelas (novo)

- [x] `<table>` semântica
- [x] `<thead>`, `<tbody>`, `<tfoot>`
- [x] `<tr>`, `<th>`, `<td>`
- [x] `colspan` no rodapé
- [x] 4 tabelas (hambúrgueres, acompanhamentos, bebidas, combos)

### Elementos Semânticos Extras (novo)

- [x] `<address>` para endereço
- [x] `<time>` para horários
- [x] `<details>` + `<summary>` para FAQ
- [x] `<meta name="description">` para SEO

### Acessibilidade (novo)

- [x] `aria-label` no `<nav>`
- [x] `<label>` vinculado por `for` + `id`
- [x] `placeholder` em campos de texto

## 🧩 Tabelas do Cardápio

| Tabela | Produtos | Colunas |
| ------ | :------: | ------- |
| Hambúrgueres | 5 | Produto, Descrição, Preço |
| Acompanhamentos | 5 | Produto, Descrição, Preço |
| Bebidas | 5 | Produto, Descrição, Preço |
| Combos | 3 | Combo, O que vem, Preço |

## 📋 Formulário — Campos

| Campo | Tipo | Obrigatório | Validação |
| ----- | ---- | :---------: | --------- |
| Nome | text | ✅ | minlength 3 |
| E-mail | email | ✅ | Formato válido |
| Telefone | tel | ❌ | pattern |
| Assunto | select | ✅ | Uma opção |
| Mensagem | textarea | ✅ | minlength 10 |
| Newsletter | checkbox | ❌ | — |
| Origem | radio | ❌ | Escolha única |

## 🛠️ Tecnologias

- HTML5
- Visual Studio Code
- Prettier
- Live Server

## 🚀 Como Executar

```bash
git clone https://github.com/seu-usuario/vh-burger.git
cd vh-burger/v4
```

Abra `index.html` ou use Live Server.

## 🔍 Testes Realizados

- [x] Validação do formulário
- [x] Tabelas renderizando corretamente
- [x] FAQ expandindo/recolhendo
- [x] Navegação entre páginas
- [x] Links `tel:` e `mailto:`

## 📚 Aprendizados

- Criar tabelas semânticas com `<thead>`, `<tbody>`, `<tfoot>`
- Usar `colspan` para mesclar células
- Agrupar campos com `<fieldset>` e `<legend>`
- Adicionar FAQ com `<details>` e `<summary>`
- Aplicar `<address>` e `<time>` para semântica

## 🆚 Diferenças entre v3 e v4

| Recurso | v3 | v4 |
| ------- | -- | -- |
| Formulário | ❌ | ✅ |
| Tabelas | ❌ | ✅ |
| FAQ (`<details>`) | ❌ | ✅ |
| `<address>` | ❌ | ✅ |
| `<time>` | ❌ | ✅ |
| `aria-label` | ❌ | ✅ |

## 🆕 Recursos Avançados (v4 expandida)

### 🖼️ Imagens Semânticas

- [x] `<figure>` + `<figcaption>` em imagens de destaque
- [x] `alt` descritivo em todas as imagens
- [x] `width` e `height` para evitar "pulo" no layout

### 💬 Depoimentos

- [x] `<blockquote>` com `<cite>` para citações
- [x] `<mark>` para destacar palavras-chave
- [x] `<abbr>` para abreviações

### 📊 Indicadores Visuais

- [x] `<meter>` para satisfação (4.8/5)
- [x] `<progress>` para meta de pedidos (85%)
- [x] `low`, `high`, `optimum` no `<meter>`

### 🏷️ SEO — Open Graph

- [x] `og:type`, `og:title`, `og:description`, `og:image`
- [x] `og:url`, `og:site_name`, `og:locale`
- [x] Twitter Card (`twitter:card`, `twitter:title`, etc.)

## 🎯 Preview do Compartilhamento

Quando o link é compartilhado no WhatsApp ou redes sociais, aparece:

| Elemento | Valor |
| -------- | ----- |
| Título | VH Burger - A Melhor Hamburgueria Artesanal |
| Descrição | Ingredientes frescos, sabor inesquecível |
| Imagem | og-image.jpg (1200x630) |
| URL | vhburger.com.br |

## 🧩 Novas Tags Aplicadas

| Tag | Onde | Função |
| --- | ---- | ------ |
| `<figure>` | index, cardapio | Agrupar imagem + legenda |
| `<figcaption>` | index, cardapio | Legenda da imagem |
| `<blockquote>` | sobre | Depoimentos |
| `<cite>` | sobre | Autor do depoimento |
| `<mark>` | sobre | Destacar texto |
| `<abbr>` | sobre | Abreviação (VH) |
| `<meter>` | sobre | Satisfação |
| `<progress>` | sobre | Meta de pedidos |
| `<meta property="og:*">` | todas | SEO social |

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Próximo passo:** v5 com **imagens** (`<figure>`) e depois **CSS**.
