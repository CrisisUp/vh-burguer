// tests/Produto.test.js
import { Bebida } from "../js/models/Bebida.js";
import { Hamburguer } from "../js/models/Hamburguer.js";
import { Produto } from "../js/models/Produto.js";

describe("Produtos", () => {
  // ----------------------------------------
  // TESTE 1: Classe Produto é abstrata
  // ----------------------------------------
  it("não deve permitir instanciar Produto diretamente", () => {
    expect(() => new Produto(1, "X", 10, "hamburguer")).toThrow();
  });

  // ----------------------------------------
  // TESTE 2: Hamburguer herda de Produto
  // ----------------------------------------
  it("Hamburguer deve ser instância de Produto", () => {
    const h = new Hamburguer(1, "VH Clássico", 28.0, false, "ao ponto");
    expect(h).toBeInstanceOf(Hamburguer);
    expect(h).toBeInstanceOf(Produto); // Herança!
  });

  // ----------------------------------------
  // TESTE 3: Hamburguer formata preço
  // ----------------------------------------
  it("preço formatado deve ser R$ 28,00", () => {
    const h = new Hamburguer(1, "VH Clássico", 28.0, false, "ao ponto");
    expect(h.precoFormatado).toBe("R$ 28,00");
  });

  // ----------------------------------------
  // TESTE 4: Polimorfismo
  // ----------------------------------------
  it("Hamburguer deve grelhar e Bebida deve servir", () => {
    const h = new Hamburguer(1, "VH Clássico", 28.0, false, "ao ponto");
    const b = new Bebida(2, "Coca", 7.0, false, "350ml", true);

    expect(h.preparar()).toContain("Grelhando");
    expect(b.preparar()).toContain("geladeira");
  });

  // ----------------------------------------
  // TESTE 5: Esgotado
  // ----------------------------------------
  it("produto esgotado não deve estar disponível", () => {
    const h = new Hamburguer(1, "VH Veggie", 30.0, true, "ao ponto");
    expect(h.disponivel).toBe(false);
  });
});

// ============================================
// TESTES ADICIONAIS: Cobertura de métodos específicos
// ============================================

it("deve adicionar bacon e aumentar o preço em R$ 5", () => {
  const h = new Hamburguer(1, "VH Clássico", 28.0, false, "ao ponto");

  const mensagem = h.adicionarBacon();

  expect(h.preco).toBe(33.0); // 28 + 5
  expect(mensagem).toContain("bacon");
  expect(mensagem).toContain("33,00");
});

it("Bebida gelada deve mencionar 'geladeira' no preparar", () => {
  const b = new Bebida(1, "Coca", 7.0, false, "350ml", true);
  expect(b.preparar()).toContain("geladeira");
});

it("Bebida não gelada deve usar 'Servindo'", () => {
  const b = new Bebida(1, "Coca", 7.0, false, "350ml", false);
  expect(b.preparar()).toContain("Servindo");
});
