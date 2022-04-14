// DESAFIO - Cliente Genérico

// Gerar uma função que permita criação de novos clientes, a partir de um modelo:

// Vamos 1° criar uma função, que sera o modelo para criar novos objetos

function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

// Criamos o modelo, disendo que este objeto nome = recebe o parametro nome (this.nome = nome)

// Agora vamos criar a variavel no nome do cliente, chamando a função com os parametros pessoais dele
// a palavra reservada NEW, indica que sera um novo cliente. novo objeto

const jose = new cliente("José", "02315988813", "jose@email.com", 100);

console.log(jose)