// js/models/Pagamento.js

// 1. Interface base (Strategy)
export class PagamentoStrategy {
  processar(valor) {
    throw new Error(
      "O método processar() deve ser implementado na classe filha.",
    );
  }
}

// 2. Estratégia: PIX
export class PagamentoPix extends PagamentoStrategy {
  processar(valor) {
    return `⚡ Gerando QR Code PIX no valor de R$ ${valor.toFixed(2)}. Aprovação imediata!`;
  }
}

// 3. Estratégia: Cartão
export class PagamentoCartao extends PagamentoStrategy {
  processar(valor) {
    return `💳 Processando cartão no valor de R$ ${valor.toFixed(2)}. Aguarde a confirmação da operadora...`;
  }
}

// 4. Estratégia: Dinheiro
export class PagamentoDinheiro extends PagamentoStrategy {
  processar(valor) {
    return `💵 Pagamento em dinheiro: R$ ${valor.toFixed(2)}. Tenha o troco preparado!`;
  }
}

// 5. Fábrica (Factory) para escolher a estratégia
export function criarPagamento(tipo) {
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
