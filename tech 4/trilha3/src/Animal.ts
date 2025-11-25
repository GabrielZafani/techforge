class Animal {

    private energia: number;
    nome: string;

    constructor(nome: string, energiaInicial: number) {
        this.nome = nome;
        this.energia = energiaInicial;
    }

    protected comer(valor: number): void {
        this.energia += valor;
        console.log(` Energia de ${this.nome} aumentou +${valor}. Atual: ${this.energia}`);
    }

    protected gastarEnergia(valor: number): void {
        this.energia -= valor;
        console.log(` Energia de ${this.nome} diminuiu -${valor}. Atual: ${this.energia}`);
    }

    statusEnergia(): void {
        console.log(` Energia final de ${this.nome}: ${this.energia}`);
    }

}

class Leao extends Animal {

    caca(): void {
        console.log(`\n ${this.nome} vai caçar...`);
        this.gastarEnergia(20);
        this.comer(15);
    }

}

class Passaro extends Animal {

    alimentar(): void {
        console.log(`\n ${this.nome} está comendo...`);
        this.comer(10);
    }

}

function mostrarStatus(animais: Animal[]) {
    animais.forEach(animal => {
        console.log(`\n=== Status de ${animal.nome} ===`);
        animal.statusEnergia();
    });
}


let leao = new Leao("Leão", 24);
let passaro = new Passaro("Pássaro", 31);

leao.caca();
passaro.alimentar();

let li = [leao, passaro];

mostrarStatus(li);
