# 🧪 VH Burger - Projeto de Linguagem de Marcação (v1 + js11)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Jest](https://img.shields.io/badge/Jest-29-red)
![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js11**. Ela introduz **Testes Unitários Automatizados** com Jest.

Os testes garantem que a lógica de negócio (carrinho, pagamento, produto) funciona corretamente, mesmo após mudanças no código.

## 🎯 Objetivo da v1+js11

- Configurar Jest em um projeto ESM
- Escrever testes com `describe` e `it`
- Usar matchers (`toBe`, `toEqual`, `toThrow`, `toBeInstanceOf`)
- Criar mocks para `localStorage`
- Verificar cobertura de código (`coverage`)
- Testar Herança e Polimorfismo

## 📁 Estrutura do Projeto

```text
v1+js11/
│
├── package.json
├── jest.config.js
│
├── js/models/          # Cópia do js10
│   ├── Carrinho.js
│   ├── Produto.js
│   ├── Hamburguer.js
│   ├── Bebida.js
│   └── Pagamento.js
│
└── tests/              # NOVO
    ├── Carrinho.test.js
    ├── Pagamento.test.js
    └── Produto.test.js
```

## 📊 Cobertura de Testes

Arquivo	% Stmts	% Branch	% Funcs	% Lines
Bebida.js	100	100	100	100
Carrinho.js	96,77	80	100	100
Hamburguer.js	100	100	100	100
Pagamento.js	88,88	100	80	88,88
Produto.js	90	100	75	90
TOTAL	95,08	89,47	92,59	96,29
🏆 25 testes passando!

## 🚀 Como Executar

Instalar dependências

```bash
npm install
```

Rodar os testes

```bash
npm test
```

Ver cobertura

```bash
npm run test:coverage
```

Modo watch (re-executa ao salvar)

```bash
npm run test:watch
```

## 🧠 Aprendizados

Configuração do Jest com ES Modules (--experimental-vm-modules)
describe e it para estruturar testes
expect com matchers variados
Mocks de localStorage (Node não tem)
beforeEach para resetar estado entre testes
Testar Herança com instanceof
Testar Polimorfismo verificando mensagens diferentes
Lição importante: vazamento de estado entre testes (Singleton precisa de reset)

## 🆚 Evolução: js10 → js11

Recurso	js10	js11
Testes	❌	✅ 25 testes
Framework	—	Jest
Mock	—	✅
Coverage	—	✅ 95%
Confiança	Baixa	Alta

## 🗺️ Roadmap de JavaScript

Módulo	Conteúdo	Status
js1 ~ js10	Fundamentos até Design Patterns	✅
js11	Testes Unitários com Jest	✅
js12	TypeScript	⏳
js13	Frameworks (React, Vue)	⏳
Atividade 2 – Linguagem de Marcação
Módulo extra: JavaScript — nível 11 (Testes Unitários)

text

---

## 🎯 Próximo Módulo: js12 — TypeScript

O **TypeScript** é a próxima evolução natural. Ele adiciona **tipagem estática** ao JavaScript, o que:

- ✅ **Evita bugs** (passar string onde espera número)
- ✅ **Melhora o autocomplete** no VS Code
- ✅ **Documenta o código** (os tipos são a documentação)
- ✅ **Facilita refatoração**
- ✅ **É o padrão do mercado** (React, Angular, Vue 3, Node.js)

### Exemplo rápido:

```typescript
// JavaScript (js11)
function calcularDesconto(preco, percentual) {
    return preco - (preco * percentual / 100);
}
calcularDesconto("28", "10"); // "25.2" (bug silencioso!)

// TypeScript (js12)
function calcularDesconto(preco: number, percentual: number): number {
    return preco - (preco * percentual / 100);
}
calcularDesconto("28", "10"); // ❌ Erro: string não é number
