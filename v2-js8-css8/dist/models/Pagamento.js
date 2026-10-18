export class PagamentoPix {
    processar(total) {
        return `⚡ Gerando QR Code PIX no valor de R$ ${total.toFixed(2)}.`;
    }
}
export class PagamentoCartao {
    processar(total) {
        return `💳 Processando cartão no valor de R$ ${total.toFixed(2)}. Aguarde...`;
    }
}
export class PagamentoDinheiro {
    processar(total) {
        return `💵 Pagamento em dinheiro: R$ ${total.toFixed(2)}. Tenha o troco!`;
    }
}
export function criarEstrategiaPagamento(tipo) {
    switch (tipo) {
        case "pix": return new PagamentoPix();
        case "cartao": return new PagamentoCartao();
        case "dinheiro": return new PagamentoDinheiro();
        default: throw new Error("Pagamento inválido");
    }
}
//# sourceMappingURL=Pagamento.js.map