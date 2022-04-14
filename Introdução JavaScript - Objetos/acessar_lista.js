// DESAFIO - Acessar chaves
    // Consultar um objeto utilizando uma lista de chaves...
    // relativas a informações de clientes gerada pelos...
    // sistema e printar o resultado .

const cliente = {
    nome: "José",
    idade: 30,
    CPF: "02315927013",
    email: "jaugusto.bazana@gmail.com"
}

// para imprimir utilisando lista/array de chaves:

// primeiro criamos a variavel, uma array com todas as chaves:
const chaves = ["nome", "idade", "CPF", "email"]

// vou acessar a variavel chaves e acessar a posição:
console.log(cliente[chaves[0]]);
// quando usamos array, nao podemos usar: cliente.chaves[0]
// pq se ta com array, tem que ser entre conchetes sempre.


// USANDO O FOREACH, para imprimir o objeto inteiro, todos itens da array chaves
chaves.forEach(info => console.log(cliente[info]))
// relembrando, forEach é paraCada
// para cada (informação => imprime clinte[posição 0])
// o forEach faz o loop até o fim da array