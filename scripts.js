// //var --> pode ser usada antes de ser declarada e tem escopo global,
// porém já não é mais tão utilizada

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);

// var area;

// //let --> escopo local

// let forma = 'retangulo';
// let altura= 10;
// let comprimento = 20;
// let area;

// area = altura * comprimento;
// console.log(area);

// if ( forma === 'retangulo'){
//     area = altura * comprimento;
// } else{
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

//const --> precisa ter uma valor para ser inicializada e tem escopo local

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
    area = altura * altura;
} else{
    area = altura * comprimento;
}

console.log(area);

// tipagem dinâmica -> aceita a troca do tipo de dado;
// Linguagem interpretada --> código tem um programa que vai ler nosso código e executá-lo.