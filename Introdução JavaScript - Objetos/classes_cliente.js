// Vamos criar uma classe de cliente. Atribuir os parametros e comportamentos.

// Usa-se o class sempre
// dentro dele, como é para criar cliente, usase o constructor

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

const jose = new cliente("Jose", "jose@email.com", "85428879845", 100);

console.log(jose);

// não vamos precisar declarar a função para chama-la. como já foi declarada é só o objeto.o que fazer
jose.exibeSaldo();

jose.depositar(522);

jose.exibeSaldo();




