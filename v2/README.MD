# 🍔 VH Burger - Projeto de Linguagem de Marcação (v2)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Este repositório contém a **versão 2** do site da **VH Burger**, uma hamburgueria artesanal fictícia.
Nesta etapa, o projeto foi **refatorado de página única para site multipáginas**, com navegação entre diferentes seções do site.

O desenvolvimento faz parte da **Atividade 2 – Linguagem de Marcação (SA 1 – Desafio 2)**, com o objetivo de aplicar os principais elementos da linguagem HTML para estruturação de conteúdo.

## 🎯 Objetivo da Atividade

Aplicar os principais elementos da linguagem **HTML** para estruturação de conteúdo, utilizando:

- Títulos
- Parágrafos
- Formatação de texto
- Listas
- Links
- **Navegação entre múltiplas páginas**

## 📁 Estrutura do Projeto

```text
v2/
│
├── index.html          # Página inicial (Home)
├── cardapio.html       # Página do cardápio completo
├── sobre.html          # Página sobre a hamburgueria
├── contato.html        # Página de contato
└── README.md           # Documentação do projeto
```

## 📄 Páginas do Site

| Página | Arquivo | Descrição |
| ------ | ------- | --------- |
| 🏠 Home | `index.html` | Apresentação, destaques e como pedir |
| 🍔 Cardápio | `cardapio.html` | Lista completa de produtos e preços |
| 👤 Sobre | `sobre.html` | História, missão, valores e equipe |
| 📞 Contato | `contato.html` | Endereço, telefone, e-mail e horários |

## 🔗 Navegação

Todas as páginas compartilham o **mesmo menu de navegação** no topo:

```text
Home | Cardápio | Sobre | Contato
```

E o **mesmo rodapé** com link de retorno à página inicial.

## ✅ Checklist da Atividade

### 1. Título Principal (`<h1>`)

- [x] Utilizado para o nome da hamburgueria **"VH Burger"** em todas as páginas.

### 2. Parágrafo Introdutório (`<p>`)

- [x] Texto de boas-vindas apresentando a hamburgueria.

### 3. Formatação de Texto

- [x] `<strong>` — destaque com importância semântica.
- [x] `<em>` — ênfase no texto.
- [x] `<b>` — destaque visual em negrito.
- [x] `<i>` — destaque visual em itálico.
- [x] `<small>` — texto pequeno (aplicado em descrições e rodapé).

### 4. Lista Não Ordenada (`<ul>`)

- [x] Utilizada para listar os itens do cardápio:
  - [x] Hambúrgueres
  - [x] Acompanhamentos
  - [x] Bebidas

### 5. Lista Ordenada (`<ol>`)

- [x] Utilizada para mostrar:
  - [x] Passo a passo de "Como Fazer seu Pedido"
  - [x] Valores da empresa (em `sobre.html`)
  - [x] Combos promocionais (em `cardapio.html`)

### 6. Links (`<a>`)

- [x] Links de navegação no topo (Home, Cardápio, Sobre, Contato).
- [x] Links internos entre as páginas.
- [x] Links de telefone (`tel:`) e e-mail (`mailto:`).
- [x] Link no final para voltar à página inicial.

### 7. Quebra de Linha e Linha Horizontal (`<br>` e `<hr>`)

- [x] `<br>` usado para formatar endereço, horário e descrições.
- [x] `<hr>` usado para separar seções e o cabeçalho/rodapé.

### 8. Estrutura Básica do HTML

- [x] `<!DOCTYPE html>`
- [x] `<html lang="pt-br">`
- [x] `<head>` com `<meta charset>` e `<meta viewport>`
- [x] `<title>` específico por página
- [x] `<body>`

### 9. Hierarquia de Títulos

- [x] `<h2>` e `<h3>` utilizados para subtítulos e seções.

### 10. Comentários e Indentação

- [x] Código indentado corretamente.
- [x] Comentários explicando cada seção do código.

### 11. Navegação Multipáginas (Novo na v2)

- [x] 4 páginas HTML independentes.
- [x] Menu de navegação padrão em todas.
- [x] Links funcionando entre as páginas.
- [x] Rodapé padronizado em todas.

## 🧩 Estrutura das Páginas

### `index.html` — Home

| Seção | Descrição | Tags Utilizadas |
| ----- | --------- | --------------- |
| Cabeçalho | Título principal e navegação | `<h1>`, `<nav>`, `<a>`, `<hr>` |
| Apresentação | Boas-vindas à hamburgueria | `<h2>`, `<p>`, `<strong>`, `<em>`, `<br>` |
| Destaques | Itens em destaque do cardápio | `<h2>`, `<h3>`, `<ul>`, `<li>`, `<b>`, `<i>` |
| Como Pedir | Passo a passo do pedido | `<h2>`, `<ol>`, `<li>` |
| Contato | Informações resumidas | `<h2>`, `<p>`, `<br>`, `<a>` |
| Rodapé | Direitos autorais | `<footer>`, `<small>` |

