

interface Documento {
    titulo: string;
    conteudo:string;

}

class Texto implements Documento {
    titulo: string;
    conteudo:string;

    constructor ( titulo: string, conteudo:string) {
        this.titulo = titulo;
        this.conteudo = conteudo;

    }

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`
    }


}

let doc = new Texto ("Resuma da aula 5", "Aula sobre POO e Interface")
console.log(doc)