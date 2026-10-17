// tests/Carrinho.test.js
import { Carrinho } from "../js/models/Carrinho.js";

// ============================================
// MOCK DO localStorage
// ============================================
const mockStorage = {};
global.localStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, value) => {
    mockStorage[key] = value;
  },
  removeItem: (key) => {
    delete mockStorage[key];
  },
  clear: () => {
    Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
  },
};

// ============================================
// SUÍTE DE TESTES
// ============================================
describe("Carrinho", () => {
  // Roda ANTES de cada teste
  beforeEach(() => {
    global.localStorage.clear(); // 1. Limpa o storage falso
    Carrinho._resetarParaTestes(); // 2. Destrói o Singleton
  });

  // ----------------------------------------
  // TESTE 1: Instância Única (Singleton)
  // ----------------------------------------
  it("deve ser um Singleton (sempre a mesma instância)", () => {
    const c1 = new Carrinho();
    const c2 = new Carrinho();
    expect(c1).toBe(c2);
  });

  // ----------------------------------------
  // TESTE 2: Carrinho começa vazio
  // ----------------------------------------
  it("deve começar vazio", () => {
    const carrinho = new Carrinho();
    expect(carrinho.vazio).toBe(true);
    expect(carrinho.quantidadeTotal).toBe(0);
    expect(carrinho.valorTotal).toBe(0);
  });

  // ----------------------------------------
  // TESTE 3: Adicionar um produto
  // ----------------------------------------
  it("deve adicionar um produto corretamente", () => {
    const carrinho = new Carrinho();
    const produto = { id: 1, nome: "VH Clássico", preco: 28.0 };

    carrinho.adicionar(produto);

    expect(carrinho.itens.length).toBe(1);
    expect(carrinho.itens[0].nome).toBe("VH Clássico");
    expect(carrinho.quantidadeTotal).toBe(1);
    expect(carrinho.valorTotal).toBe(28.0);
  });

  // ----------------------------------------
  // TESTE 4: Adicionar 2x o mesmo produto
  // ----------------------------------------
  it("deve incrementar a quantidade ao adicionar o mesmo produto duas vezes", () => {
    const carrinho = new Carrinho();
    const produto = { id: 1, nome: "VH Clássico", preco: 28.0 };

    carrinho.adicionar(produto);
    carrinho.adicionar(produto);

    expect(carrinho.itens.length).toBe(1);
    expect(carrinho.itens[0].quantidade).toBe(2);
    expect(carrinho.quantidadeTotal).toBe(2);
    expect(carrinho.valorTotal).toBe(56.0);
  });

  // ----------------------------------------
  // TESTE 5: Remover um produto (quantidade = 1)
  // ----------------------------------------
  it("deve remover um produto corretamente", () => {
    const carrinho = new Carrinho();
    const produto = { id: 1, nome: "VH Clássico", preco: 28.0 };

    carrinho.adicionar(produto);
    carrinho.remover(1);

    expect(carrinho.vazio).toBe(true);
    expect(carrinho.valorTotal).toBe(0);
  });

  // ----------------------------------------
  // TESTE 6: Remover produto com quantidade > 1 (decrementar)
  // ----------------------------------------
  it("remover item com quantidade > 1 deve apenas decrementar", () => {
    const carrinho = new Carrinho();
    const produto = { id: 1, nome: "A", preco: 10 };

    carrinho.adicionar(produto);
    carrinho.adicionar(produto); // quantidade = 2
    carrinho.remover(1); // deve virar 1

    expect(carrinho.itens[0].quantidade).toBe(1);
    expect(carrinho.vazio).toBe(false);
  });

  // ----------------------------------------
  // TESTE 7: Limpar o carrinho
  // ----------------------------------------
  it("deve limpar todos os itens", () => {
    const carrinho = new Carrinho();
    carrinho.adicionar({ id: 1, nome: "A", preco: 10 });
    carrinho.adicionar({ id: 2, nome: "B", preco: 20 });

    carrinho.limpar();

    expect(carrinho.itens).toEqual([]);
    expect(carrinho.quantidadeTotal).toBe(0);
  });

  // ----------------------------------------
  // TESTE 8: Soma de múltiplos itens
  // ----------------------------------------
  it("deve calcular o valor total corretamente com múltiplos itens", () => {
    const carrinho = new Carrinho();
    carrinho.adicionar({ id: 1, nome: "A", preco: 10 });
    carrinho.adicionar({ id: 2, nome: "B", preco: 20 });
    carrinho.adicionar({ id: 2, nome: "B", preco: 20 }); // x2

    expect(carrinho.valorTotal).toBe(50);
    expect(carrinho.quantidadeTotal).toBe(3);
  });

  // ----------------------------------------
  // TESTE 9: Persistência no localStorage
  // ----------------------------------------
  it("deve persistir o carrinho no localStorage", () => {
    const carrinho = new Carrinho();
    carrinho.adicionar({ id: 1, nome: "A", preco: 10 });

    const salvo = JSON.parse(global.localStorage.getItem("vh-carrinho"));
    expect(salvo.length).toBe(1);
    expect(salvo[0].nome).toBe("A");
  });
});
