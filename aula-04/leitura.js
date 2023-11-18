const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

/* para ter certeza que a leitura de dados do objeto json está funcionando, 
altere algum dado do arquivo json e rode novamente o console. Com a mudança sendo exibida, 
isso indica que a leitura dos dados do objeto está funcionando corretamente. */

const clienteEmString = JSON.stringify(dados); //transformando dados de um objeto em formato string

console.log(clienteEmString);
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); //lendo um formato string e convertendo em objeto.
console.log(objetoCliente);


