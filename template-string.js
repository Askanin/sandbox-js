const nome = "Felipe";
const idade = "36 anos";
const cidadeDeNascimento = "Rio de Janeiro";

const apresentacao = "meu nome é " + nome + 
", minha idade é " +idade+ " e nasci na cidade "
+cidadeDeNascimento;

console.log(apresentacao)

console.log("-------------------");

const novaApresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade ${cidadeDeNascimento}`;

console.log(novaApresentacao)