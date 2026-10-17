# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js1)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js1** do site da **VH Burger**.

Nesta etapa, partimos da estrutura original da **v1** (página única com HTML puro) e adicionamos as **primeiras noções de JavaScript** para tornar a página interativa.

O objetivo é aprender os fundamentos da linguagem (variáveis, funções, eventos, DOM) **sem frameworks**, mantendo a simplicidade do HTML.

## 🎯 Objetivo da v1+js1

Aplicar os conceitos básicos de JavaScript em uma página HTML, incluindo:

- Manipulação do DOM (`getElementById`, `textContent`)
- Variáveis (`const`, `let`)
- Condicionais (`if/else`)
- Funções
- Eventos (`addEventListener`)
- Interação com o usuário (`alert`, `prompt`)
- Timers (`setInterval`)
- Templates strings (`` `${}` ``)

## 📁 Estrutura do Projeto

```text
v1+js1/
│
├── index.html          # Página única com HTML + JavaScript
└── README.md           # Esta documentação
```

## 📄 Funcionalidades Implementadas

A página possui **6 funcionalidades interativas** que ensinam JavaScript na prática:

| # | Funcionalidade | O que faz | Conceitos JS |
| - | -------------- | --------- | ------------ |
| 1 | **Saudação dinâmica** | "Bom dia / Boa tarde / Boa noite" conforme a hora | `Date`, `if/else`, `textContent` |
| 2 | **Relógio ao vivo** | Mostra a hora atual atualizando a cada segundo | `setInterval`, `padStart` |
| 3 | **Status de funcionamento** | Indica se a loja está aberta ou fechada | `Date`, `if/else`, `return` |
| 4 | **Botão "Fazer Pedido"** | Exibe alerta com número do pedido | `addEventListener`, `alert` |
| 5 | **Contador de cliques** | Conta quantas vezes o botão foi clicado | `let`, `++`, `textContent` |
| 6 | **Botão "Me Cumprimente"** | Pede o nome e cumprimenta o usuário | `prompt`, `if`, `alert` |

## ✅ Checklist Técnico

### HTML

