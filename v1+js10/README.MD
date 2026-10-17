# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js10)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js10**. Ela introduz **Design Patterns (Padrões de Projeto)**, elevando o código a um nível de arquitetura profissional.

## 🎯 Objetivo da v1+js10

- **Singleton:** Garantir que exista apenas uma instância do carrinho.
- **Strategy:** Isolar a lógica de pagamento em classes independentes.
- **Factory:** Centralizar a criação das estratégias de pagamento.

## 🧩 Detalhamento Técnico

### Singleton (Carrinho Único)

```javascript
export class Carrinho {
    static #instancia = null;

    constructor() {
        if (Carrinho.#instancia) return Carrinho.#instancia;
        Carrinho.#instancia = this;
        // ...
    }
}
```

### Strategy (Formas de Pagamento)

```javascript
class PagamentoPix {
    processar(valor) { return `QR Code gerado: ${valor}`; }
}

class PagamentoCartao {
    processar(valor) { return `Cartão processado: ${valor}`; }
}

// Uso:
const pagamento = new PagamentoPix();
pagamento.processar(100);
```

### Factory (Fábrica de Pagamentos)

```javascript
function criarPagamento(tipo) {
    switch(tipo) {
        case "pix": return new PagamentoPix();
        case "cartao": return new PagamentoCartao();
        // ...
    }
}
```

## 🆚 Evolução: js9 → js10

| Recurso | js9 | js10 |
|---------|-----|------|
| Carrinho único | ❌ | ✅ Singleton |
| Formas de pagamento | `if/else` | ✅ Strategy |
| Criação de pagamento | Direta | ✅ Factory |
| Extensibilidade | Baixa | Alta |

## 🚀 Como Executar

Obrigatório usar Live Server (ES6 Modules).

## 🔍 Testes Realizados

- [x] `new Carrinho() === new Carrinho()` retorna `true`.
- [x] Cada forma de pagamento gera uma mensagem diferente.
- [x] O console mostra o pedido final com `statusPagamento`.
- [x] O carrinho continua persistindo no `localStorage`.

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
|--------|----------|:------:|
| js1 ~ js9 | Fundamentos até Herança | ✅ |
| **js10** | **Design Patterns (Singleton, Strategy)** | **✅** |
| js11 | Testes unitários (Jest) | ⏳ |
| js12 | TypeScript | ⏳ |

---
**Atividade 2 – Linguagem de Marcação**
Módulo extra: JavaScript — nível 10 (Design Patterns)
