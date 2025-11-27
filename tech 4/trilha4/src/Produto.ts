

interface Produto {
    id: number;
    nome: string;
    preco: number;


}

class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor (id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

let p1 = new ItemLoja (1,"mouse",190)
console.log(p1)
