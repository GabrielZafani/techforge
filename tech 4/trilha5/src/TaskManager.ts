abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): { tipo: string; nome: string }[];
}

class Project extends TaskManager {
    private tasks: { tipo: string; nome: string }[] = [];

    addTask(task: string): void {
        const existe = this.tasks.find(t => t.nome === task);
        if (!existe) {
            this.tasks.push({ tipo: "projeto", nome: task });
        }
    }

    listTasks(): { tipo: string; nome: string }[] {
        return this.tasks;
    }
}

class DailyTasks extends TaskManager {
    private tasks: { tipo: string; nome: string }[] = [];

    addTask(task: string): void {
        const existe = this.tasks.find(t => t.nome === task);
        if (!existe) {
            this.tasks.push({ tipo: "diaria", nome: task });
        }
    }

    listTasks(): { tipo: string; nome: string }[] {
        return this.tasks;
    }
}

const projeto = new Project();
projeto.addTask("Criar layout");
projeto.addTask("Configurar banco");
console.log(projeto.listTasks());

projeto.addTask("Criar layout");
console.log(projeto.listTasks());



