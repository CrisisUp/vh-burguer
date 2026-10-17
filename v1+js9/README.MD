# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js9)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js9**. Ela introduz o conceito de **Herança e Polimorfismo**.

No js8, todos os produtos usavam a mesma classe. No js9, temos uma classe base (`Produto`) e classes filhas (`Hamburguer`, `Bebida`), cada uma com seu próprio comportamento.

## 🎯 Objetivo da v1+js9

- Aplicar Herança com `extends` e `super()`.
- Entender o que é uma Classe Abstrata.
- Sobrescrever métodos (Override).
- Ver o Polimorfismo em ação.
- Usar `instanceof` para identificar tipos.

## 📁 Estrutura do Projeto

```text
v1+js9/
│
├── index.html
├── produtos.json           # Agora tem o campo "tipo"
│
├── js/
│   ├── main.js
│   ├── api.js              # Instancia classes específicas
│   ├── ui.js
│   ├── checkout.js
│   │
│   └── models/
│       ├── Produto.js      # Classe Abstrata
│       ├── Hamburguer.js   # Herda de Produto
│       ├── Bebida.js       # Herda de Produto
│       └── Carrinho.js
│
└── README.md
```

## 🧩 Detalhamento Técnico

### Herança

```javascript
export class Hamburguer extends Produto {
    constructor(id, nome, preco, esgotado, pontoCarne) {
        super(id, nome, preco, "hamburguer", esgotado); // Chama o pai
        this.pontoCarne = pontoCarne;
    }
}
```

### Polimorfismo

```javascript
// No UI, chamamos o mesmo método:
produto.preparar();

// Se for Hamburguer: "🍔 Grelhando..."
// Se for Bebida: "🧊 Pegando na geladeira..."
```

## 🆚 Evolução: js8 → js9

| Recurso | js8 | js9 |
| ------- | --- | --- |
| Classes | `Produto`, `Carrinho` | + `Hamburguer`, `Bebida` |
| Herança | ❌ | ✅ `extends` |
| Polimorfismo | ❌ | ✅ `preparar()` muda |
| Classe Abstrata | ❌ | ✅ `Produto` |
| `instanceof` | ❌ | ✅ |

## 🚀 Como Executar

Obrigatório usar Live Server (ES6 Modules).

## 🔍 Testes Realizados

- [x] O console loga corretamente os tipos (`instanceof`).
- [x] Cada produto exibe sua própria mensagem de `preparar()`.
- [x] Carrinho continua funcionando normalmente.

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
| ------ | -------- | :----: |
| js1 ~ js7 | Fundamentos, DOM, APIs, Módulos | ✅ |
| js8 | Classes e OOP | ✅ |
| **js9** | **Herança e Polimorfismo** | **✅** |
| js10 | Design Patterns | ⏳ |

---
**Atividade 2 – Linguagem de Marcação**
Módulo extra: JavaScript — nível 9 (Herança)
