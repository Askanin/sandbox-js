let x = "";
console.log(x);
x = "oi";

//String
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto("oi");
imprimeTexto("Outro texto");

function soma(num1, num2){
    return num1 + num2;
}

imprimeTexto(soma(8,71));
imprimeTexto(Math.round(soma(23.658746, 8.9523644716)));

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Felipe", 36));