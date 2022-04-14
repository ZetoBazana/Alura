// DESAFIO - Oferda de Seguro

// Percorrer um objeto, para verificar se existe a chave "dependentes"
// Se existir, enviar oferta de seguro.


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

// Vamos 1º listar as chaves do objeto, usando Object.keys(Objeto a ser listado)
// Object.keys() retorna uma array, com todas as chaves do objeto em questão (Object é C MAIUSCULOO)
// Então vamos ver se dentro dessa array de chaves, existe "dependentes", usando o .includes
// .includes verifica se o parametro passado esta dentro da array, retorna true or false
// se true, vamos exibir a mensagem para a oferta de seguro
// BORAAA

// Desafio pessoal: Também dizer os nomes dos dependentes

function ofereceSeguro (obj) {
    const chavesObjeto = Object.keys(obj)
    if (chavesObjeto.includes("dependentes")) {
        console.log(`Oferecer seguro para o cliente ${obj.nome}.
        Ele possui os dependentes ${obj.dependentes[0].nome} e ${obj.dependentes[1].nome}`);
    }
}

// Se o Object.keys() retorna as chaves do objeto, temos tmb o :
// Object.values() que retorna os valores das chaves

// Se keys tras as chaves, values tras os valores das chaves, temos também o:
// Object.entries(), que tras varias arrays, cada uma com ["chave", "valor da chave"]

ofereceSeguro(cliente);
console.log(Object.entries(cliente))

// apanhei para mostras os nomes, fui testando até conseguir, a conclusão é:
// dependentes é Array, entao cliente.dependentes (aqui como é objeto ainda, usa ponto)
// cliente.dependentes[0] como dependentes é array, chama o dependente com []
// como o [0] ele entrou no objeto dentro do array, então agora como objeto, usamos o ponto novamente
// cliente.dependentes[0].nome   ;)


