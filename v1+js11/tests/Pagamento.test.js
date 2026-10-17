// tests/Pagamento.test.js
import {
  PagamentoCartao,
  PagamentoDinheiro,
  PagamentoPix,
  criarPagamento,
} from "../js/models/Pagamento.js";

describe("Pagamentos (Strategy)", () => {
  // ----------------------------------------
  // TESTE 1: PIX
  // ----------------------------------------
  it("PIX deve gerar mensagem com QR Code e valor", () => {
    const pagamento = new PagamentoPix();
    const mensagem = pagamento.processar(100.0);

    expect(mensagem).toContain("PIX");
    expect(mensagem).toContain("100.00");
  });

  // ----------------------------------------
  // TESTE 2: Cartão
  // ----------------------------------------
  it("Cartão deve processar com valor", () => {
    const pagamento = new PagamentoCartao();
    const mensagem = pagamento.processar(50.0);

    expect(mensagem).toContain("cartão");
    expect(mensagem).toContain("50.00");
  });

  // ----------------------------------------
  // TESTE 3: Dinheiro
  // ----------------------------------------
  it("Dinheiro deve mencionar troco", () => {
    const pagamento = new PagamentoDinheiro();
    const mensagem = pagamento.processar(30.0);

    expect(mensagem).toContain("dinheiro");
    expect(mensagem).toContain("troco");
  });

  // ----------------------------------------
  // TESTE 4: Factory
  // ----------------------------------------
  it("criarPagamento('pix') deve retornar PagamentoPix", () => {
    const pagamento = criarPagamento("pix");
    expect(pagamento).toBeInstanceOf(PagamentoPix);
  });

  it("criarPagamento('cartao') deve retornar PagamentoCartao", () => {
    const pagamento = criarPagamento("cartao");
    expect(pagamento).toBeInstanceOf(PagamentoCartao);
  });

  // ----------------------------------------
  // TESTE 5: Erro em tipo inválido
  // ----------------------------------------
  it("criarPagamento('bitcoin') deve lançar erro", () => {
    expect(() => criarPagamento("bitcoin")).toThrow();
  });
});

// ============================================
// TESTES ADICIONAIS: Factory com todos os tipos
// ============================================

it("criarPagamento('dinheiro') deve retornar PagamentoDinheiro", () => {
  const pagamento = criarPagamento("dinheiro");
  expect(pagamento).toBeInstanceOf(PagamentoDinheiro);
});

it("PagamentoPix deve conter a palavra 'QR Code'", () => {
  const p = new PagamentoPix();
  expect(p.processar(100)).toContain("QR Code");
});
