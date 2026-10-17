# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js4)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js4** do site da **VH Burger**.

Nesta etapa, evoluímos do **js3** (segurança e persistência) para o **módulo 4: Validação de Formulários e Tratamento de Erros**, criando um formulário de checkout que impede o envio de dados inválidos.

## 🎯 Objetivo da v1+js4

Aplicar conceitos avançados de JavaScript para formulários:

- **Capturar** o envio (`event.preventDefault()`)
- **Validar** cada campo individualmente
- **Expressões Regulares (Regex)** para formatos
- **Máscaras** de digitação em tempo real
- **Feedback visual** (cores verde/vermelho)
- **Foco automático** no primeiro erro
- **Mensagens de erro** acessíveis

## 📁 Estrutura do Projeto

```text
v1+js4/
│
├── index.html          # Formulário de checkout validado
└── README.md           # Esta documentação
```

## 📄 Funcionalidades

| # | Funcionalidade | Conceitos JS |
|---|----------------|--------------|
| 1 | Capturar `submit` | `addEventListener("submit", ...)` |
| 2 | Impedir recarregamento | `event.preventDefault()` |
| 3 | Validar nome (mín. 3) | `trim()`, `length` |
| 4 | Validar telefone | Regex `/^\(\d{2}\) \d{4,5}-\d{4}$/` |
| 5 | Validar CEP | Regex `/^\d{5}-\d{3}$/` |
| 6 | Validar endereço | `length` |
| 7 | Validar pagamento | `select.value !== ""` |
| 8 | Máscara de telefone | `input`, regex `replace` |
| 9 | Máscara de CEP | `input`, regex `replace` |
| 10 | Feedback visual | `classList.add/remove` |
| 11 | Foco no erro | `elemento.focus()` |
| 12 | Limpar form | `form.reset()` |
| 13 | Mensagem temporária | `setTimeout` |

## ✅ Checklist Técnico

### Formulário

- [x] `<form novalidate>` (desativa validação nativa)
- [x] `novalidate` para controlar via JS
- [x] Campo nome (text)
- [x] Campo telefone (text com máscara)
- [x] Campo CEP (text com máscara)
- [x] Campo endereço (text)
- [x] Select pagamento
- [x] `<button type="submit">`

### Validação

- [x] Validação campo a campo (funções separadas)
- [x] Retorno `true/false`
- [x] Todas as validações rodam no `submit`
- [x] `if (tudoValido)` processa o pedido
- [x] `querySelector(".campo-invalido")` foca no erro

### Regex

- [x] Telefone: `/^\(\d{2}\) \d{4,5}-\d{4}$/`
- [x] CEP: `/^\d{5}-\d{3}$/`

### Máscaras (input event)

- [x] Telefone formata enquanto digita
- [x] CEP formata enquanto digita
- [x] Uso de `replace(/\D/g, "")` para limpar

### UX

- [x] Classes CSS `.campo-valido` / `.campo-invalido`
- [x] Mensagens de erro só aparecem quando necessário
- [x] `focus()` no primeiro erro
- [x] Mensagem de sucesso temporária (`setTimeout`)
- [x] `form.reset()` após sucesso

## 🧩 Detalhamento Técnico

### Prevenir recarregamento

```javascript
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Crucial!
    // ...
});
```

### Regex de Telefone

```javascript
const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
regex.test("(11) 99999-9999"); // true
```

### Máscara de CEP

```javascript
inputCep.addEventListener("input", function(e) {
    let valor = e.target.value.replace(/\D/g, ""); // Só números
    valor = valor.substring(0, 8);
    if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
    }
    e.target.value = valor;
});
```

### Validação com feedback visual

```javascript
function validarNome() {
    const valor = inputNome.value.trim();
    const erro = document.getElementById("erro-nome");

    if (valor.length >= 3) {
        inputNome.classList.add("campo-valido");
        inputNome.classList.remove("campo-invalido");
        erro.classList.remove("ativo");
        return true;
    } else {
        inputNome.classList.add("campo-invalido");
        inputNome.classList.remove("campo-valido");
        erro.classList.add("ativo");
        return false;
    }
}
```

## 🛠️ Tecnologias

- HTML5 (formulários)
- JavaScript ES6 (eventos, regex, DOM)
- CSS básico (feedback visual)
- Live Server

## 🚀 Como Executar

```bash
cd vh-burger/v1+js4
```

Abra `index.html` ou use Live Server.

## 🔍 Testes Realizados

- [x] Envio vazio bloqueia e mostra erros
- [x] Nome "Jo" rejeita, "João" aceita
- [x] Telefone é mascarado enquanto digita
- [x] CEP é mascarado enquanto digita
- [x] Formulário válido mostra mensagem de sucesso
- [x] Página **não recarrega** ao enviar
- [x] `focus()` vai para o primeiro erro
- [x] `form.reset()` limpa após sucesso

## 📚 Aprendizados

- `event.preventDefault()` para controlar envios
- `novalidate` para controlar validação via JS
- Expressões Regulares (regex) para formatos complexos
- Máscaras de digitação em tempo real
- Feedback visual (cores + mensagens)
- `elemento.focus()` para acessibilidade
- `form.reset()` para limpar
- `setTimeout` para mensagens temporárias

## 🆚 Diferenças js3 → js4

| Recurso | js3 | js4 |
|---------|-----|-----|
| Formulário | ❌ | ✅ |
| `preventDefault` | ❌ | ✅ |
| Regex | ❌ | ✅ |
| Máscaras | ❌ | ✅ |
| Feedback visual | ❌ | ✅ |
| `focus()` | ❌ | ✅ |
| `setTimeout` | ❌ | ✅ |

## 🗺️ Roadmap de JavaScript

| Módulo | Conteúdo | Status |
|--------|----------|:------:|
| js1 | Fundamentos | ✅ |
| js2 | Arrays, objetos, filter/find | ✅ |
| js3 | createElement, localStorage | ✅ |
| **js4** | **Validação de formulário** | **✅** |
| js5 | Fetch/API (dados externos) | ⏳ |
| js6 | `async/await` | ⏳ |
| js7 | Módulos ES6 | ⏳ |

## 👨‍💻 Autor

**Atividade 2 – Linguagem de Marcação**  
SA 1 – Desafio 2: Dando vida ao conteúdo com HTML  
**Módulo extra:** JavaScript — nível 4

## 📄 Licença

MIT — uso educacional.

---

> 💡 **Dica:** Abra o Console (`F12`) e tente enviar o formulário para ver os logs de validação!
