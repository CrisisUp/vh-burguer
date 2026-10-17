# 🧪 TESTES.md — Roteiro de Testes da v1+js4 (Formulário)

Este documento contém os testes para validar o formulário de checkout com máscaras e validações (js4).

## ✅ Preparação

- [ ] Arquivo `v1+js4/index.html` aberto no navegador.

## 🧪 1. Testes de Máscaras de Digitação

| # | Ação | Resultado Esperado | Status |
|---|------|-------------------|:------:|
| 1.1 | Digitar `11999998888` no telefone | O campo deve formatar para `(11) 99999-8888` sozinho | ⬜ |
| 1.2 | Apagar um número do telefone | A máscara deve se ajustar sem quebrar | ⬜ |
| 1.3 | Digitar letras no telefone | As letras devem ser ignoradas | ⬜ |
| 1.4 | Digitar `12345678` no CEP | O campo deve formatar para `12345-678` | ⬜ |

## 🧪 2. Testes de Validação (Submissão)

| # | Ação | Resultado Esperado | Status |
|---|------|-------------------|:------:|
| 2.1 | Clicar em "Finalizar" com tudo vazio | Campos ficam com borda vermelha, erros aparecem | ⬜ |
| 2.2 | Preencher Nome com "Jo" e clicar em enviar | Erro de mínimo 3 letras | ⬜ |
| 2.3 | Não selecionar forma de pagamento | Erro no select | ⬜ |
| 2.4 | Digitar endereço curto (ex: "Rua A") | Erro de mínimo 10 caracteres | ⬜ |
| 2.5 | Enviar com erro e olhar o cursor | O cursor (foco) deve pular para o primeiro campo inválido | ⬜ |

## 🧪 3. Testes de Sucesso

| # | Ação | Resultado Esperado | Status |
|---|------|-------------------|:------:|
| 3.1 | Preencher tudo corretamente e enviar | Mensagem verde de sucesso aparece | ⬜ |
| 3.2 | Após enviar, olhar os campos | Todos os campos foram limpos (`reset`) | ⬜ |
| 3.3 | Após enviar, olhar as bordas | As bordas verdes sumiram | ⬜ |
| 3.4 | Após 4 segundos | A mensagem verde desaparece sozinha | ⬜ |
| 3.5 | Abrir o Console (F12) durante o envio | Mostra o log `✅ Formulário válido` e os dados | ⬜ |
