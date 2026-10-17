# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js3)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js3** do site da **VH Burger**.

Nesta etapa, evoluímos do **js2** (arrays, filter, innerHTML) para o **módulo 3: Segurança e Persistência**, criando um cardápio que:

- Usa `createElement` em vez de `innerHTML` (mais seguro)
- Persiste o carrinho no `localStorage`
- Permite remover itens individualmente
- Marca produtos esgotados

## 🎯 Objetivo da v1+js3

Aplicar conceitos avançados de JavaScript:

- **DOM seguro** com `createElement` e `appendChild`
- **Manipulação de classes** com `classList`
- **Persistência** com `localStorage`
- **Serialização** com `JSON.stringify` e `JSON.parse`
- **Spread operator** para copiar objetos
- **`reduce()`** para somar valores
- **`splice()`** para remover itens

## 📁 Estrutura do Projeto

```text
v1+js3/
│
├── index.html          # Cardápio seguro + carrinho persistente
└── README.md           # Esta documentação
```

## 📄 Funcionalidades

| # | Funcionalidade | Conceitos JS |
|---|----------------|--------------|
| 1 | Saudação dinâmica | `Date`, `if/else` |
| 2 | Cardápio dinâmico | `createElement`, `appendChild` |
| 3 | Filtros + busca | `filter`, `includes` |
| 4 | Adicionar ao carrinho | `find`, `push`, spread `...` |
| 5 | Remover do carrinho | `findIndex`, `splice` |
| 6 | **Persistência** | `localStorage`, `JSON` |
| 7 | Produtos esgotados | `classList`, `disabled` |
| 8 | Total do carrinho | `reduce` |

## ✅ Checklist Técnico

### DOM Seguro

- [x] `document.createElement("div")`
- [x] `elemento.appendChild(filho)`
- [x] `elemento.textContent = "texto"`
- [x] `elemento.classList.add/remove/toggle`
- [x] `container.innerHTML = ""` (só para limpar)

### Persistência

- [x] `localStorage.setItem(chave, valor)`
- [x] `localStorage.getItem(chave)`
- [x] `JSON.stringify(carrinho)`
- [x] `JSON.parse(...)`
- [x] Fallback com `|| []` quando não há dados salvos

### Lógica Avançada

- [x] Spread operator `{ ...produto }`
- [x] `reduce()` para soma
- [x] `findIndex()` + `splice()` para remover
- [x] `confirm()` para confirmação

## 🧩 Detalhamento Técnico

### `createElement` vs `innerHTML`

**js2 (innerHTML):**
```javascript
html += `<h3>${produto.nome}</h3>`;
container.innerHTML = html;
```

**js3 (createElement):**

```javascript
const h3 = document.createElement("h3");
h3.textContent = produto.nome;
container.appendChild(h3);
```

**Por quê?** `textContent` trata tudo como texto puro — seguro contra XSS.

### Persistência com localStorage

```javascript
// Salvar (objeto → string)
function salvarCarrinho() {
    localStorage.setItem("vh-carrinho", JSON.stringify(carrinho));
}

// Recuperar (string → objeto)
let carrinho = JSON.parse(localStorage.getItem("vh-carrinho")) || [];
```

### Spread Operator

```javascript
carrinho.push({ ...produto, quantidade: 1 });
```

Cria um novo objeto copiando `produto` e adicionando `quantidade`.

### `reduce` para somar

```javascript
const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
);
```

## 🛠️ Tecnologias

- HTML5
- JavaScript ES6 (DOM, localStorage, arrays)
- Live Server
- DevTools (Application → Local Storage)

## 🚀 Como Executar

```bash
cd vh-burger/v1+js3
```

Abra `index.html` ou use Live Server.

## 🔍 Testes Realizados

- [x] Produtos renderizam via `createElement`
- [x] Produto esgotado aparece desabilitado
- [x] Adicionar item ao carrinho incrementa quantidade
- [x] Remover item decrementa ou remove
- [x] Total soma corretamente
- [x] **Carrinho persiste após F5**
- [x] Limpar carrinho zera tudo

## 📚 Aprendizados

- Diferença entre `innerHTML` (inseguro) e `createElement` (seguro)
- Como funciona a árvore do DOM (`appendChild`)
- `localStorage` para persistência no navegador
- Serialização com `JSON.stringify` / `JSON.parse`
- Spread operator `...` para copiar objetos
- `reduce()` para cálculos acumulados
- `splice()` para remover itens de arrays
- `confirm()` para ações destrutivas

## 🆚 Diferenças js2 → js3

| Recurso | js2 | js3 |
|---------|-----|-----|
| Renderização | `innerHTML` | `createElement` |
| Carrinho persistente | ❌ | ✅ |
| Remover item | ❌ | ✅ |
| Produto esgotado | ❌ | ✅ |
| Spread operator | ❌ | ✅ |
| `reduce` | ❌ | ✅ |
| `confirm` | ❌ | ✅ |

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
|--------|----------|:------:|
| js1 | Fundamentos | ✅ |
| js2 | Arrays, objetos, filter/find | ✅ |
| **js3** | **createElement, localStorage** | **✅** |
| js4 | Validação de formulário | ⏳ |
| js5 | Fetch/API (dados externos) | ⏳ |
| js6 | `async/await` | ⏳ |
| js7 | Módulos ES6 | ⏳ |

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** JavaScript — nível 3

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Dica:** Abra o DevTools (`F12`) → **Application** → **Local Storage** para ver os dados salvos!