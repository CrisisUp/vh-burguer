# 🍔 VH Burger - v2-js9-css9

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Jest](https://img.shields.io/badge/Jest-29-red)
![Tests](https://img.shields.io/badge/tests-20%20passing-success)

## 📋 Sobre o Projeto

Nona evolução do projeto VH Burger. 

Nesta versão, o foco saiu da interface (que já está premium na v2-js8-css8) e foi para a **qualidade do código**. Implementamos **Testes Unitários** com Jest para garantir que as regras de negócio (carrinho, produtos e pagamentos) nunca quebrem, mesmo com futuras alterações.

## 🎯 O Que Foi Adicionado Nesta Versão

### Arquitetura de Testes

- **Jest** configurado para rodar com TypeScript e ES Modules.
- **Mocks** para o `localStorage` (já que o Node.js não tem navegador).
- **Testes do Carrinho**: Singleton, adição, remoção, cálculo de total e casos de borda.
- **Testes de Pagamento**: Strategy (PIX, Cartão, Dinheiro) e Factory.
- **Testes de Produto**: Herança (Hamburguer, Bebida) e Polimorfismo.
- **Cobertura de Código** com relatório visual no terminal.

### Correções de Arquitetura (Refatoração)

- Adição da proteção em runtime na classe `Produto` (para impedir instância direta).
- Criação dos métodos de reset do Singleton (`_resetarParaTestes`) para isolar os testes.
- Criação das classes `Hamburguer` e `Bebida` para testar a herança.

## 📊 Resultados dos Testes

```text
| Métrica | Resultado |
| --- | --- |
| Testes Passando | 20/20 ✅ |
| Suítes de Teste | 3/3 ✅ |
| Cobertura (Statements) | 93,54% |
| Tempo de Execução | 0.21s ⚡ |
| Cobertura de Lógica | 100% (todos os fluxos testados) |
```

## 📁 Estrutura do Projeto

```text
v2-js9-css9/
│
├── index.html, cardapio.html, sobre.html, contato.html
├── produtos.json
├── css/style.css
│
├── src/                            (Código TypeScript)
│   ├── main.ts
│   ├── cardapio.ts
│   ├── carrinho.ts
│   ├── checkout.ts
│   └── models/
│       ├── Produto.ts              (Classe Abstrata)
│       ├── Hamburguer.ts           (Herança)
│       ├── Bebida.ts               (Herança)
│       ├── Carrinho.ts             (Singleton)
│       └── Pagamento.ts            (Strategy)
│
├── dist/                           (Gerado pelo `npm run build`)
│
├── tests/                          (NOVO - Pasta de Testes)
│   ├── Carrinho.test.ts
│   ├── Pagamento.test.ts
│   └── Produto.test.ts
│
├── jest.config.js                  (Configuração do Jest)
├── tsconfig.json                   (Configuração do TS)
├── tsconfig.test.json              (Configuração do TS para Testes)
├── package.json
└── README.md
```

## 🧪 O Que Cada Teste Valida

### `tests/Carrinho.test.ts`

```text
| Teste | O que valida |
| --- | --- |
| Deve ser um Singleton | Mesma instância na memória |
| Deve começar vazio | Estado inicial zerado |
| Adicionar item | Inclusão e cálculo de total |
| Remover item | Exclusão e reset do total |
| Múltiplos itens | Quantidade e soma corretas |
| Casos de borda | Early returns e reset |
```

### `tests/Pagamento.test.ts`

```text
| Teste | O que valida |
| --- | --- |
| PIX | Mensagem com QR Code |
| Cartão | Mensagem com valor |
| Dinheiro | Mensagem com troco |
| Factory | Cria a estratégia correta |
| Erro Factory | Tipo inválido lança erro |
```

### `tests/Produto.test.ts`

```text
| Teste | O que valida |
| --- | --- |
| Herança | Hamburguer é instância de Produto |
| Preço formatado | R$ XX,XX |
| Polimorfismo | Grelhar vs Servir |
| Bacon | Adição e aumento de preço |
| Esgotado | Indisponibilidade |
| Classe abstrata | Não pode ser instanciada |
```

## 🚀 Como Executar o Projeto e os Testes

### 1. Instalar dependências

```bash
npm install
```

### 2. Compilar o TypeScript (para o navegador)

```bash
npm run build
```

### 3. Rodar os testes unitários

```bash
npm test
```

### 4. Ver a cobertura de código

```bash
npm run test:coverage
```

### 5. Abrir o site

Use o **Live Server** no `index.html`.

## 🆚 Evolução: v2-js8-css8 → v2-js9-css9

```text
| Aspecto | v2-js8-css8 | v2-js9-css9 |
| --- | --- | --- |
| Testes Unitários | ❌ | ✅ 20 testes |
| Framework | — | Jest + ts-jest |
| Cobertura | — | ✅ 93,54% |
| Confiança no código | Média | ✅ Alta |
| Refatoração | — | ✅ Classes abstratas e Singletons |
```

## 🗺️ Roadmap

```text
| Módulo | Foco | Status |
| --- | --- | --- |
| v2-js1 a js7 | HTML, CSS, JS, OOP e Patterns | ✅ |
| v2-js8-css8 | TypeScript + Identidade Visual | ✅ |
| v2-js9-css9 | Testes Unitários (Jest + TS) | ✅ |
| v2-js10-css10 | Deploy e Publicação (GitHub Pages) | ⏳ |
```

## 🧠 Aprendizados-Chave

```text
| Conceito | O que foi aprendido |
| --- | --- |
| Jest com ESM | Configuração do ts-jest e `--experimental-vm-modules` |
| Mocks | Simulação do `localStorage` no Node.js |
| Isolamento de Testes | Uso do `_resetarParaTestes` para o Singleton |
| Proteção em Runtime | `if (this.constructor === Produto) throw` |
| Cobertura | Uso do `--coverage` e leitura dos relatórios |
| Source Maps | Importância para o mapeamento de linhas |
```

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** Evolução v2 + JS + CSS (nível 9 - Testes Unitários)

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Dica:** Abra o arquivo `jest.config.js` e observe a opção `transform`. É ela que ensina o Jest a ler o TypeScript e converte o código em tempo real para os testes.

## 📁 Estado Atual da Pasta v2-js9-css9/

```text
v2-js9-css9/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── produtos.json       ✅
├── README.md           ✅ (este arquivo)
├── package.json        ✅
├── jest.config.js      ✅
├── tsconfig.json       ✅
├── tsconfig.test.json  ✅
│
├── css/
│   └── style.css       ✅
│
├── src/
│   ├── main.ts         ✅
│   ├── cardapio.ts     ✅
│   ├── carrinho.ts     ✅
│   ├── checkout.ts     ✅
│   └── models/         ✅
│       ├── Produto.ts
│       ├── Hamburguer.ts
│       ├── Bebida.ts
│       ├── Carrinho.ts
│       └── Pagamento.ts
│
├── tests/              ✅
│   ├── Carrinho.test.ts
│   ├── Pagamento.test.ts
│   └── Produto.test.ts
│
└── dist/               ✅ (compilado)
```
