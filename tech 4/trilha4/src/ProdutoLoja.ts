interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[] = [
        { codigo: 1, nome: "Teclado Mecânico" },
        { codigo: 2, nome: "Mouse Gamer" },
        { codigo: 3, nome: "Headset Bluetooth" }
    ];

    constructor() {}

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(p => p.codigo === codigo);
    }
}

const loja = new Loja(); 
console.log(loja.buscarProdutoPorCodigo(3));
