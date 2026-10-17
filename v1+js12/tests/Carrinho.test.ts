// tests/Carrinho.test.ts
import { Carrinho } from "../src/models/Carrinho.js";
import { Hamburguer } from "../src/models/Hamburguer.js";

// ============================================
// MOCK DO localStorage
// ============================================
const mockStorage: Record<string, string> = {};
(global as any).localStorage = {
    getItem: (key: string) => mockStorage[key] || null,
    setItem: (key: string, value: string) => {
        mockStorage[key] = value;
    },
    removeItem: (key: string) => {
        delete mockStorage[key];
    },
    clear: () => {
        Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
    },
};

// Helper: cria um produto qualquer
const criarProduto = (id: number, nome = "Teste", preco = 10) =>
    new Hamburguer(id, nome, preco, false, "ao ponto");

// ============================================
// SUÍTE DE TESTES
// ============================================
describe("Carrinho", () => {
    beforeEach(() => {
        global.localStorage.clear();
        Carrinho._resetarParaTestes();
    });

    // ----------------------------------------
    // TESTE 1: Singleton — COBRE LINHA 10
    // ----------------------------------------
    it("deve ser um Singleton (sempre a mesma instância)", () => {
        const c1 = new Carrinho();
        const c2 = new Carrinho();

        expect(c1).toBe(c2);

        // Prova extra: adiciona em um e vê no outro
        c1.adicionar(criarProduto(1, "VH Clássico", 28));
        expect(c2.itens.length).toBe(1);
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
        carrinho.adicionar(criarProduto(1, "VH Clássico", 28));

        expect(carrinho.itens.length).toBe(1);
        expect(carrinho.itens[0].nome).toBe("VH Clássico");
        expect(carrinho.quantidadeTotal).toBe(1);
        expect(carrinho.valorTotal).toBe(28);
    });

    // ----------------------------------------
    // TESTE 4: Adicionar 2x o mesmo produto
    // ----------------------------------------
    it("deve incrementar a quantidade ao adicionar o mesmo produto duas vezes", () => {
        const carrinho = new Carrinho();
        const produto = criarProduto(1, "VH Clássico", 28);

        carrinho.adicionar(produto);
        carrinho.adicionar(produto);

        expect(carrinho.itens.length).toBe(1);
        expect(carrinho.itens[0].quantidade).toBe(2);
        expect(carrinho.quantidadeTotal).toBe(2);
        expect(carrinho.valorTotal).toBe(56);
    });

    // ----------------------------------------
    // TESTE 5: Remover produto com quantidade 1 — COBRE SPLICE (linha 43)
    // ----------------------------------------
    it("remover um produto com quantidade 1 deve excluí-lo da lista", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "VH Clássico", 28));

        expect(carrinho.itens.length).toBe(1);

        carrinho.remover(1);

        // 🔑 ESSA asserção cobre o splice:
        expect(carrinho.itens.length).toBe(0);
        expect(carrinho.vazio).toBe(true);
        expect(carrinho.valorTotal).toBe(0);
    });

    // ----------------------------------------
    // TESTE 6: Remover produto com quantidade > 1 (decrementa)
    // ----------------------------------------
    it("remover item com quantidade > 1 deve apenas decrementar", () => {
        const carrinho = new Carrinho();
        const produto = criarProduto(1, "A", 10);

        carrinho.adicionar(produto);
        carrinho.adicionar(produto); // quantidade = 2
        carrinho.remover(1); // deve virar 1

        expect(carrinho.itens.length).toBe(1);
        expect(carrinho.itens[0].quantidade).toBe(1);
        expect(carrinho.vazio).toBe(false);
    });

    // ----------------------------------------
    // TESTE 7: Remover item inexistente — NOVO (cobre o return da linha 37)
    // ----------------------------------------
    it("remover um ID inexistente não deve afetar o carrinho", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "A", 10));

        carrinho.remover(999); // ID que não existe

        expect(carrinho.itens.length).toBe(1);
        expect(carrinho.quantidadeTotal).toBe(1);
    });

    // ----------------------------------------
    // TESTE 8: Limpar o carrinho
    // ----------------------------------------
    it("deve limpar todos os itens", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "A", 10));
        carrinho.adicionar(criarProduto(2, "B", 20));

        carrinho.limpar();

        expect(carrinho.itens).toEqual([]);
        expect(carrinho.quantidadeTotal).toBe(0);
    });

    // ----------------------------------------
    // TESTE 9: Persistência no localStorage
    // ----------------------------------------
    it("deve persistir o carrinho no localStorage", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "A", 10));

        const salvo = JSON.parse(global.localStorage.getItem("vh-carrinho")!);
        expect(salvo.length).toBe(1);
        expect(salvo[0].nome).toBe("A");
    });

    // ----------------------------------------
    // TESTE 10: Recuperar do localStorage — NOVO (cobre o construtor)
    // ----------------------------------------
    it("deve recuperar itens salvos do localStorage ao iniciar", () => {
        // 1. Adiciona em um carrinho (salva no storage)
        const carrinho1 = new Carrinho();
        carrinho1.adicionar(criarProduto(1, "A", 10));

        // 2. Destrói o Singleton (simula "recarregar a página")
        Carrinho._resetarParaTestes();

        // 3. Cria um novo — deve carregar do storage
        const carrinho2 = new Carrinho();

        expect(carrinho2.itens.length).toBe(1);
        expect(carrinho2.itens[0].nome).toBe("A");
    });
});