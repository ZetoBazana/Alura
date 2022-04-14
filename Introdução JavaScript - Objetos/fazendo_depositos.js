// DESAFIO - Fazendo depósitos

    // Adicionar uma propriedade que permita "ações",
    // para que os clientes que estão cadastrados consigam fazer op bancárias


// primeiro vamos adicionar a chave saldo com 100,
// depois criamos a chave deposito, que recebeu uma função.
// As chaves podem receber string, numero, array, e agora tmb funções
const cliente = {
    nome: "José",
    idade: 30,
    CPF: "02366627013",
    email: "jaugusto.bazana@gmail.com",
    fones: ["5551998429360", "5551980133405"],
    saldo: 100,
    dependentes: 
    [
        {
        nome: "Michele",
        parentesco: "Esposa",
        dataNasc: "24/05/1986"},
        {
        nome: "Cleusa",
        parentesco: "Mãe",
        dataNasc: "25/01/1951"
        }
    ],
    depositar: function(valor) {
        this.saldo += valor
    }
}

// a função foi, parametro VALOR a ser depositado, this.saldo quer dizer este item do objeto, esta chave do objeto
// += para somar com o que já existe, e Valor é o parametro, que sera indicado quando chamar a function

console.log(cliente.saldo);

// Para chamar a função continua nos pontos do objeto até a chave com a função e os () como de costume.
cliente.depositar(30);

console.log(cliente.saldo);