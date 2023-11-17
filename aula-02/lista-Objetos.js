const cliente = {
    nome: "Jean",
    idade: 33,
    email: "jean@dominio.com",
    telefone: ["1188663344", "1155446633"],
};

cliente.enderecos = [
    {
    rua: "R. São José de Lima",
    numero: 1557,
    apartamento: true,
    complemento: "apt 624",
    },
];

cliente.enderecos.push({
    rua: "R. Antonio Fagundes",
    numero: 521,
    apartamento: false,
});

//console.log(cliente);
//console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);