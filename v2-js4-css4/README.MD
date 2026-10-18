# 🍔 VH Burger - v2-js4-css4

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 📋 Sobre o Projeto

Quarta evolução do site multipáginas da VH Burger.

Esta pasta adiciona o **Checkout de Pedido** com validação de dados, máscaras de digitação e formulário estilizado.

## 🎯 O Que Foi Adicionado

### JavaScript (Interatividade)

- **Validação com Regex** (nome, email, telefone, CEP, endereço)
- **`event.preventDefault()`** para evitar recarregar
- **Máscaras de digitação** (telefone e CEP)
- **Feedback em tempo real** (`blur` nos campos)
- **Foco automático** no primeiro erro
- **Integração com o carrinho** (resumo + limpeza após envio)
- **Redirecionamento** após sucesso

### CSS (Visual)

- **Formulários estilizados** (inputs, selects, fieldset)
- **Estados visuais** (`.campo-valido` e `.campo-invalido`)
- **Animação shake** nos erros
- **Resumo do pedido** com borda amarela
- **Mensagem de sucesso** animada
- **Botões com hover** e transição

## 📁 Estrutura

```text
v2-js4-css4/
│
├── index.html
├── cardapio.html
├── sobre.html
├── contato.html      (agora é o checkout)
│
├── css/
│   └── style.css
│
└── js/
    ├── main.js
    ├── cardapio.js
    ├── carrinho.js
    └── checkout.js   (NOVO)
```

## 🚀 Como Executar

Abra cardapio.html
Adicione itens ao carrinho
Clique em "Finalizar Pedido"
Preencha o formulário
Confirme

## 🔍 Testes

```text
- [x] Validação de todos os campos (nome, email, tel, CEP, endereço)
- [x] Máscara de telefone e CEP
- [x] Feedback visual (bordas verdes/vermelhas)
- [x] Mensagens de erro individuais
- [x] Resumo do pedido no topo
- [x] Página NÃO recarrega ao enviar
- [x] Foco automático no primeiro erro
- [x] Carrinho é limpo após sucesso
- [x] Redirecionamento para home
```

## 🆚 Diferenças: v2-js3-css3 → v2-js4-css4

```text
| Aspecto                | v2-js3-css3           | v2-js4-css4              |
| ---------------------- | --------------------- | ------------------------ |
| Finalizar pedido       | Alert simples         | Formulário completo      |
| Validação              | ❌                    | ✅ Regex + máscaras      |
| Feedback visual        | ❌                    | ✅ Bordas + mensagens    |
| Resumo do pedido       | ❌                    | ✅ Integrado             |
| Carrinho esvaziado     | ❌                    | ✅ Após sucesso          |
| Redirecionamento       | ❌                    | ✅ Para home             |
```

## 🗺️ Roadmap

```text
| Módulo        | Foco                               | Status |
| ------------- | ---------------------------------- | ------ |
| v2-js1-css1   | Cores, fontes, saudação, relógio   | ✅     |
| v2-js2-css2   | Flexbox, Grid, Cards, Animações    | ✅     |
| v2-js3-css3   | localStorage + carrinho flutuante  | ✅     |
| v2-js4-css4   | Checkout validado + estilizado     | ✅     |
| v2-js5-css5   | Responsividade avançada + Dark mode| ⏳     |
```

Atividade 2 – Linguagem de Marcação
Módulo extra: Evolução v2 + JS + CSS

text

---

## 🎯 Próximos Passos (v2-js5-css5)

Depois de testar a `v2-js4-css4`:

```text
| Tecnologia | O que aprender                                     |
| ---------- | -------------------------------------------------- |
| JavaScript | Modo escuro persistente (localStorage + JS)        |
| CSS        | Variáveis dinâmicas e @media avançado              |
| HTML       | Botão de toggle de tema                            |
```

## 🚀 O Que Fazer Agora

```text
| Opção | Descrição                                       |
| ----- | ----------------------------------------------- |
| 🧪    | Testar a v2-js4-css4 e me reportar              |
| 📝    | Criar o TESTES.md da v2-js4-css4                |
| 🚀    | Avançar para v2-js5-css5                        |
| 🎨    | Adicionar mais animações ao checkout            |
```

Me diga o que prefere! 🍔💳🚀
