// Classes 

class ContaBancaria {
    // public numero: string;
    // private saldo: number;
    // public tipo: "corrente" | "poupanca";

    constructor(public numero: string, private saldo: number, public tipo: "corrente" | "poupanca") {
        //this.numero = numero;
        //this.saldo = saldo;
        //this.tipo = tipo;
    }

    depositar(valor: number): void{
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if(this.saldo - valor < 0) {
            return false;
        } else {
            this.saldo -= valor;
            return true;
        }
    }
}

const conta1: ContaBancaria = new ContaBancaria("2000-1", 0.0, "corrente");
console.log(conta1);

conta1.depositar(500);
console.log(conta1);

conta1.sacar(200);
console.log(conta1);

conta1.sacar(400);
console.log(conta1);



// Exercício em aula: Crie uma classe Aluno com as propriedades:
// nome, data de nascimento, status (aprovado ou reprovado), notas (array).
// Método: adicionar nova nota, verificar status (media < 6 = reporvado)
// Aplique private onde achar necessário

class Aluno {
    constructor(
        public nome: string,
        public dataNascimento: Date,
        private status: "aprovado" | "reprovado",
        private notas = number[]
    ){}

    addNota(nota: number): void {
        this.nota.push(nota);
        this.status = this.verificarStatus();
    }

    verificarStatus(): "aprovado" | "reprovado" {
        let soma: number = 0;

        for (let nota of this.nota) {
            soma += nota;
        }

        const media = soma / this.nota.length;

        return media < 6 ? "aprovado" : "reprovado";
    }
}

const aluno: Aluno = new Aluno("Pablo", new Date(2000, 2, 00), "aprovado", [
    5.5,
    7.0
]);

aluno.addNota(5);
console.log(aluno.verificarStatus())