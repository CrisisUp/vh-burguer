import { Bebida } from "../src/models/Bebida.js";
import { Hamburguer } from "../src/models/Hamburguer.js";
import { Produto } from "../src/models/Produto.js";

describe("Produtos", () => {
    it("Hamburguer deve ser instância de Produto (Herança)", () => {
        const h = new Hamburguer(1, "VH Clássico", 28, false, "ao ponto");
        expect(h).toBeInstanceOf(Hamburguer);
        expect(h).toBeInstanceOf(Produto);
    });

    it("deve formatar o preço corretamente", () => {
        const h = new Hamburguer(1, "VH Clássico", 28, false, "ao ponto");
        expect(h.precoFormatado).toBe("R$ 28,00");
    });

    it("Hamburguer deve grelhar e Bebida deve servir (Polimorfismo)", () => {
        const h = new Hamburguer(1, "VH Clássico", 28, false, "ao ponto");
        const b = new Bebida(2, "Coca", 7, false, "350ml", true);

        expect(h.preparar()).toContain("Grelhando");
        expect(b.preparar()).toContain("geladeira");
    });

    it("produto esgotado não deve estar disponível", () => {
        const h = new Hamburguer(1, "VH Veggie", 30, true, "ao ponto");
        expect(h.disponivel).toBe(false);
    });

    it("não deve permitir instanciar Produto diretamente", () => {
        // @ts-expect-error - Testando que a classe é abstrata
        expect(() => new Produto({})).toThrow();
    });
});

// NOVOS TESTES:
    it("Bebida não gelada deve usar 'Servindo'", () => {
        const b = new Bebida(1, "Suco", 10, false, "500ml", false);
        expect(b.preparar()).toContain("Servindo");
    });

    it("deve adicionar bacon e aumentar o preço em R$ 5", () => {
        const h = new Hamburguer(1, "VH Clássico", 28, false, "ao ponto");
        
        const mensagem = h.adicionarBacon(); // Aciona as linhas 23-24
        
        expect(h.preco).toBe(33.00);
        expect(mensagem).toContain("bacon");
        expect(mensagem).toContain("33,00");
    });