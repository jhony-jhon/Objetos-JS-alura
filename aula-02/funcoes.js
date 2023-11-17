const cliente = {
    nome: "Jean",
    idade: 33,
    email: "jean@dominio.com",
    telefone: ["1188663344", "1155446633"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this.saldo -= valor; // decrementando do saldo o valor gasto na compra.
            console.log(`Pagamento efetuado com sucesso. Novo saldo: ${this.saldo}.`);
        }
    }
};

cliente.efetuaPagamento(150);
//cliente.efetuaPagamento(300); //vai imprimir saldo insuficiente!

