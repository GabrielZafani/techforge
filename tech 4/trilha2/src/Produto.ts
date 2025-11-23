class Produto {
    nome:string;
    preco:number;
    quantidade:number;

    constructor( nome:string, preco:number, quantidade:number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade; 
    }

    calculo() {
         return this.preco * this.quantidade 
    }

    detalhesProduto(): string {
        
        return `nome: ${this.nome}, preco: ${this.preco}, quantidade: ${this.quantidade}, total: ${this.calculo()}.`;
    }



}

let mouse = new Produto ("mouse sem fio", 190, 1)
let teclado = new Produto ("teclado sem fio", 270, 3)
console.log(mouse.calculo())
console.log(teclado.calculo())
console.log(mouse.detalhesProduto())
console.log(teclado.detalhesProduto())
