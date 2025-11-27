
interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}


class Biblioteca {
    livros: Livro[] = [
        { titulo: "1984", autor: "George Orwell", disponivel: true },
        { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: false },
        { titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: true, },
        { titulo: "A Guerra dos Tronos", autor: "George R. R. Martin", disponivel: false },
    ];

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel === true);
    }
}


const biblioteca = new Biblioteca();

console.log(biblioteca.buscarLivrosDisponiveis());
