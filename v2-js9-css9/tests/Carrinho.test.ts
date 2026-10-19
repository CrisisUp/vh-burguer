// tests/Carrinho.test.ts
import { Carrinho } from "../src/models/Carrinho.js";
import { Hamburguer } from "../src/models/Hamburguer.js";

// Mock do localStorage
const mockStorage: Record<string, string> = {};
(global as any).localStorage = {
    getItem: (key: string) => mockStorage[key] || null,
    setItem: (key: string, value: string) => { mockStorage[key] = value; },
    removeItem: (key: string) => { delete mockStorage[key]; },
    clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

const criarProduto = (id: number, nome = "Teste", preco = 10) =>
    new Hamburguer(id, nome, preco, false, "ao ponto");

describe("Carrinho", () => {
    beforeEach(() => {
        global.localStorage.clear();
        Carrinho._resetarParaTestes(); 
    });

    it("deve ser um Singleton (mesma instância)", () => {
        const c1 = new Carrinho();
        const c2 = new Carrinho();
        expect(c1).toBe(c2);
    });

    it("deve começar vazio", () => {
        const carrinho = new Carrinho();
        expect(carrinho.vazio).toBe(true);
        expect(carrinho.quantidadeTotal).toBe(0);
        expect(carrinho.total).toBe(0);
    });

    it("deve adicionar um item e calcular total", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "VH Clássico", 28));
        
        expect(carrinho.itens.length).toBe(1);
        expect(carrinho.total).toBe(28);
    });

    it("deve remover um item e zerar o total", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "VH Clássico", 28));
        carrinho.remover(1);
        
        expect(carrinho.vazio).toBe(true);
        expect(carrinho.total).toBe(0);
    });

    it("deve calcular múltiplos itens", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "A", 10));
        carrinho.adicionar(criarProduto(2, "B", 20));
        carrinho.adicionar(criarProduto(2, "B", 20));
        
        expect(carrinho.quantidadeTotal).toBe(3);
        expect(carrinho.total).toBe(50);
    });

    it("deve retornar a mesma instância (linha do Singleton)", () => {
        const c1 = new Carrinho();
        c1.adicionar(criarProduto(1, "Teste", 10));
        
        const c2 = new Carrinho(); 
        
        expect(c2.itens.length).toBe(1); 
        expect(c2.total).toBe(10);
    });

    it("não deve fazer nada ao tentar remover um ID inexistente", () => {
        const carrinho = new Carrinho();
        carrinho.adicionar(criarProduto(1, "A", 10));
        
        carrinho.remover(999); 
        
        expect(carrinho.itens.length).toBe(1);
        expect(carrinho.total).toBe(10);
    });

    // ⬇️ TESTE CORRIGIDO (c2 no lugar de carrinho) ⬇️
    it("deve cobrir os casos de borda (early returns)", () => {
        // 1. Cobre a linha 21 (retorno do Singleton)
        const c1 = new Carrinho();
        c1.adicionar(criarProduto(1, "Teste", 10));
        
        const c2 = new Carrinho(); // Aciona a linha 21
        expect(c2.itens.length).toBe(1);

        // 2. Cobre a linha 50 (tentativa de remover item inexistente)
        c2.remover(999); 
        
        // 3. Cobre as linhas 58-59 (reset do Singleton)
        Carrinho._resetarParaTestes();
        expect(c2.itens.length).toBe(1); // Estado não mudou
    });
});