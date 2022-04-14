// DESAFIO - Seguir com o cliente poupança, usando classe

class cliente{
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {     // declaramos comportamentos
        this.saldo += valor
    }

    exibeSaldo() {         // declaramos tmb os comportamentos
        console.log(this.saldo)
    }
}

// Temos já a classe cliente, que é um modelo a ser construido para cada novo cliente.
// Agora precisamos de um cliente poupança.

// Primeiro vamos herdar a estrutura da classe cliente, para a nova classe cliente poupança
// extends é herdar. classe clentPoup herda de cliente {condições e chaves}

class clientePoupanca extends cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){ // Constructor é o que vai construir nessa classe
    super(nome, email, cpf, saldo) // super é puxar da classe de sima as chaves
    this.saldoPoupanca = saldoPoupanca // aqui adicionamos a chave que precisamos, que nao tinha no outro cliente
    }

    depositarPoup = function(valor) {
        saldoPoupanca += valor
    }
}

const jose = new clientePoupanca("José", "jose@gmail.com", "4637289845", 100, 200);

console.log(jose)
