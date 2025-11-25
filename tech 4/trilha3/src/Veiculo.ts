class Veiculo {

    marca:string;

    constructor(marca:string) {
        this.marca = marca;
    }

    mover(): string {
        return `O veiculo ${this.marca} está movendo`;
    }

    

}

class Carro extends Veiculo {

    mover(): string {
        return `O carro da marca ${this.marca} está dirigindo`;
    }

}

class Bicicleta extends Veiculo {

    mover(): string {
        return `A bicicleta da marca ${this.marca} está pedalando`;
    }

}

let veiculo = new Veiculo ("Volvo");
let carro = new Carro ("Mercedes");
let bike = new Bicicleta ("Caloi");

console.log(veiculo.mover())
console.log(carro.mover())
console.log(bike.mover())
