# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js6)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js6**. Ela representa a transição de um sistema "chumbado" (js5) para um sistema **dinâmico e conectado a uma API**.

Agora, o array de produtos não existe mais dentro do HTML. Ele foi movido para um arquivo externo (`produtos.json`) e é carregado via requisição HTTP com `fetch()`.

## 🎯 Objetivo da v1+js6

Aplicar os conceitos modernos de comunicação de rede no JavaScript:

- Requisições HTTP com `fetch()`
- Promises e o fluxo assíncrono
- `async` e `await`
- Tratamento de erros com `try...catch`
- Manipulação de JSON
- UI de carregamento (Loading/Skeleton)

## 📁 Estrutura do Projeto

```text
v1+js6/
│
├── index.html          # Página principal (sem dados chumbados)
├── produtos.json       # Banco de dados simulado
└── README.md           # Esta documentação
```

## 🧩 Detalhamento Técnico

### Fluxo de Carga (`async`/`await`)

```javascript
async function carregarProdutos() {
    try {
        // 1. Faz a requisição
        const resposta = await fetch("produtos.json");
        
        // 2. Verifica se deu certo
        if (!resposta.ok) throw new Error("Erro na rede");
        
        // 3. Transforma em objeto JS
        produtos = await resposta.json();
        
        // 4. Renderiza na tela
        renderizarProdutos();
    } catch (erro) {
        // 5. Trata o erro
        console.error(erro);
    }
}
```

### Por que usar Live Server?

Navegadores bloqueiam requisições `fetch()` para arquivos locais (`file://`) por motivos de segurança (CORS). O Live Server simula um servidor HTTP local (`http://localhost`), permitindo que o fetch funcione.

## 🆚 Evolução: js5 → js6

| Recurso | js5 | js6 |
|---------|-----|-----|
| Dados dos produtos | Fixos no JS | Carregados via API (`fetch`) |
| Tratamento de erro de rede | ❌ | ✅ (`try...catch`) |
| Loading state | ❌ | ✅ ("⏳ Carregando...") |
| Assincronismo | ❌ | ✅ (`async/await`) |

## 🚀 Como Executar

1. Abra a pasta `v1+js6` no VS Code.
2. Clique com o botão direito no `index.html` e escolha **"Open with Live Server"**.

## 🔍 Testes Realizados

- [x] Produtos carregam a partir do `produtos.json`.
- [x] A tela mostra "⏳ Carregando..." enquanto busca.
- [x] A rede (Network) mostra status 200.
- [x] Renomear o JSON mostra o erro de rede (try/catch).

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
|--------|----------|:------:|
| js1 | Fundamentos | ✅ |
| js2 | Arrays, objetos, filter/find | ✅ |
| js3 | createElement, localStorage | ✅ |
| js4 | Validação de formulário | ✅ |
| js5 | Integração (Carrinho + Checkout) | ✅ |
| **js6** | **Fetch/API e Assincronismo** | **✅** |
| js7 | Módulos ES6 (`import`/`export`) | ⏳ |

---
**Atividade 2 – Linguagem de Marcação**
Módulo extra: JavaScript — nível 6 (Fetch/API)