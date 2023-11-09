// Funções

function soma(a: number, b: number): number {
    return a + b;
}

function helloWorld(nome: string): void {
    console.log(`Olá, ${nome}!`);
}

// Exercício: Crie uma função que recebe um array de notas
// e calcula a média. Crie outra função que recebe uma nota e indicate
// se o aluno foi aprovado (nota >= 6) ou não.

function calculaMedia(notas: number[]): number {
    let soma: number = 0;

    for(let nota of notas){
        soma += nota;
    }

    return soma / nota.length;
}

function checarNota(nota: number): void {
    if(nota < 6) {
        console.log("Aluno reprovado!");
    }else {
        console.log("Aluno aprovado!");
    }
}