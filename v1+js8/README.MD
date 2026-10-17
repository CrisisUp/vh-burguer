# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js8)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js8**. Ela introduz a **Orientação a Objetos (OOP)** no projeto.

Substituímos a lógica de funções soltas do módulo anterior por **Classes**. Agora, temos "moldes" (`Produto`, `Carrinho`) que geram objetos que sabem se gerenciar sozinhos.

## 🎯 Objetivo da v1+js8

Aplicar os conceitos de OOP:

- Criação de classes (`class`)
- Inicialização com `constructor()`
- Encapsulamento com campos privados (`#`)
- Getters para propriedades calculadas
- Delegação de responsabilidades

## 📁 Estrutura do Projeto

```text
v1+js8/
│
├── index.html
├── produtos.json
│
├── js/
│   ├── main.js
│   ├── api.js
│   ├── ui.js
│   ├── checkout.js
│   │
│   └── models/                 ← NOVO
│       ├── Produto.js          # Molde de um produto
│       └── Carrinho.js         # Molde do carrinho
│
└── README.md
```

## 🧩 Detalhamento Técnico

### A Classe `Produto`

```javascript
export class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    get precoFormatado() {
        return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
    }
}
```

### A Classe `Carrinho` (Encapsulamento)

```javascript
export class Carrinho {
    #itens = []; // Privado!

    get quantidadeTotal() {
        return this.#itens.reduce((acc, item) => acc + item.quantidade, 0);
    }

    adicionar(produto) {
        // lógica interna
    }
}
```

## 🆚 Evolução: js7 → js8

| Recurso | js7 | js8 |
| ------- | --- | --- |
| Estado do carrinho | Variável solta no módulo | Objeto `new Carrinho()` |
| Lógica de cálculo | Funções espalhadas | Métodos da classe |
| Proteção de dados | Baixa | Alta (`#itens` privado) |
| Formatação de preço | Função solta | Getter `produto.precoFormatado` |

## 🚀 Como Executar

Obrigatório usar Live Server (ES6 Modules).

```bash
cd vh-burger/v1+js8
```

Clique com o botão direito em `index.html` → "Open with Live Server".

## 🔍 Testes Realizados

- [x] As classes instanciam corretamente.
- [x] O carrinho calcula total e quantidade via getters.
- [x] O array `#itens` não vaza para o escopo global.
- [x] A persistência (`localStorage`) está encapsulada na classe.

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
| ------ | -------- | :----: |
| js1 ~ js7 | Fundamentos, DOM, APIs, Módulos | ✅ |
| **js8** | **Classes e OOP** | **✅** |
| js9 | Prototypes e Herança | ⏳ |
| js10 | Design Patterns (Singleton, Observer) | ⏳ |

---
**Atividade 2 – Linguagem de Marcação**
Módulo extra: JavaScript — nível 8 (Orientação a Objetos)
