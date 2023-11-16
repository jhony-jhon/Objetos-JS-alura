const cliente = {
    nome: "Biel",
    idade: 30,
    cpf: "123456789",
    email: "biel@dominio.com"
};

//console.log(cliente); //exibe todas as propriedades do objeto cliente.

//console.log(cliente.nome); //acessando apenas uma propriedade do objeto cliente. 

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
// Exibindo propriedades de um objeto utilizando template strings.

console.log(`Os três primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}.`);
//Utilizando a substring para manipular a quantidade que queremos retornar.
// no caso acima os três primeiros dígitos.







