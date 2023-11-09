let pessoa = {
    nome: "Guilherme",
    idade: 23,
    correr(dist: number) {
        console.log(`Oi, eu sou ${this.nome} e estou correndo ${dist} km.`);
    }
}

pessoa = {
    nome: "Pablo",
    idade: 20,
    correr(dist: number) {
        console.log("correndo!!");
    }
}

let gatinho: {nome: string, idade: number} = {
    nome: "Torpedo"
    idade: 2
}

// interfaces

interface Pessoa { // Letra inicial maiuscula: PessoaJuridica
    nome: string;
    idade: number;
    correr(dist: number): void;    
}

let pessoa2: Pessoa = {
    nome: "Rodolfo",
    idade: 24,
    correr(dist: number) {
        console.log("Olá Mundo !!");
    }
}

// Exercício: Crie uma interface para representar um veículo
// As propriedades são: ano, marca, quitado (boolean), valor em reais.
// Os métodos são: ligar e desligar

interface Carro {
    ano: number;
    marca: string;
    quitado: boolean;
    valor: number;
    ligar(): void;
    desligar(): void;
}


// Exercício: Crie uma interface para representar um Gato
// As propriedades são: nome, idade, comidaFavorita.
// Os métodos são: comer (recebe uma comida como parâmetro)

interface Gato {
    nome: string;
    idade: number;
    comidaFavorita: string;
    comer(comida: string): void;
}

const gato: Gato = {
    nome: "Jorge",
    idade: 2,
    comidaFavorita: "Peixe",
    comer(comida: string) {
        if(comida == this.comidaFavorita) {
            console.log("Hum que delícia!")
        } else {
            console.log("Não quero!");
        } 
    }
}