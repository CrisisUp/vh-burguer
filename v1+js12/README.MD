# 🍔 VH Burger - TypeScript (v1 + js12)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Jest](https://img.shields.io/badge/Jest-29-red)
![Tests](https://img.shields.io/badge/tests-24%20passing-success)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Warnings](https://img.shields.io/badge/warnings-0-brightgreen)
![Types](https://img.shields.io/badge/types-0%20errors-brightgreen)

## 🏆 Resultado Final

| Métrica | Resultado |
|---------|:---------:|
| Testes | **24/24 ✅** |
| Cobertura Statements | **100%** |
| Cobertura Branches | **100%** |
| Cobertura Functions | **100%** |
| Cobertura Lines | **100%** |
| Erros de Tipo | **0** |
| Warnings | **0** |
| Tempo de Execução | 0.3s ⚡ |

## 📋 Sobre o Projeto

Esta é a versão **v1 + js12**. Representa a **evolução completa** do projeto, desde o HTML básico até uma aplicação TypeScript profissional com **100% de cobertura de testes**.

## 📁 Estrutura

```text
v1+js12/
│
├── package.json
├── tsconfig.json
├── tsconfig.test.json
├── jest.config.js
│
├── src/
│   └── models/
│       ├── Produto.ts        (abstract)
│       ├── Hamburguer.ts
│       ├── Bebida.ts
│       ├── Carrinho.ts       (Singleton)
│       └── Pagamento.ts      (Strategy)
│
└── tests/
    ├── Carrinho.test.ts      (10 testes)
    ├── Produto.test.ts       (7 testes)
    └── Pagamento.test.ts     (7 testes)
```

## 📊 Cobertura de Testes

| Arquivo | % Stmts | % Branch | % Funcs | % Lines |
|---------|:-------:|:--------:|:-------:|:-------:|
| Bebida.ts | 100 | 100 | 100 | 100 |
| Carrinho.ts | 100 | 100 | 100 | 100 |
| Hamburguer.ts | 100 | 100 | 100 | 100 |
| Pagamento.ts | 100 | 100 | 100 | 100 |
| Produto.ts | 100 | 100 | 100 | 100 |
| **TOTAL** | **100** | **100** | **100** | **100** |

## 🎯 Funcionalidades Implementadas

### Padrões de Projeto Implementados

- **Singleton:** `Carrinho` garante instância única
- **Strategy:** Formas de pagamento (PIX, Cartão, Dinheiro)
- **Factory:** `criarPagamento()` centraliza criação
- **Abstract Class:** `Produto` não pode ser instanciada

### TypeScript

- **Interfaces:** `ProdutoDados`, `ItemCarrinho`, `PagamentoStrategy`
- **Tipagem estrita:** `strict: true`
- **`isolatedModules`:** Compilação rápida
- **`verbatimModuleSyntax`:** Import type seguro

### OOP

- **Herança:** `Hamburguer` e `Bebida` estendem `Produto`
- **Polimorfismo:** `preparar()` varia por tipo
- **Encapsulamento:** Campos privados com `#`
- **Métodos abstratos:** Forçam implementação

## 🧠 Aprendizados-Chave

### TypeScript vs JavaScript

- O `abstract` é **apenas em tempo de compilação** (não em runtime)
- `strict: true` pega **bugs silenciosos**
- `import type` evita imports desnecessários

### Testes

- `beforeEach` garante isolamento
- 100% de cobertura ≠ 100% de qualidade
- Refatoração é segura com testes sólidos

### Design Patterns

- **Singleton:** Garante uma única instância
- **Strategy:** Troca comportamentos em runtime
- **Factory:** Centraliza criação de objetos

## 🚀 Como Executar

### Instalar dependências

```bash
npm install
```

### Rodar testes

```bash
npm test
```

### Ver cobertura

```bash
npm run test:coverage
```

### Verificar tipos

```bash
npm run typecheck
```

### Compilar para produção

```bash
npm run build
```

## 🆚 Evolução Completa (v1 → js12)

| Módulo | Tema | Cobertura | Design Patterns |
|--------|------|:---------:|:---------------:|
| v1 | HTML básico | 0% | ❌ |
| js1 | JS fundamentos | 0% | ❌ |
| js2 | Arrays/Objetos | 0% | ❌ |
| js3 | localStorage | 0% | ❌ |
| js4 | Validação | 0% | ❌ |
| js5 | Integração | 0% | ❌ |
| js6 | Fetch/API | 0% | ❌ |
| js7 | Módulos ES6 | 0% | ❌ |
| js8 | Classes | 0% | ❌ |
| js9 | Herança | 0% | ❌ |
| js10 | Design Patterns | 0% | ✅ |
| js11 | Jest | 95% | ✅ |
| **js12** | **TypeScript** | **100%** 🏆 | ✅ |

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** JavaScript → TypeScript (nível 12)

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Status:** Projeto concluído com **perfeição técnica**! 🏆

> 🎓 **Este projeto é um portfólio completo de TypeScript profissional.**
