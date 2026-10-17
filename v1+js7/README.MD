# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js7)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js7**. Ela representa a transição de um único arquivo HTML com um bloco `<script>` gigante (js6) para uma **arquitetura modular profissional** usando **ES6 Modules**.

## 🎯 Objetivo da v1+js7

Aplicar os princípios de **Separação de Responsabilidades (SoC)**:

- Dividir o código em arquivos pequenos e focados.
- Usar `import` e `export` para compartilhar funções.
- Usar **eventos customizados** para comunicar a UI com a Lógica.
- Encapsular dados (escopo de módulo).

## 📁 Estrutura do Projeto

```text
v1+js7/
│
├── index.html          # Apenas estrutura e <script type="module">
├── produtos.json       # Dados da API
│
├── js/
│   ├── main.js         # Orquestrador
│   ├── api.js          # Comunicação externa (fetch)
│   ├── carrinho.js     # Lógica de estado (array + localStorage)
│   ├── ui.js           # Renderização (DOM)
│   └── checkout.js     # Validação de formulário
│
└── README.md
```

## 🧩 Detalhamento Técnico

### Separação de Responsabilidades

- **`api.js`**: Só sabe fazer `fetch`.
- **`carrinho.js`**: Só sabe somar, adicionar e remover itens.
- **`ui.js`**: Só sabe manipular o HTML.
- **`checkout.js`**: Só sabe validar campos.
- **`main.js`**: Não sabe fazer nada disso. Ele apenas "maestra" os outros módulos.

### Padrão Observer (Eventos Customizados)

O `ui.js` não tem acesso direto ao `carrinho.js`. Quando o usuário clica em "Adicionar", o UI dispara um grito no ar (`document.dispatchEvent(new CustomEvent("adicionar-ao-carrinho"))`). O `main.js` escuta esse grito e avisa o carrinho.
Isso permite trocar o `ui.js` inteiro sem quebrar o carrinho.

### Escopo de Módulo

No js6, você poderia digitar `carrinho` no console do navegador e ver os dados. No js7, a variável está protegida dentro de `carrinho.js` e não vaza para o escopo global.

## 🆚 Evolução: js6 → js7

| Recurso | js6 | js7 |
|---------|-----|-----|
| Arquivos JS | 0 (tudo inline no HTML) | 5 arquivos separados |
| `import`/`export` | ❌ | ✅ |
| Escopo protegido | ❌ (variáveis globais) | ✅ (módulos) |
| Acoplamento | Alto | Baixo (eventos customizados) |
| Manutenção | Difícil | Fácil |

## 🚀 Como Executar

**IMPORTANTE:** Obrigatório usar um servidor local (Live Server) por causa dos módulos ES6.

1. Abra a pasta no VS Code.
2. Clique com o botão direito em `index.html` > "Open with Live Server".

## 🔍 Testes Realizados

- [x] Todos os arquivos carregam na aba Network.
- [x] O sistema funciona exatamente como no js6 (sem regressão).
- [x] A variável `carrinho` não aparece no escopo global (console).

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
|--------|----------|:------:|
| js1 | Fundamentos | ✅ |
| js2 | Arrays, objetos | ✅ |
| js3 | createElement, localStorage | ✅ |
| js4 | Validação de formulário | ✅ |
| js5 | Integração (Carrinho + Checkout) | ✅ |
| js6 | Fetch/API | ✅ |
| **js7** | **Módulos ES6** | **✅** |
| js8 | Classes e Orientação a Objetos | ⏳ |
| js9 | Gerenciamento de Estado (Redux pattern) | ⏳ |

---
**Atividade 2 – Linguagem de Marcação**
Módulo extra: JavaScript — nível 7 (Modularização)