### `cardapio.html` — Cardápio

| Seção | Descrição | Tags Utilizadas |
| ----- | --------- | --------------- |
| Apresentação | Introdução ao cardápio | `<h2>`, `<p>`, `<strong>`, `<em>` |
| Hambúrgueres | Lista com descrições | `<h3>`, `<ul>`, `<li>`, `<small>`, `<br>` |
| Acompanhamentos | Lista simples | `<h3>`, `<ul>`, `<li>`, `<strong>` |
| Bebidas | Lista simples | `<h3>`, `<ul>`, `<li>`, `<strong>` |
| Combos | Lista ordenada de promoções | `<h3>`, `<ol>`, `<li>`, `<small>` |
| Como Pedir | Passo a passo | `<h3>`, `<ol>`, `<li>` |

### `sobre.html` — Sobre

| Seção | Descrição | Tags Utilizadas |
| ----- | --------- | --------------- |
| Apresentação | Introdução à hamburgueria | `<h2>`, `<p>`, `<strong>`, `<em>` |
| História | Origem da VH Burger | `<h3>`, `<p>`, `<strong>` |
| Missão | Objetivo da empresa | `<h3>`, `<p>`, `<b>` |
| Valores | Lista ordenada | `<h3>`, `<ol>`, `<li>` |
| Diferenciais | Lista não ordenada | `<h3>`, `<ul>`, `<li>`, `<strong>` |
| Equipe | Apresentação do time | `<h3>`, `<p>`, `<em>` |

### `contato.html` — Contato

| Seção | Descrição | Tags Utilizadas |
| ----- | --------- | --------------- |
| Apresentação | Boas-vindas ao contato | `<h2>`, `<p>`, `<em>` |
| Endereço | Localização física | `<h3>`, `<p>`, `<br>` |
| Telefone | Link clicável | `<h3>`, `<a href="tel:...">` |
| E-mail | Link clicável | `<h3>`, `<a href="mailto:...">` |
| Horário | Funcionamento | `<h3>`, `<ul>`, `<li>`, `<strong>`, `<em>` |
| Redes Sociais | Links externos | `<h3>`, `<ul>`, `<li>`, `<a>` |
| Como Chegar | Informações extras | `<h3>`, `<p>`, `<br>`, `<strong>` |

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estruturação do conteúdo.
- **Visual Studio Code** — Editor de código.
- **Prettier** — Formatação automática.
- **Live Server** — Testes locais.
- **Figma** — Referência do wireframe.
- **Navegador Web** — Testes (Chrome, Edge, Firefox).

## 🚀 Como Executar o Projeto

### 1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/vh-burger.git
```

### 2. **Acesse a pasta v2:**

```bash
cd vh-burger/v2
```

### 3. **Abra o arquivo `index.html` no navegador:**

- Clique duas vezes no arquivo, ou
- Use a extensão **Live Server** do VS Code.

## 🔍 Testes Realizados

- [x] Os títulos aparecem corretamente.
- [x] As listas estão organizadas.
- [x] Os links entre páginas funcionam.
- [x] A navegação está consistente em todas as páginas.
- [x] O rodapé aparece em todas as páginas.
- [x] O conteúdo está estruturado de forma clara.

## 📚 Aprendizados

Durante o desenvolvimento desta versão, foram aplicados:

- Estrutura básica de uma página web.
- Uso correto de tags de texto e formatação.
- Organização de conteúdo em listas.
- **Criação de navegação multipáginas.**
- **Padronização de cabeçalho e rodapé.**
- Boas práticas de indentação e comentários.

## 🆚 Diferenças entre v1 e v2

| Aspecto | v1 | v2 |
| ------- | -- | -- |
| **Estrutura** | Página única (`index.html`) | 4 páginas HTML |
| **Navegação** | Âncoras internas (`#secao`) | Links entre arquivos (`.html`) |
| **Cardápio** | Resumido na Home | Página dedicada completa |
| **Sobre** | Não existia | Página dedicada |
| **Contato** | Seção na Home | Página dedicada |
| **Complexidade** | Básica | Intermediária |

## 👨‍💻 Autor

Desenvolvido como parte da **Atividade 2 – Linguagem de Marcação**  
**SA 1 – Desafio 2: Dando vida ao conteúdo com HTML**

## 📄 Licença

Este projeto é de uso educacional e está sob a licença MIT.

---

> 💡 **Próximo passo:** Refatorar para **v3** aplicando semântica HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`).
