// //var --> pode ser usada antes de ser declarada, porém já não é mais tão utilizada

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);

// var area;

// //let

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

//const --> precisa ter uma valor para ser inicializada;

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