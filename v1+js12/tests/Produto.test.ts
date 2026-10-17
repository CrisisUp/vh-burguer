// tests/Produto.test.ts
import { Bebida } from "../src/models/Bebida.js";
import { Hamburguer } from "../src/models/Hamburguer.js";
import { Produto } from "../src/models/Produto.js";

describe("Produtos", () => {
    it("Hamburguer deve ser instância de Produto", () => {
        const h = new Hamburguer(1, "VH Clássico", 28.00, false, "ao ponto");
        expect(h).toBeInstanceOf(Hamburguer);
        expect(h).toBeInstanceOf(Produto);
    });

    it("preço formatado deve ser R$ 28,00", () => {
        const h = new Hamburguer(1, "VH Clássico", 28.00, false, "ao ponto");
        expect(h.precoFormatado).toBe("R$ 28,00");
    });

    it("Hamburguer deve grelhar e Bebida deve servir", () => {
        const h = new Hamburguer(1, "VH Clássico", 28.00, false, "ao ponto");
        const b = new Bebida(2, "Coca", 7.00, false, "350ml", true);

        expect(h.preparar()).toContain("Grelhando");
        expect(b.preparar()).toContain("geladeira");
    });

    it("Bebida não gelada deve usar 'Servindo'", () => {
        const b = new Bebida(1, "Coca", 7.00, false, "350ml", false);
        expect(b.preparar()).toContain("Servindo");
    });

    it("deve adicionar bacon e aumentar o preço em R$ 5", () => {
        const h = new Hamburguer(1, "VH Clássico", 28.00, false, "ao ponto");
        const msg = h.adicionarBacon();
        expect(h.preco).toBe(33.00);
        expect(msg).toContain("bacon");
    });

    it("produto esgotado não deve estar disponível", () => {
        const h = new Hamburguer(1, "VH Veggie", 30.00, true, "ao ponto");
        expect(h.disponivel).toBe(false);
    });

    it("não deve permitir instanciar Produto diretamente", () => {
        // @ts-expect-error - estamos testando que a classe é abstrata
        expect(() => new Produto(1, "X", 10, "hamburguer")).toThrow();
    });
});