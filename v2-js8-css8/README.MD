# 🍔 VH Burger - v2-js8-css8

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![OOP](https://img.shields.io/badge/OOP-Design%20Patterns-red)

## 📋 Sobre o Projeto

Oitava evolução do site multipáginas da VH Burger.

Esta pasta representa a **migração completa para TypeScript**. O código que antes era JavaScript puro com OOP agora possui **tipagem estrita**, **interfaces**, e é compilado via `tsc` antes de rodar no navegador. Isso eleva o projeto a um padrão de mercado para aplicações escaláveis.

## 🎯 O Que Foi Adicionado Nesta Versão

### TypeScript (Arquitetura)

- **Tipagem estrita** (`strict: true` no `tsconfig.json`).
- **Interfaces** (`ProdutoDados`, `ItemCarrinho`, `PagamentoStrategy`).
- **Type Assertions** (`as HTMLButtonElement`, `as ItemCarrinho[]`).
- **Source Maps** para debug direto no arquivo `.ts` no navegador.
- **Separação de pastas**: `src/` (código fonte) e `dist/` (compilado).

### Design Patterns Mantidos

- **Singleton** no `Carrinho`.
- **Strategy** nos `Pagamentos`.
- **Observer** (Eventos customizados para atualizar a interface).
- **Encapsulamento** (`#itens` privado).

## 📁 Estrutura do Projeto

```text
v2-js8-css8/
│
├── index.html
├── cardapio.html
├── sobre.html
├── contato.html
├── produtos.json
│
├── css/
│   └── style.css
│
├── src/                    ← Código TypeScript (o que você escreve)
│   ├── main.ts             (Tema, menu mobile, saudação)
│   ├── cardapio.ts         (Fetch e renderização)
│   ├── carrinho.ts         (Interface visual e eventos)
│   ├── checkout.ts         (Validação e Strategy)
│   │
│   └── models/
│       ├── Produto.ts      (Classe Base)
│       ├── Carrinho.ts     (Classe Singleton)
│       └── Pagamento.ts    (Classes Strategy)
│
├── dist/                   ← Código compilado (gerado pelo `npm run build`)
│   └── (arquivos .js prontos para o navegador)
│
├── package.json            ← Configuração do Node (instala o TypeScript)
└── tsconfig.json           ← Configuração do compilador TypeScript
```

## 🎨 Paleta de Cores

```text
| Cor               | Hex       | Uso                          |
| ----------------- | --------- | ---------------------------- |
| Fundo             | #1a1a1a   | Corpo da página            |
| Fundo alternativo | #242424   | Cards e caixas             |
| Texto             | #f5f5f5   | Textos principais          |
| Texto suave       | #b3b3b3   | Parágrafos                 |
| Destaque          | #ffcc00   | Títulos, botões, links     |
| Secundária        | #e63946   | Badge de esgotado          |
| Borda             | #333      | Bordas sutis               |
```

## 🚀 Como Executar o Projeto

**⚠️ IMPORTANTE:** Como usamos TypeScript, **é preciso compilar** antes de ver as mudanças no navegador.

### 1. Abra o terminal na pasta `v2-js8-css8`

### 2. Instale as dependências

```bash
npm install
```

### 3. Compile o TypeScript para JavaScript

```bash
npm run build
```

### 4. Abra o `cardapio.html` via **Live Server**

> 💡 **Dica de Desenvolvimento:** Se estiver fazendo alterações frequentes, use `npm run watch` em um terminal separado. Ele recompila automaticamente ao salvar os arquivos `.ts`.

## 🔍 Testes Realizados

```text
- [x] A pasta src/ compila para dist/ sem erros
- [x] O botão "Adicionar" cria a estrutura do carrinho
- [x] O carrinho é um Singleton e mantém os itens
- [x] O Strategy retorna mensagens corretas no checkout
- [x] O TypeScript avisa se houver erro de tipo
- [x] O site roda 100% com os arquivos compilados
```

## 🆚 Evolução: v2-js7-css7 → v2-js8-css8

```text
| Aspecto                | v2-js7-css7           | v2-js8-css8                |
| ---------------------- | --------------------- | -------------------------- |
| Linguagem              | JavaScript (ES6)      | ✅ TypeScript (strict)     |
| Tipagem                | ❌                    | ✅ Interfaces e Types      |
| Organização            | js/                   | ✅ src/ e dist/            |
| Compilação             | ❌                    | ✅ via tsc                 |
| Debug                  | Direto no JS          | ✅ Source Maps             |
```

## 🗺️ Roadmap

```text
| Módulo        | Foco                              | Status |
| ------------- | --------------------------------- | ------ |
| v2-js1-css1   | Cores, fontes, saudação, relógio  | ✅     |
| v2-js2-css2   | Flexbox, Grid, Cards, Animações   | ✅     |
| v2-js3-css3   | localStorage + carrinho flutuante | ✅     |
| v2-js4-css4   | Checkout validado + estilizado    | ✅     |
| v2-js5-css5   | Dark mode + responsividade + a11y | ✅     |
| v2-js6-css6   | Fetch/API + skeleton + confetti   | ✅     |
| v2-js7-css7   | OOP + Design Patterns             | ✅     |
| v2-js8-css8   | TypeScript + Strict Types         | ✅     |
| v2-js9-css9   | Testes Unitários (Jest)           | ⏳     |
```

## 🧠 Aprendizados-Chave

```text
| Conceito           | O que foi aprendido                                      |
| ------------------ | -------------------------------------------------------- |
| Interfaces         | Definir a "forma" dos objetos e contratos                |
| Type Assertions    | Garantir tipos em retornos do DOM (as HTMLButtonElement) |
| Compilação (tsc)   | Transformar TS em JS para o navegador entender           |
| tsconfig.json      | Configurar o rigor do compilador                         |
| Source Maps        | Debugar arquivos .ts diretamente no Chrome               |
```

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** Evolução v2 + JS + CSS (nível 8 - TypeScript)

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Dica:** Abra o `tsconfig.json` e veja a opção `"strict": true`. Isso força o TypeScript a ser rigoroso, impedindo bugs bobos como variáveis nulas não tratadas.

## 📁 Estado Atual da Pasta v2-js8-css8/

```text
v2-js8-css8/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── produtos.json       ✅
├── README.md           ✅ (este arquivo)
├── package.json        ✅
├── tsconfig.json       ✅
│
├── css/
│   └── style.css       ✅
│
├── src/
│   ├── main.ts         ✅
│   ├── cardapio.ts     ✅
│   ├── carrinho.ts     ✅
│   ├── checkout.ts     ✅
│   └── models/
│       ├── Produto.ts  ✅
│       ├── Carrinho.ts ✅
│       └── Pagamento.ts✅
│
└── dist/               ✅ (gerado pelo npm run build)
```
