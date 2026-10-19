# 🍔 VH Burger - v2-js8-css8

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Design](https://img.shields.io/badge/Design-Premium-gold)

## 📋 Sobre o Projeto

Oitava evolução do site multipáginas da VH Burger.

Esta versão representa a consolidação do projeto em **nível de mercado**. Além da arquitetura robusta com TypeScript, OOP e Design Patterns, a interface passou por uma **refatoração visual profunda**, transformando o site em um portfólio digno de agência.

## 🎯 O Que Foi Adicionado Nesta Versão

### Arquitetura e Lógica (TypeScript)

- **Tipagem estrita** (`strict: true` no `tsconfig.json`).
- **Interfaces** (`ProdutoDados`, `ItemCarrinho`, `PagamentoStrategy`).
- **Design Patterns**: Singleton (Carrinho), Strategy (Pagamento), Observer (Eventos).
- **Compilação** via `tsc` (pasta `src/` para `.ts`, pasta `dist/` para `.js`).
- **Módulos ES6** (`import`/`export`).

### Identidade Visual e UI/UX (CSS e HTML)

- **Logo 100% em CSS** (sem imagens externas).
- **Fundo com imagem de chef** e efeito de vidro fosco (Glassmorphism).
- **Home "Perfumada"**: Hero section com imagem flutuante e depoimentos em cards.
- **Página "Sobre"**: Linha do tempo (Timeline), citação em destaque e equipe.
- **Cardápio**: Banner com sombra neon e botões com efeito glow.
- **Checkout**: Floating labels (rótulos flutuantes), máscaras e mapa estilizado.
- **Ícones SVG**: Substituição de emojis por ícones minimalistas no "Nossos Valores".
- **Favicon SVG**: Ícone de hambúrguer na aba do navegador.
- **Dark/Light Mode**: Alternância de tema com tons de marrom café no modo claro.

## 📁 Estrutura do Projeto

```text
v2-js8-css8/
│
├── index.html
├── cardapio.html
├── sobre.html
├── contato.html
├── produtos.json
├── favicon.svg
│
├── css/
│   └── style.css           (Design System + Componentes)
│
├── src/                    (Código TypeScript)
│   ├── main.ts             (Tema, menu mobile, saudação)
│   ├── cardapio.ts         (Fetch e renderização)
│   ├── carrinho.ts         (Interface visual e eventos)
│   ├── checkout.ts         (Validação e Strategy)
│   └── models/
│       ├── Produto.ts
│       ├── Carrinho.ts
│       └── Pagamento.ts
│
├── dist/                   (Gerado pelo `npm run build`)
│
├── package.json
└── tsconfig.json
```

## 🎨 Paleta de Cores

```text
| Cor               | Escuro (Padrão)   | Claro (Marrom)   | Uso                        |
| ----------------- | ----------------- | ---------------- | -------------------------- |
| Fundo             | #1a1a1a         | #f8f9fa        | Corpo da página            |
| Fundo alternativo | #242424         | #ffffff        | Cards e caixas             |
| Texto             | #f5f5f5         | #3e2723        | Textos principais          |
| Texto suave       | #b3b3b3         | #5d4037        | Parágrafos                 |
| Destaque          | #ffcc00         | #d4a017        | Títulos, botões, links     |
| Secundária        | #e63946         | #c1121f        | Badge de esgotado          |
| Sucesso           | #2ecc71         | #2ecc71        | Validação e sucesso        |
```

## 🚀 Como Executar o Projeto

**⚠️ IMPORTANTE:** Como usamos TypeScript e ES6 Modules, **é obrigatório usar o Live Server** e compilar o código.

### 1. Abra o terminal na pasta `v2-js8-css8`

### 2. Instale as dependências

```bash
npm install
```

### 3. Compile o TypeScript

```bash
npm run build
```

### 4. Abra o `index.html` via **Live Server**

> 💡 **Dica de Desenvolvimento:** Rode `npm run watch` em um terminal separado para recompilar automaticamente ao salvar os arquivos `.ts`.

## 🔍 Testes Realizados

```text
- [x] O código TypeScript compila sem erros
- [x] O logo aparece em todas as páginas e no rodapé
- [x] O fundo com imagem de chef funciona e não atrapalha a leitura
- [x] O Dark/Light mode alterna as cores do texto e fundo
- [x] O carrinho flutuante abre, fecha e salva no localStorage
- [x] O checkout valida os campos e exibe o confetti
- [x] Os ícones SVG da página "Sobre" herdam a cor de destaque
- [x] O site é responsivo (desktop, tablet e mobile)
```

## 🆚 Evolução: v2-js7-css7 → v2-js8-css8

```text
| Aspecto                | v2-js7-css7           | v2-js8-css8                |
| ---------------------- | --------------------- | -------------------------- |
| Linguagem              | JavaScript (ES6)      | ✅ TypeScript (strict)     |
| Tipagem                | ❌                    | ✅ Interfaces e Types      |
| Logo                   | Texto simples         | ✅ Logo 3D em CSS          |
| Interface Visual       | Básica                | ✅ Premium (Neon, Glass)   |
| Ícones                 | Emojis                | ✅ SVGs minimalistas       |
| Modo Claro             | Preto e Branco        | ✅ Marrom Café e Dourado   |
| Fundo                  | Cor sólida            | ✅ Imagem de chef com blur |
```

## 🗺️ Roadmap

```text
| Módulo        | Foco                              | Status |
| ------------- | --------------------------------- | ------ |
| v2-js1 a js7  | HTML, CSS, JS, OOP e Patterns     | ✅     |
| v2-js8-css8   | TypeScript + Identidade Visual    | ✅     |
| v2-js9-css9   | Testes Unitários (Jest + TS)      | ⏳     |
| v2-js10-css10 | Deploy e Publicação (GitHub Pages)| ⏳     |
```

## 🧠 Aprendizados-Chave

```text
| Conceito           | O que foi aprendido                                  |
| ------------------ | ---------------------------------------------------- |
| TypeScript         | Interfaces, Type Assertions e Compilação             |
| Glassmorphism      | Efeito de vidro fosco com backdrop-filter            |
| SVG Inline         | Ícones escaláveis que herdam a cor do texto          |
| Floating Labels    | Inputs modernos sem precisar de JavaScript extra     |
| CSS Variables      | Design System com troca de tema em tempo real        |
| Neon Glow          | Efeito de brilho com múltiplas sombras (box-shadow)  |
```

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** Evolução v2 + JS + CSS (nível 8 - TypeScript + UI Premium)

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
├── favicon.svg         ✅
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
│   └── models/         ✅
│
└── dist/               ✅ (compilado)
```
