class Temperatura {
    valor: number; 

    constructor(valor: number) {
        this.valor = valor;
    }

    converterParaFahrenheit(): number {
        return parseFloat(((this.valor * 9/5) + 32).toFixed(2));
    }

    converterParaKelvin(): number {
        return parseFloat((this.valor + 273.15).toFixed(2));
    }

   
}



const tempTeste = new Temperatura(30);
console.log(`\n30°C é igual a ${tempTeste.converterParaFahrenheit()} °F.`);
console.log(`30°C é igual a ${tempTeste.converterParaKelvin()} K.`);