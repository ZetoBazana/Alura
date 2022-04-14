// DESAFIO - Cliente Poupança

// Aproveitar o Cliente que ja existe e cria a partir dele, um novo tipo de cliente, para contas poupança

function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

// Temos o cliente e vamos usar o prototype dessa função geradora de cliente, para criar um novo cliente

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
    }


// criei a função, adicionei os mesmos parametros, e o novo saldoPoup (até aqui não criado)
// cliente.call (cal realmente chama a function cliente)
// nos parametros(this, pq recebe a propria função, e os parametros dentro dela, que 
// tamém são os parametros dessa função)

// até aqui copiamos o cliente que constroi objeto, dentro deste outro construtor de objetos
// isso chama herança, herdou a estrutura de outra função


// Agora vamos criar o novo cliente, que é de Conta Poupança

const michele = new clientePoupanca("michele", "586985478", "michele@email.com", 100, 50)
console.log(michele) // até aqui tudo ok


// Mas precisamos ter o depositarPoup que nao criamos.
// Poderiamos só ir na função e incluir no final, mas vamos ver como adicionar, qual comando

// ADICIONANDO CHAVE NO PROTOTIPO
// vamos acessar, como se acessa objetos, com pontos

clientePoupanca.prototype.depositarPoup = function(valor) { 
    this.saldoPoup += valor
}

// então é igual adicionar chaves, usa os ponto.NovaChave = ValorDaChave (função nesse caso)
// acessamos o prototype nesse caso

// o valor de saldoPoup aparece indefinido, pq foi criado, mas nao foi feito deposito

michele.depositarPoup(150);

console.log(michele.saldoPoup)

