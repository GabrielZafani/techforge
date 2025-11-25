
abstract class FiguraGeometrica {

    abstract calcularArea(): number;

}


class Circulo extends FiguraGeometrica {

    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return 3.14 * this.raio * this.raio;
    }
}


class Quadrado extends FiguraGeometrica {

    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}


class Triangulo extends FiguraGeometrica {

    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]) {

    figuras.forEach((figura, i) => {
        console.log(`Área da figura ${i + 1}: ${figura.calcularArea()}`);
    });

}


let circulo = new Circulo(5);
let quadrado = new Quadrado(4);
let triangulo = new Triangulo(6, 3);


let listaFiguras: FiguraGeometrica[] = [circulo, quadrado, triangulo];


imprimirAreas(listaFiguras);
