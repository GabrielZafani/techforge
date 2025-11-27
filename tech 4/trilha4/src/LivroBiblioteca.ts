
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}


class BibliotecaGestao {
    livros: LivroBiblioteca[] = [
        { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true },
        { titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: false },
        { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
        { titulo: "A Guerra dos Tronos", autor: "George R. R. Martin", genero: "Fantasia", disponivel: false },
        { titulo: "A Culpa é das Estrelas", autor: "John Green", genero: "Romance", disponivel: true }
    ];

    
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }

 
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }

   
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}


const gestao = new BibliotecaGestao();

console.log("Gênero: ", gestao.filtrarPorGenero("ROMANCE"));
console.log("Autor: ", gestao.buscarPorAutor("machado de assis"));
console.log("Disponíveis ordenados:", gestao.obterLivrosDisponiveisOrdenados());
