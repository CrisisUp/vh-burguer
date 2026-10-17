// tests/Pagamento.test.ts
import {
    PagamentoCartao,
    PagamentoDinheiro,
    PagamentoPix,
    criarPagamento
} from "../src/models/Pagamento.js";

describe("Pagamentos (Strategy)", () => {
    it("PIX deve gerar mensagem com QR Code e valor", () => {
        const p = new PagamentoPix();
        const msg = p.processar(100.00);
        expect(msg).toContain("PIX");
        expect(msg).toContain("100.00");
    });

    it("Cartão deve processar com valor", () => {
        const p = new PagamentoCartao();
        const msg = p.processar(50.00);
        expect(msg).toContain("cartão");
        expect(msg).toContain("50.00");
    });

    it("Dinheiro deve mencionar troco", () => {
        const p = new PagamentoDinheiro();
        const msg = p.processar(30.00);
        expect(msg).toContain("dinheiro");
        expect(msg).toContain("troco");
    });

    it("criarPagamento('pix') deve retornar PagamentoPix", () => {
        expect(criarPagamento("pix")).toBeInstanceOf(PagamentoPix);
    });

    it("criarPagamento('cartao') deve retornar PagamentoCartao", () => {
        expect(criarPagamento("cartao")).toBeInstanceOf(PagamentoCartao);
    });

    it("criarPagamento('dinheiro') deve retornar PagamentoDinheiro", () => {
        expect(criarPagamento("dinheiro")).toBeInstanceOf(PagamentoDinheiro);
    });

    it("criarPagamento('bitcoin') deve lançar erro", () => {
        expect(() => criarPagamento("bitcoin")).toThrow();
    });
});