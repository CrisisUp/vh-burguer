# 🧪 TESTES.md — Roteiro Completo de Testes da v4

![Status](https://img.shields.io/badge/status-em%20teste-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-v4-blue)
![Testes](https://img.shields.io/badge/testes-84-orange)

Este documento contém **todos os testes** que devem ser executados na **v4** do projeto VH Burger.

---

## 📋 Sumário

- [Antes de Começar](#-antes-de-começar--preparação)
- [Teste 1 — Navegação](#-teste-1--navegação-entre-páginas)
- [Teste 2 — Home](#-teste-2--página-home-indexhtml)
- [Teste 3 — Cardápio](#-teste-3--página-cardápio-cardapiohtml)
- [Teste 4 — Sobre](#-teste-4--página-sobre-sobrehtml)
- [Teste 5 — Contato](#-teste-5--página-contato-contatohtml)
- [Teste 6 — Acessibilidade](#-teste-6--acessibilidade-básico)
- [Teste 7 — Validação W3C](#-teste-7--validação-w3c)
- [Teste 8 — Meta Tags](#-teste-8--meta-tags-seo)
- [Planilha de Resultados](#-planilha-de-resultados)
- [Como Reportar Problemas](#-como-reportar-problemas)

---

## 📋 Antes de Começar — Preparação

### ✅ Passo 0 — Checklist Inicial

- [ ] Todos os arquivos estão na pasta `v4/`:
  - [ ] `index.html`
  - [ ] `cardapio.html`
  - [ ] `sobre.html`
  - [ ] `contato.html`
  - [ ] `README.md`
  - [ ] `TESTES.md` (este arquivo)
- [ ] Todos os arquivos foram **salvos** (sem `●` ao lado do nome no VS Code)
- [ ] A pasta `img/` existe (ou você sabe que as imagens não vão carregar)

### 🖥️ Ferramentas Recomendadas

| Ferramenta | Como usar |
| --------- | ---------- |
| **Live Server** | Clique com botão direito no `index.html` → *Open with Live Server* |
| **DevTools** | Pressione `F12` no navegador |
| **W3C Validator** | [validator.w3.org](https://validator.w3.org/) |
| **Open Graph Preview** | [opengraph.xyz](https://www.opengraph.xyz/) |

---

## 🧪 TESTE 1 — Navegação Entre Páginas

**Como testar:** Abra `index.html` no navegador e clique em cada link do menu.

| # | Ação | Resultado Esperado | Status |
| - | ---- | ------------------ | :----: |
| 1.1 | Clicar em "Home" | Vai para `index.html` | ⬜ |
| 1.2 | Clicar em "Cardápio" | Vai para `cardapio.html` | ⬜ |
| 1.3 | Clicar em "Sobre" | Vai para `sobre.html` | ⬜ |
| 1.4 | Clicar em "Contato" | Vai para `contato.html` | ⬜ |
| 1.5 | No rodapé, clicar em "Voltar para a página inicial" | Volta para `index.html` | ⬜ |
| 1.6 | Verificar se o menu está **igual** em todas as 4 páginas | Mesmo texto, mesma ordem | ⬜ |

> ⚠️ **Se algo falhar:** verifique se há **espaços extras** dentro do `href=""`.

---

## 🧪 TESTE 2 — Página Home (`index.html`)

**Como testar:** Abra `index.html`.

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 2.1 | Título da aba do navegador | "VH Burger - A Melhor Hamburgueria Artesanal" | ⬜ |
| 2.2 | `<h1>` "VH Burger" no topo | Texto grande e destacado | ⬜ |
| 2.3 | Imagem de destaque (ou placeholder quebrado) | Aparece ou mostra ícone de imagem quebrada | ⬜ |
| 2.4 | Legenda da imagem (`<figcaption>`) | Aparece texto pequeno abaixo da imagem | ⬜ |
| 2.5 | Texto com `<strong>` e `<em>` | "VH Burger" em negrito, "selecionada diariamente" em itálico | ⬜ |
| 2.6 | Horário de funcionamento | Aparece em bloco separado | ⬜ |
| 2.7 | 3 hambúrgueres listados | VH Clássico, VH Bacon, VH Veggie | ⬜ |
| 2.8 | Link "👉 Ver cardápio completo" | Vai para `cardapio.html` | ⬜ |
| 2.9 | 5 passos de "Como Pedir" | Lista numerada de 1 a 5 | ⬜ |
| 2.10 | Bloco `<address>` com endereço | Texto formatado em 3 linhas | ⬜ |
| 2.11 | Telefone e e-mail como links | Sublinhados e azuis (padrão) | ⬜ |

---

## 🧪 TESTE 3 — Página Cardápio (`cardapio.html`)

**Como testar:** Abra `cardapio.html`.

### 🍔 Tabelas

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 3.1 | Tabela "Hambúrgueres" aparece | 3 colunas: Produto, Descrição, Preço | ⬜ |
| 3.2 | Cabeçalhos em **negrito** | `<th>` aparece em negrito | ⬜ |
| 3.3 | 5 linhas de hambúrgueres | VH Clássico até VH Frango Crocante | ⬜ |
| 3.4 | `<tfoot>` com "Total de hambúrgueres: 5" | Aparece no fim da tabela | ⬜ |
| 3.5 | `colspan="2"` funciona | "Total" ocupa 2 colunas | ⬜ |
| 3.6 | Tabela "Acompanhamentos" | 5 linhas | ⬜ |
| 3.7 | Tabela "Bebidas" | 5 linhas | ⬜ |
| 3.8 | Tabela "Combos" | 3 linhas | ⬜ |

### 🖼️ Imagens

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 3.9 | Imagens dos hambúrgueres | Aparecem ou mostram ícone quebrado | ⬜ |
| 3.10 | Legendas das imagens | Texto abaixo de cada uma | ⬜ |

### ❓ FAQ

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 3.11 | Blocos de FAQ aparecem **fechados** | Só mostra a pergunta + seta ▶ | ⬜ |
| 3.12 | Clicar em uma pergunta | Bloco **expande** e mostra a resposta | ⬜ |
| 3.13 | Clicar de novo | Bloco **recolhe** | ⬜ |
| 3.14 | Clicar em várias | Todas ficam abertas independentes | ⬜ |

---

## 🧪 TESTE 4 — Página Sobre (`sobre.html`)

**Como testar:** Abra `sobre.html`.

### 📊 Meter e Progress

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 4.1 | Meter "Satisfação: 4.8/5" | Barra preenchida ~96% com cor verde | ⬜ |
| 4.2 | Meter "Avaliação Google: 4.6/5" | Barra preenchida ~92% | ⬜ |
| 4.3 | Progress "Meta: 850/1000" | Barra cheia 85% | ⬜ |
| 4.4 | Progress "Clientes fiéis: 92%" | Barra cheia 92% | ⬜ |
| 4.5 | Números ao lado das barras | "4.8/5", "850/1000 (85%)" etc. | ⬜ |

### 💬 Depoimentos

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 4.6 | 3 depoimentos aparecem | Blocos indentados (padrão de `<blockquote>`) | ⬜ |
| 4.7 | Autor em itálico | "Maria Silva", "Carlos Andrade", "Ana Costa" | ⬜ |
| 4.8 | `<mark>` destacado | Palavras com fundo amarelo | ⬜ |
| 4.9 | `<abbr>` com tooltip | Passar mouse em "VH" → mostra "Very Happy" | ⬜ |

### 📖 Conteúdo

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 4.10 | Seção "Nossa História" | 2 parágrafos | ⬜ |
| 4.11 | "Nossa Missão" com `<b>` | Palavras em negrito | ⬜ |
| 4.12 | "Nossos Valores" | Lista **numerada** (1-5) | ⬜ |
| 4.13 | "Nossos Diferenciais" | Lista com **marcadores** | ⬜ |
| 4.14 | Link "🍔 Conheça nosso cardápio" | Vai para `cardapio.html` | ⬜ |

---

## 🧪 TESTE 5 — Página Contato (`contato.html`)

**Como testar:** Abra `contato.html`.

### 📋 Estrutura do Formulário

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 5.1 | 3 `<fieldset>` visíveis | "Dados Pessoais", "Mensagem", "Preferências" | ⬜ |
| 5.2 | `<legend>` no topo de cada grupo | Texto em destaque | ⬜ |
| 5.3 | Campo "Nome" com `placeholder` | Texto "Ex: João da Silva" cinza | ⬜ |
| 5.4 | Campo "E-mail" | Tipo email | ⬜ |
| 5.5 | Campo "Telefone" | Tipo tel | ⬜ |
| 5.6 | Dropdown "Assunto" | Abre com opções | ⬜ |
| 5.7 | Área de texto "Mensagem" | Campo grande | ⬜ |
| 5.8 | Checkbox "Newsletter" | **Marcado por padrão** | ⬜ |
| 5.9 | 4 radios "Como nos conheceu" | Só **um** pode ficar marcado | ⬜ |

### ✅ Validação HTML5

| # | Teste | Resultado Esperado | Status |
| - | ----- | ------------------ | :----: |
| 5.10 | Clicar em Enviar com **tudo vazio** | Navegador bloqueia e mostra "Preencha este campo" no Nome | ⬜ |
| 5.11 | Preencher só o Nome e clicar em Enviar | Bloqueia no E-mail | ⬜ |
| 5.12 | Digitar "abc" no E-mail | Bloqueia com "Inclua um @..." | ⬜ |
| 5.13 | Digitar "Jo" no Nome | Bloqueia com "mínimo 3 caracteres" | ⬜ |
| 5.14 | Não selecionar Assunto | Bloqueia com "Selecione uma opção" | ⬜ |
| 5.15 | Digitar só "Oi" na Mensagem | Bloqueia com "mínimo 10 caracteres" | ⬜ |
| 5.16 | Preencher tudo corretamente | Formulário **envia** (recarrega a página com `action="#"`) | ⬜ |

### 🔄 Botões

| # | Teste | Resultado Esperado | Status |
| - | ----- | ------------------ | :----: |
| 5.17 | Clicar em "Limpar Formulário" | Todos os campos resetam | ⬜ |
| 5.18 | Clicar em "Enviar Mensagem" | Submete o formulário | ⬜ |

### 📍 Outros Elementos

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 5.19 | `<address>` com endereço | Texto em itálico/indentado | ⬜ |
| 5.20 | Telefone e e-mail clicáveis | Links azuis sublinhados | ⬜ |
| 5.21 | Horários com `<time>` | Aparecem corretamente | ⬜ |
| 5.22 | FAQ com `<details>` | 3 perguntas expansíveis | ⬜ |

### 📱 Links Especiais

| # | Teste | Resultado Esperado | Status |
| - | ----- | ------------------ | :----: |
| 5.23 | Clicar em "📞 (11) 99999-9999" (celular) | Abre o **discador** | ⬜ |
| 5.24 | Clicar em "📧 contato@..." | Abre o **cliente de e-mail** | ⬜ |

---

## 🧪 TESTE 6 — Acessibilidade (Básico)

**Como testar:** Use **Tab** para navegar e o DevTools.

| # | Teste | Resultado Esperado | Status |
| - | ----- | ------------------ | :----: |
| 6.1 | Pressionar `Tab` na Home | Foco vai passando pelos links em ordem | ⬜ |
| 6.2 | Pressionar `Tab` no Contato | Foco vai pelos campos na ordem correta | ⬜ |
| 6.3 | Clicar no texto "Nome" (label) | Cursor vai para o campo | ⬜ |
| 6.4 | Inspecionar `<nav>` (F12) | Tem `aria-label="Navegação principal"` | ⬜ |
| 6.5 | Inspecionar imagens (F12) | Todas têm `alt` descritivo | ⬜ |

---

## 🧪 TESTE 7 — Validação W3C

**Como testar:** Acesse [validator.w3.org](https://validator.w3.org/) e cole o código de cada página (ou use "Validate by File Upload").

| # | Página | Resultado Esperado | Status |
| - | ------ | ------------------ | :----: |
| 7.1 | `index.html` | 0 erros, 0 avisos (ou só warnings) | ⬜ |
| 7.2 | `cardapio.html` | 0 erros | ⬜ |
| 7.3 | `sobre.html` | 0 erros | ⬜ |
| 7.4 | `contato.html` | 0 erros | ⬜ |

> ⚠️ **Aviso sobre `border="1"`:** O W3C pode reclamar que `border` está **obsoleto** em HTML5. Isso é **esperado** — vamos remover quando fizermos o CSS.

---

## 🧪 TESTE 8 — Meta Tags (SEO)

**Como testar:** Abra o DevTools (`F12`) → aba **Elements** → veja o `<head>`.

| # | Verificar | Resultado Esperado | Status |
| - | --------- | ------------------ | :----: |
| 8.1 | `meta name="description"` | Presente em todas as 4 páginas | ⬜ |
| 8.2 | `meta property="og:title"` | Presente em todas | ⬜ |
| 8.3 | `meta property="og:image"` | Presente em todas | ⬜ |
| 8.4 | `meta name="twitter:card"` | Presente em todas | ⬜ |
| 8.5 | `meta charset="UTF-8"` | Presente em todas | ⬜ |
| 8.6 | `meta name="viewport"` | Presente em todas | ⬜ |

### Testar Preview OG (opcional)

1. Acesse [opengraph.xyz](https://www.opengraph.xyz/)
2. Cole `https://vhburger.com.br` (não vai funcionar porque não está publicado)
3. **Alternativa local:** Use a extensão **Open Graph Preview** no Chrome

---

## 📊 Planilha de Resultados

Vá preenchendo conforme testa:

| Área | Testes | ✅ Passou | ❌ Falhou | 🔧 Pendente |
| ---- | :----: | :-------: | :-------: | :---------: |
| Navegação | 6 | | | |
| Home | 11 | | | |
| Cardápio | 14 | | | |
| Sobre | 14 | | | |
| Contato | 24 | | | |
| Acessibilidade | 5 | | | |
| W3C | 4 | | | |
| Meta Tags | 6 | | | |
| **TOTAL** | **84** | | | |

### 📈 Progresso Geral

```text
[          ] 0%    ← Você está aqui
[          ] 25%
[===       ] 50%
[======    ] 75%
[==========] 100%
```

> 💡 **Dica:** Atualize esta barra manualmente conforme for testando.

---

## 🎯 Como Reportar Problemas

Se algum teste **falhar**, use este template:

```markdown
### ❌ Teste X.Y falhou

**O que aconteceu:**
(descrição do comportamento observado)

**O que eu esperava:**
(descrição do comportamento correto)

**Print/Evidência:**
(se possível, cole um print)

**Ambiente:**
- Navegador: Chrome / Firefox / Edge
- Sistema: Windows / macOS / Linux
```

### Exemplo Preenchido

```markdown
### ❌ Teste 5.11 falhou

**O que aconteceu:**
Ao clicar em Enviar sem preencher o e-mail, o navegador deixou passar (não bloqueou).

**O que eu esperava:**
Bloquear e mostrar mensagem de erro.

**Ambiente:**
- Navegador: Chrome 120
- Sistema: Windows 11
```

---

## 🚀 Depois dos Testes

Quando **tudo passar**, podemos:

| Opção | Descrição |
| ----- | --------- |
| 🎨 | **Partir para o CSS** (v5) |
| 🖼️ | **Criar/organizar as imagens** dos produtos |
| 📝 | **Finalizar o README** da v4 |
| 🌐 | **Publicar no GitHub Pages** |

---

## 💡 Dica Rápida — 3 Testes Prioritários

Se quiser testar **só o essencial agora**, comece por estes:

1. **Teste 1** — Navegação entre páginas (o mais importante)
2. **Teste 5.10** — Validação do formulário (o mais novo)
3. **Teste 3.11** — FAQ expandindo (o mais visual)

Se esses 3 passarem, o resto provavelmente também vai. 🎯

---

## 📅 Histórico de Testes

| Data | Testador | Total | ✅ | ❌ | Observações |
| ---- | -------- | :---: | :-: | :-: | --------- |
| | | | | | |
| | | | | | |

---

## 🔗 Referências

- [W3C HTML Validator](https://validator.w3.org/)
- [MDN Web Docs — HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Can I Use](https://caniuse.com/)
- [OpenGraph.xyz](https://www.opengraph.xyz/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

> 💡 **Última atualização:** 12/03/2026
> **Mantido por:** VH Burger Dev Team
