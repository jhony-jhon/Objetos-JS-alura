const cliente = {
    nome: "Biel",
    idade: 30,
    cpf: "123456789",
    email: "biel@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);
// acessando as propriedades do objeto usando o colchetes.

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`)
});


