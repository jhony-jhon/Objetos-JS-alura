const pessoa = {
    nome: "Luana",
    profissao: "Desenvolvedora mobile",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 977889966";

console.log(pessoa.telefone);

pessoa.nome = "Luana Oliveira";

console.log(pessoa);

/* A palavra reservada const não nos permite reatribuir um objeto Inteiro. */

const novaPessoa = {
    nome: "Lionel",
};

pessoa = novaPessoa;

console.log(pessoa);