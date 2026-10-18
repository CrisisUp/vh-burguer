# 🍔 VH Burger - v2-js7-css7

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![OOP](https://img.shields.io/badge/OOP-Design%20Patterns-red)

## 📋 Sobre o Projeto

Sétima evolução do site multipáginas da VH Burger.

Esta pasta representa um **divisor de águas na arquitetura**: saímos do JavaScript "funcional solto" e abraçamos a **Orientação a Objetos (OOP)** e os **Design Patterns**. O projeto agora é dividido em **modelos de negócio** e **controladores de interface**.

## 🎯 O Que Foi Adicionado Nesta Versão

### JavaScript (Arquitetura)

- **Classes** (`Produto`, `Carrinho`, `Pagamento`).
- **Encapsulamento** com propriedades privadas (`#itens`).
- **Singleton Pattern** no Carrinho (instância única na memória).
- **Strategy Pattern** nos Pagamentos (PIX, Cartão, Dinheiro).
- **ES6 Modules** (`import`/`export`) para separar responsabilidades.
- **Delegação de Eventos** (melhor performance em listas grandes).
- **Toast Notification** (substituiu o `alert` feio).

### CSS (Visual)

- **Animação do Toast** (desce do topo com bounce).

## 📁 Estrutura do Projeto

```text
v2-js7-css7/
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
└── js/
    ├── main.js           (Inicialização do tema, menu mobile, etc.)
    ├── cardapio.js       (Fetch e renderização dos cards)
    ├── carrinho.js       (Interface visual do carrinho)
    ├── checkout.js       (Lógica do formulário de checkout)
    │
    └── models/           (NOVA PASTA: Camada de Negócio)
        ├── Produto.js    (Classe Base)
        ├── Carrinho.js   (Classe Singleton)
        └── Pagamento.js  (Classes Strategy)
```

## 🎨 Paleta de Cores

```text
| Cor               | Hex         | Uso                        |
| ----------------- | ----------- | -------------------------- |
| Fundo             | #1a1a1a   | Corpo da página            |
| Fundo alternativo | #242424   | Cards e caixas             |
| Texto             | #f5f5f5   | Textos principais          |
| Texto suave       | #b3b3b3   | Parágrafos                 |
| Destaque          | #ffcc00   | Títulos, botões, links     |
| Secundária        | #e63946   | Badge de esgotado          |
| Borda             | #333      | Bordas sutis               |
```

## 🚀 Como Executar

**⚠️ IMPORTANTE:** O uso de módulos ES6 (`import`/`export`) exige o **Live Server**. Abrir o arquivo direto (`file://`) vai gerar erro de CORS.

1. Abra a pasta no VS Code.
2. Clique com o botão direito em `cardapio.html` → **Open with Live Server**.
3. O navegador abre em `http://127.0.0.1:5500`.

## 🔍 Testes Realizados

```text
- [x] O carrinho é um Singleton (mesma instância)
- [x] O array de itens é privado (#)
- [x] O Strategy retorna a mensagem correta por pagamento
- [x] Toast substituiu o alert feio
- [x] Confetti ao finalizar (js6)
- [x] Nenhuma variável global poluindo o window
- [x] O cardápio instancia a classe Produto
```

## 🆚 Evolução: v2-js6-css6 → v2-js7-css7

```text
| Aspecto                | v2-js6-css6             | v2-js7-css7                |
| ---------------------- | ----------------------- | -------------------------- |
| Paradigma              | Funcional (solto)       | ✅ OOP                     |
| Organização            | Tudo em 1 arquivo JS    | ✅ Módulos por modelo      |
| Segurança              | Variáveis globais       | ✅ Encapsulamento (#)      |
| Pagamento              | if/else                 | ✅ Strategy                |
| Notificação            | alert()                 | ✅ Toast                   |
| Módulos ES6            | ❌                      | ✅ import/export           |
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
| v2-js8-css8   | TypeScript (Tipagem estrita)      | ⏳     |
```

## 🧠 Aprendizados-Chave

```text
| Conceito           | O que foi aprendido                                  |
| ------------------ | ---------------------------------------------------- |
| Classes            | Criar moldes de objetos com métodos e propriedades   |
| Encapsulamento     | Proteger dados com campos privados (#)               |
| Getters            | Calcular propriedades dinâmicas (this.total)         |
| Singleton          | Garantir uma única instância na aplicação            |
| Strategy           | Trocar algoritmos em tempo de execução               |
| ES6 Modules        | Separar código em arquivos importáveis               |
| Delegação Eventos  | Adicionar eventos a pais em vez de filhos            |
```

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** Evolução v2 + JS + CSS (nível 7)

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Dica:** Abra o console (F12) e digite `new Carrinho()`. Você verá que, mesmo chamando o construtor novamente, ele retorna a mesma instância graças ao padrão Singleton.
📁 Estado Atual da Pasta v2-js7-css7/

```text
v2-js7-css7/
│
├── index.html          ✅
├── cardapio.html       ✅
├── sobre.html          ✅
├── contato.html        ✅
├── produtos.json       ✅
├── README.md           ✅ (este arquivo)
│
├── css/
│   └── style.css       ✅
│
└── js/
    ├── main.js         ✅
    ├── cardapio.js     ✅
    ├── carrinho.js     ✅
    ├── checkout.js     ✅
    └── models/         ✅
        ├── Produto.js  ✅
        ├── Carrinho.js ✅
        └── Pagamento.js✅
```

## 🎯 Próximo Passo

Agora que o README está pronto, podemos:

```text
| Opção | Descrição                                       |
| ----- | ----------------------------------------------- |
| 📝    | Criar o TESTES.md da v2-js7-css7                |
| 🚀    | Avançar para v2-js8-css8 (TypeScript)           |
| 🧪    | Testar tudo e me reportar                       |
```

Me diga o que prefere! 🍔🏗️🚀
