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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

// Importante lembrar que Objeto não possui ordenamento nas propriedade de seu objeto.

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}