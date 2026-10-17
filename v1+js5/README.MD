# 🍔 VH Burger - Projeto de Linguagem de Marcação (v1 + js5)

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Sobre o Projeto

Esta é a versão **v1 + js5**, a **primeira integração completa** do sistema.

Unimos a lógica do **js3** (cardápio dinâmico e carrinho persistente) com a do **js4** (formulário de checkout validado), criando um fluxo real de e-commerce.

## 🎯 O Fluxo do Usuário

1. O usuário escolhe produtos no cardápio.
2. O carrinho salva tudo no `localStorage`.
3. Ao clicar em "Ir para o Checkout", o sistema verifica se há itens.
4. O formulário de dados pessoais aparece.
5. O usuário envia. O JS valida e cria um **objeto de pedido**.
6. O carrinho é esvaziado.

## 🧩 Conceitos Aplicados

- **Integração de Módulos** (juntar o código do js3 com o js4)
- **Estado Compartilhado** (o array `carrinho` alimenta o form e a lista)
- **Renderização Condicional** (a seção de checkout só aparece se o carrinho não estiver vazio)
- **Payload composto** (juntar dados do form + itens do carrinho em um único objeto antes de enviar)
- `scrollIntoView` para rolar até o formulário suavemente.

## 🆚 Evolução: js3 + js4 → js5

| Recurso | js3 | js4 | js5 (Integração) |
|---------|-----|-----|------------------|
| Carrinho | ✅ | ❌ | ✅ |
| Persistência (`localStorage`) | ✅ | ❌ | ✅ |
| Formulário | ❌ | ✅ | ✅ |
| Validação Regex | ❌ | ✅ | ✅ |
| Fluxo de Checkout | ❌ | ❌ | ✅ |

---
**Atividade 2 – Linguagem de Marcação**
Módulo extra: JavaScript — nível 5 (Integração)
