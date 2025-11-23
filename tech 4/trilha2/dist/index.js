"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(deposito) {
        this.saldo += deposito;
    }
    sacar(saque) {
        this.saldo -= saque;
    }
    detalhesConta() {
        return `Titular ${this.titular} saldo bancario ${this.saldo}`;
    }
}
let conta = new ContaBancaria("gabriel", 1000);
console.log(conta.detalhesConta());
