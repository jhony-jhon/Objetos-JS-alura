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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}.`);
    console.log(`Ligando para ${telefoneResidencial}.`);
}

//ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaParaCliente(...cliente.telefone); // faz o mesmo que acima mas usando spread operator

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);