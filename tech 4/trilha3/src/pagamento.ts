
class Pagamento {

    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    processar(): void {
        console.log("Processando pagamento...");
    }

}


class PagamentoCartao extends Pagamento {

    numeroCartao: string;

    constructor(valor: number, numeroCartao: string) {
        super(valor);
        this.numeroCartao = numeroCartao;
    }

    validarCartao(): boolean {
        return this.numeroCartao.length === 16; 
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento de R$${this.valor} processado no cartão ${this.numeroCartao}.`);
        } else {
            console.log(`Número de cartão inválido: ${this.numeroCartao}`);
        }
    }

}


class PagamentoBoleto extends Pagamento {

    gerarCodigo(): string {
        return "BOLETO-" + Math.floor(Math.random() * 1000000); 
    }

    processar(): void {
        let codigo = this.gerarCodigo();
        console.log(`Boleto gerado no valor de R$${this.valor}. Código: ${codigo}`);
    }

}


function processarPagamentos(pagamentos: Pagamento[]) {
    pagamentos.forEach(p => {
        p.processar();
    });
}

let cartaoCorreto = new PagamentoCartao(150, "1234567812345678");
let cartaoErrado = new PagamentoCartao(200, "1234");

let boletoCorreto = new PagamentoBoleto(300);
let boletoErrado = new PagamentoBoleto(-50); 

let lista: Pagamento[] = [
    cartaoCorreto,
    cartaoErrado,
    boletoCorreto,
    boletoErrado
];

processarPagamentos(lista);
