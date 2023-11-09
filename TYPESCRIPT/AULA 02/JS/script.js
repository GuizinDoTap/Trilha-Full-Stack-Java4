// Declarar explicitamente as variaveis
// number, boolean, string, Array

let peso: number;

peso = 87.5;
peso = "teste"


let souEstudante: boolean = false;
let altura: number = 1.92;
let pontos: number[] = [];
let pontos2: Array<number> = [];

let qualquerCoisa: any;
qualquerCoisa = 1;
qualquerCoisa = [];

// Unions = permite que a variavel assuma mais de um tipo

let valor: string | number;
valor = 1;
valor = "hello";
//valor = false;

let statusRede: "sucesso" | "erro" | "pendente";
statusRede = "sucesso";