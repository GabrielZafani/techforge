class Livro {
    titulo:string;
    autor:string;
    paginas:number;
    lido:boolean;


    constructor(titulo:string, autor:string, paginas:number, lido:boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcado() {
        if (this.lido) {
            console.log(`O livro "${this.titulo} ja estava marcado como lido`);
        }

        else {
            this.lido = true;
            console.log ("O livro foi marcado como lido");
        }
    }

     detalhesLivro(): string {
        const statusLeitura = this.lido ? "lido" : "não lido";
        return `Titulo: ${this.titulo}, autor: ${this.autor}, paginas: ${this.paginas}, status: ${statusLeitura}.`;
    }

}

let menino = new Livro ("O menino do pijama listrado", "John boyne", 192 );
let biografia = new Livro ("Auto Biografia", "Gabriel Zafani", 560 );
console.log(menino.marcado());
console.log(menino.detalhesLivro());
console.log(biografia.detalhesLivro());
