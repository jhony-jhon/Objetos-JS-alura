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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}