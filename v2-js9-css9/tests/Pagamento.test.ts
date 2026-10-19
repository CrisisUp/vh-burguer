import { PagamentoCartao, PagamentoDinheiro, PagamentoPix, criarEstrategiaPagamento } from "../src/models/Pagamento.js";

describe("Pagamentos (Strategy)", () => {
    it("PIX deve gerar mensagem com QR Code", () => {
        const p = new PagamentoPix();
        expect(p.processar(100)).toContain("QR Code");
    });

    it("Cartão deve processar o valor", () => {
        const p = new PagamentoCartao();
        expect(p.processar(50)).toContain("50.00");
    });

    it("Dinheiro deve mencionar troco", () => {
        const p = new PagamentoDinheiro();
        expect(p.processar(30)).toContain("troco");
    });

    it("Factory deve retornar a estratégia correta", () => {
        expect(criarEstrategiaPagamento("pix")).toBeInstanceOf(PagamentoPix);
        expect(criarEstrategiaPagamento("cartao")).toBeInstanceOf(PagamentoCartao);
        expect(criarEstrategiaPagamento("dinheiro")).toBeInstanceOf(PagamentoDinheiro);
    });

    it("Factory deve lançar erro para tipo inválido", () => {
        expect(() => criarEstrategiaPagamento("bitcoin")).toThrow();
    });
});