
abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}


class MoviesFavoriteManager extends FavoriteManager {
    private filmes: string[] = [];

    addFavorite(item: string): void {
       
        if (!this.filmes.includes(item)) {
            this.filmes.push(item);
        }

       
        this.filmes.sort();
    }

    getFavorites(): string[] {
        return this.filmes;
    }
}


class BooksFavoriteManager extends FavoriteManager {
    private livros: string[] = [];

    addFavorite(item: string): void {
        
        this.livros.unshift(item);
    }

    getFavorites(): string[] {
        return this.livros;
    }
}

const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Avatar");
filmes.addFavorite("Matrix");
filmes.addFavorite("Avatar"); 
console.log(filmes.getFavorites()); 


const livros = new BooksFavoriteManager();
livros.addFavorite("Dom Casmurro");
livros.addFavorite("O Alquimista");
console.log(livros.getFavorites());