- [x] Estrutura básica (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [x] `meta charset="UTF-8"`
- [x] `meta viewport`
- [x] `<title>` descritivo
- [x] Elementos com `id` para manipulação JS
- [x] `<script>` no final do `<body>` (boa prática)

### JavaScript — Módulo 1

- [x] Variáveis com `const` e `let`
- [x] Template strings (`` `${}` ``)
- [x] Condicionais (`if`, `else if`, `else`)
- [x] Operadores lógicos (`&&`)
- [x] Funções declaradas (`function nome() {}`)
- [x] Funções anônimas (dentro do `addEventListener`)
- [x] Manipulação do DOM (`getElementById`, `textContent`)
- [x] Eventos (`addEventListener("click", ...)`)
- [x] `alert()` — mensagens modais
- [x] `prompt()` — entrada de dados
- [x] `console.log()` — depuração
- [x] `setInterval()` — repetição automática
- [x] `Date` — manipulação de datas
- [x] `padStart()` — formatação de números

## 🧩 Detalhamento Técnico

### 1. Saudação Dinâmica

```javascript
const agora = new Date();
const hora = agora.getHours();

let saudacao;

if (hora >= 5 && hora < 12) {
    saudacao = "☀️ Bom dia!";
} else if (hora >= 12 && hora < 18) {
    saudacao = "🌤️ Boa tarde!";
} else {
    saudacao = "🌙 Boa noite!";
}

document.getElementById("saudacao").textContent =
    `${saudacao} Bem-vindo à VH Burger!`;
```

**Conceitos:**

- `new Date()` — cria objeto com a data/hora atual
- `getHours()` — retorna a hora (0-23)
- Operadores `>=` e `<` — comparam valores
- `&&` — operador lógico "E"
- `textContent` — define o texto de um elemento

### 2. Relógio ao Vivo

```javascript
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    document.getElementById("relogio").textContent =
        `${horas}:${minutos}:${segundos}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
```

**Conceitos:**

- `padStart(2, "0")` — adiciona um "0" à esquerda (ex: "5" → "05")
- `setInterval(função, ms)` — executa a cada X milissegundos
- `1000 ms = 1 segundo`

### 3. Status de Funcionamento

```javascript
function verificarFuncionamento() {
    const agora = new Date();
    const hora = agora.getHours();
    const dia = agora.getDay(); // 0 = domingo, 1 = segunda, ...

    const status = document.getElementById("status-loja");

    if (dia === 1) {
        status.textContent = "🔴 Fechado hoje (segunda-feira)";
        return;
    }

    if (hora >= 18 && hora < 23) {
        status.textContent = "🟢 Estamos abertos agora!";
    } else {
        status.textContent = "🟡 Fechado no momento. Abrimos às 18h.";
    }
}
```

**Conceitos:**

- `getDay()` — retorna o dia da semana (0-6)
- `return` — sai da função (para de executar o resto)
- Lógica de negócio: usa o dia e a hora para decidir

### 4 e 5. Botão "Fazer Pedido" + Contador

```javascript
let contador = 0;

const btnPedido = document.getElementById("btn-pedido");
const spanContador = document.getElementById("contador");

btnPedido.addEventListener("click", function () {
    contador++;
    spanContador.textContent = contador;

    alert(`🍔 Seu pedido #${contador} foi anotado!`);
});
```

**Conceitos:**

- `addEventListener("click", função)` — escuta o clique
- `contador++` — incrementa em 1 (equivale a `contador = contador + 1`)
- Função anônima (sem nome) dentro do evento

### 6. Botão "Me Cumprimente"

```javascript
const btnSaudacao = document.getElementById("btn-saudacao");

btnSaudacao.addEventListener("click", function () {
    const nome = prompt("Qual é o seu nome?");

    if (nome && nome.trim() !== "") {
        alert(`👋 Olá, ${nome}! Que bom ter você por aqui!`);
    } else {
        alert("Tudo bem! Não precisa dizer seu nome. 😊");
    }
});
```

**Conceitos:**

- `prompt()` — abre uma caixa de entrada
- `nome && ...` — verifica se `nome` **não** é vazio/null
- `trim()` — remove espaços no começo/fim
- `!==` — operador "diferente"

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da página
- **JavaScript ES6** — Interatividade
- **Visual Studio Code** — Editor
- **Live Server** — Testes locais
- **DevTools (F12)** — Depuração

## 🚀 Como Executar o Projeto

### 1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/vh-burger.git
```

### 2. **Acesse a pasta:**

```bash
cd vh-burger/v1+js1
```

### 3. **Abra o `index.html` no navegador:**

- Clique duas vezes no arquivo, ou
- Use a extensão **Live Server** do VS Code.

## 🔍 Testes Realizados

- [x] A saudação muda conforme a hora do dia
- [x] O relógio atualiza a cada segundo
- [x] O status indica corretamente aberto/fechado
- [x] O botão "Fazer Pedido" incrementa o contador
- [x] O alerta mostra o número correto do pedido
- [x] O botão "Me Cumprimente" pede o nome
- [x] Cancelar o prompt mostra mensagem padrão
- [x] As mensagens aparecem no console

## 📚 Aprendizados

Durante o desenvolvimento desta versão, foram aplicados:

- **Variáveis:** `const` (não muda) e `let` (pode mudar)
- **Template strings:** `` `${variável}` `` para concatenar
- **Condicionais:** `if`, `else if`, `else`
- **Operadores lógicos:** `&&` (E), `||` (OU)
- **Funções:** declaradas e anônimas
- **DOM:** `getElementById`, `textContent`
- **Eventos:** `addEventListener("click", ...)`
- **Timers:** `setInterval`
- **Datas:** `new Date()`, `getHours()`, `getDay()`
- **Entrada/Saída:** `alert`, `prompt`, `console.log`

## 🆚 Diferenças entre v1 e v1+js1

| Aspecto | v1 | v1+js1 |
|---------|----|--------|
| HTML | ✅ | ✅ (mesma estrutura) |
| JavaScript | ❌ | ✅ 6 funcionalidades |
| Interatividade | ❌ | ✅ Botões e relógio |
| Saudações dinâmicas | ❌ | ✅ |
| Depuração com `console.log` | ❌ | ✅ |
| Status de funcionamento | ❌ | ✅ |

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
|--------|----------|:------:|
| **js1** | Fundamentos (variáveis, funções, eventos) | ✅ |
| **js2** | Arrays e objetos | ⏳ |
| **js3** | `for`, `forEach`, loops | ⏳ |
| **js4** | Criar elementos dinamicamente | ⏳ |
| **js5** | Validar formulários | ⏳ |
| **js6** | `localStorage` | ⏳ |
| **js7** | Fetch/APIs | ⏳ |
| **js8** | Módulos ES6 (`import`/`export`) | ⏳ |

## 👨‍💻 Autor

Desenvolvido como parte da **Atividade 2 – Linguagem de Marcação**  
**SA 1 – Desafio 2: Dando vida ao conteúdo com HTML**  
**Módulo extra:** Introdução ao JavaScript

## 📄 Licença

Este projeto é de uso educacional e está sob a licença MIT.

---

> 💡 **Dica:** Abra o Console (`F12`) para ver as mensagens de `console.log()` e detectar possíveis erros!
