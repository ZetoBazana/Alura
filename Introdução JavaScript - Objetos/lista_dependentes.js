// DESAFIO - Listar dependentes

    // Verificar a melhor forma de agregar informação de um novo dependente ao objeto cliente


// No dependente, vamos deixar o objeto dentro de [], fazendo assim o objeto ser um item de um array.
const cliente = {
    nome: "José",
    idade: 30,
    CPF: "02366627013",
    email: "jaugusto.bazana@gmail.com",
    fones: ["5551998429360", "5551980133405"],
    dependentes: [{
        nome: "Michele",
        parentesco: "Esposa",
        dataNasc: "24/05/1986"
    }]
}

// Agora vamoa adicionar um dependente nesse array, mesmo sendo onjeto, chave.. usa inserção de array
// como adiciona em array? .push

cliente.dependentes.push({
    nome: "Cleusa",
    parentesco: "Mãe",
    dataNasc: "25/01/1951"
})

//console.log(cliente);

// Agora vamos fazer um filtro, indicando uma data de nascimento, para que o array retorne o que queremos se igual
// Primeiro criar a variavel para fazer o filtro
const parenteMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "24/05/1986")
// Acessa cliente/dependentes.filtro(função => dependente.dataNasc(ele vai rodas todas nasc dos depend.
// é === "24/05/1986"))
// Ele vai percorrer a lista de objetos da array dependente, filtrando pela chave dataNasc.
// E vai retornar uma posição do Array

// O Filter, sempre vai retornar a posição do item de um Array, dentro de um array.

//Vamos imprimir o filtro
console.log(parenteMaisNovo[0].nome)
// Como o filtro retorna um array, com a posição filtrada. Se filtrou posição X, a informação sera:
// a posição zero do filtro, por isso acessamos com const[0], assim acessaremos o dependente
// Mas para imprimir só o nome, depois da const[0], vamos usar o .chave, assim retornara só a chave declarada

