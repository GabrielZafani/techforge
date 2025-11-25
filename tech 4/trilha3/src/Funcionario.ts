abstract class Funcionario {
    private nome: string;
    private salario: number; 

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome
    }

    getSalario(): number {
        return this.salario
    }

    abstract calcularBonus(): number;
}

class Operario extends Funcionario {

    calcularBonus(): number {
        return this.getSalario() * 0.05; 
    }

}

class Gerente extends Funcionario {

    calcularBonus(): number {
        return this.getSalario() * 0.10; 
    }

}

function calcularSalarioComBonus(funcionarios: Funcionario[]) {

    funcionarios.forEach(func => {
        let bonus = func.calcularBonus();
        let salarioFinal = func.getSalario() + bonus;

        console.log(`Funcionário: ${func.getNome()}`);
        console.log(`Salário Base: R$${func.getSalario()}`);
        console.log(`Bônus: R$${bonus}`);
        console.log(`Salário Final: R$${salarioFinal}`);
        console.log("-----------------------------");
    });

}

let gerente = new Gerente("Carlos", 3230);
let operario = new Operario("João", 4242);
let operario2 = new Operario("Maria", 1330);

let listaFuncionarios: Funcionario[] = [gerente, operario, operario2];


calcularSalarioComBonus(listaFuncionarios);