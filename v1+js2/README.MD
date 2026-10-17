# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js2)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js2** do site da **VH Burger**.

Nesta etapa, evoluímos o JavaScript do módulo 1 (básico) para o **módulo 2: Estruturas de Dados e Lógica**, criando um **cardápio dinâmico** com filtros, busca e carrinho simulado.

## 🎯 Objetivo da v1+js2

Aplicar conceitos intermediários de JavaScript, incluindo:

- **Arrays** e **objetos**
- **Array de objetos** (estrutura de dados realista)
- `forEach()`, `filter()`, `find()`
- Manipulação do DOM com `innerHTML`
- Template strings com múltiplas linhas
- Eventos em múltiplos elementos
- Gerenciamento de **estado** (filtro, busca, carrinho)

## 📁 Estrutura do Projeto

```text
v1+js2/
│
├── index.html          # Página com cardápio dinâmico
└── README.md           # Esta documentação
```

## 📄 Funcionalidades Implementadas

| # | Funcionalidade | Conceitos JS |
|---|----------------|--------------|
| 1 | **Saudação dinâmica** | `Date`, `if/else` |
| 2 | **Cardápio dinâmico** | Array, objeto, `forEach`, `innerHTML` |
| 3 | **Filtros por categoria** | `filter`, `dataset`, eventos |
| 4 | **Busca em tempo real** | `input`, `includes`, `filter` |
| 5 | **Adicionar ao carrinho** | `find`, `push`, estado |
| 6 | **Total do carrinho** | `forEach`, cálculo |
| 7 | **Limpar carrinho** | `carrinho = []` |

## ✅ Checklist Técnico

### Estruturas de Dados

- [x] Arrays (`const produtos = [...]`)
- [x] Objetos (`{ id, nome, preco, ... }`)
- [x] Array de objetos (cardápio completo)
- [x] Acesso a propriedades (`produto.nome`, `produto.preco`)

### Métodos de Array

- [x] `forEach()` — percorrer produtos
- [x] `filter()` — filtrar por categoria e busca
- [x] `find()` — buscar produto por ID
- [x] `push()` — adicionar ao carrinho
- [x] `includes()` — busca por substring

### Manipulação do DOM

- [x] `getElementById` — pegar elementos por ID
- [x] `querySelectorAll` — pegar múltiplos elementos
- [x] `innerHTML` — inserir HTML dinamicamente
- [x] `textContent` — atualizar textos
- [x] `dataset` — ler atributos `data-*`

### Eventos

- [x] `addEventListener("click", ...)` em botões
- [x] `addEventListener("input", ...)` na busca
- [x] `forEach` em `querySelectorAll` para múltiplos botões

### Estado

- [x] `categoriaAtual` — filtro ativo
- [x] `termoBusca` — texto da busca
- [x] `carrinho` — array de itens adicionados

## 🧩 Detalhamento Técnico

### Array de Objetos

```javascript
const produtos = [
    { id: 1, nome: "VH Clássico", preco: 28.00, categoria: "hamburguer" },
    { id: 2, nome: "VH Bacon", preco: 32.00, categoria: "hamburguer" },
    // ...
];
```

### Filtrar por Categoria

```javascript
let listaFiltrada = produtos.filter(function (produto) {
    return produto.categoria === categoriaAtual;
});
```

### Busca por Nome

```javascript
listaFiltrada = listaFiltrada.filter(function (produto) {
    return produto.nome.toLowerCase().includes(termoBusca.toLowerCase());
});
```

### Renderizar com `innerHTML`

```javascript
let html = "";
listaFiltrada.forEach(function (produto) {
    html += `<div class="produto">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco}</p>
             </div>`;
});
container.innerHTML = html;
```

### Adicionar ao Carrinho

```javascript
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura
- **JavaScript ES6** — Lógica e interatividade
- **Live Server** — Testes
- **DevTools** — Depuração

## 🚀 Como Executar

```bash
cd vh-burger/v1+js2
```

Abra `index.html` ou use Live Server.

## 🔍 Testes Realizados

- [x] Filtros por categoria funcionam
- [x] Busca em tempo real funciona
- [x] Adicionar ao carrinho incrementa o contador
- [x] Total soma corretamente
- [x] Limpar carrinho reseta tudo
- [x] Mensagem quando nenhum produto é encontrado

## 📚 Aprendizados

- Diferença entre array e objeto
- Uso de `forEach`, `filter` e `find`
- Como renderizar listas dinâmicas com `innerHTML`
- Gerenciamento de estado (filtro, busca, carrinho)
- Eventos em múltiplos elementos
- `dataset` para ler atributos `data-*`

## 🆚 Diferenças entre js1 e js2

| Recurso | js1 | js2 |
|---------|-----|-----|
| Variáveis/funções | ✅ | ✅ |
| `if/else` | ✅ | ✅ |
| `alert`/`prompt` | ✅ | ❌ (menos) |
| Arrays | ❌ | ✅ |
| Objetos | ❌ | ✅ |
| `forEach`/`filter`/`find` | ❌ | ✅ |
| `innerHTML` | ❌ | ✅ |
| Estado gerenciado | ❌ | ✅ |
| Cardápio dinâmico | ❌ | ✅ |
| Carrinho simulado | ❌ | ✅ |

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
|--------|----------|:------:|
| js1 | Fundamentos | ✅ |
| **js2** | **Arrays, objetos, filter/find** | **✅** |
| js3 | `createElement` (DOM seguro) | ⏳ |
| js4 | `localStorage` (persistência) | ⏳ |
| js5 | Validação de formulário | ⏳ |
| js6 | Fetch/API (dados externos) | ⏳ |
| js7 | Módulos ES6 | ⏳ |

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** JavaScript — nível 2

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Dica:** Abra o Console (`F12`) para ver logs e detectar possíveis erros!