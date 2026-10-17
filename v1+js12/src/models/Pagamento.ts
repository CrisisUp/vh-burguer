// src/models/Pagamento.ts

export interface PagamentoStrategy {
    processar(valor: number): string;
}

export class PagamentoPix implements PagamentoStrategy {
    processar(valor: number): string {
        return `⚡ Gerando QR Code PIX no valor de R$ ${valor.toFixed(2)}. Aprovação imediata!`;
    }
}

export class PagamentoCartao implements PagamentoStrategy {
    processar(valor: number): string {
        return `💳 Processando cartão no valor de R$ ${valor.toFixed(2)}. Aguarde a confirmação.`;
    }
}

export class PagamentoDinheiro implements PagamentoStrategy {
    processar(valor: number): string {
        return `💵 Pagamento em dinheiro: R$ ${valor.toFixed(2)}. Tenha o troco preparado!`;
    }
}

export function criarPagamento(tipo: string): PagamentoStrategy {
    switch (tipo) {
        case "pix":
            return new PagamentoPix();
        case "cartao":
            return new PagamentoCartao();
        case "dinheiro":
            return new PagamentoDinheiro();
        default:
            throw new Error("Forma de pagamento desconhecida.");
    }
}