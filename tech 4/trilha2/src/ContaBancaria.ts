class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(deposito: number): void {
        this.saldo += deposito;
    }

    sacar(saque: number): void {
        this.saldo -= saque;
    }

    detalhesConta(): string {
        return `Titular ${this.titular} saldo bancario ${this.saldo}`;
    }
}

let conta = new ContaBancaria("gabriel", 1000);

console.log(conta.detalhesConta());
conta.depositar(100);
conta.sacar(250);
console.log(conta.detalhesConta());