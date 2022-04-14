// DESAFIO - Lista de Telefones

    // Acessar a lista de numeros de telefone das pessoas cadastradas no sistema e imprimi-las
    // verificando se há mais de um numero em algum cadastro


const cliente = {
    nome: "José",
    idade: 30,
    CPF: "02315927013",
    email: "jaugusto.bazana@gmail.com",
    fones: ["5551998429360", "5551980133405"]
}

cliente.fones.forEach(fone => console.log(fone))

// desafio meu, adicionar maus um telefono :)
cliente.fones = ["555136261883"]

cliente.fones.forEach(fone => console.log(fone))

