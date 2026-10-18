// src/models/Pagamento.ts
export interface PagamentoStrategy {
    processar(total: number): string;
}

export class PagamentoPix implements PagamentoStrategy {
    processar(total: number): string {
        return `⚡ Gerando QR Code PIX no valor de R$ ${total.toFixed(2)}.`;
    }
}

export class PagamentoCartao implements PagamentoStrategy {
    processar(total: number): string {
        return `💳 Processando cartão no valor de R$ ${total.toFixed(2)}. Aguarde...`;
    }
}

export class PagamentoDinheiro implements PagamentoStrategy {
    processar(total: number): string {
        return `💵 Pagamento em dinheiro: R$ ${total.toFixed(2)}. Tenha o troco!`;
    }
}

export function criarEstrategiaPagamento(tipo: string): PagamentoStrategy {
    switch (tipo) {
        case "pix": return new PagamentoPix();
        case "cartao": return new PagamentoCartao();
        case "dinheiro": return new PagamentoDinheiro();
        default: throw new Error("Pagamento inválido");
    }
}