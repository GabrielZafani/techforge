class Agenda {
    compromissos: string[]; 

    constructor() {
        this.compromissos = []; 
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): string {
        if (this.compromissos.length === 0) {
            return "A agenda está vazia.";
        }
        
        
        let listaCompleta = "Compromissos:\n";
        
        for (let i = 0; i < this.compromissos.length; i++) {
            const compromisso = this.compromissos[i];
            listaCompleta += `${i + 1}. ${compromisso}`;
            
            
           
        }
        
        return listaCompleta;
    }

}



let agendaPessoal = new Agenda();

agendaPessoal.adicionarCompromisso("Reunião de Projeto");
agendaPessoal.adicionarCompromisso("Dentista às 16:00");

let agendaTrabalho = new Agenda();
agendaTrabalho.adicionarCompromisso("Treinamento de POO");
agendaTrabalho.adicionarCompromisso("Fechamento do mês");


console.log("--- Compromissos Pessoais ---");
console.log(agendaPessoal.listarCompromissos());

console.log("\n--- Compromissos de Trabalho ---");
console.log(agendaTrabalho.listarCompromissos());