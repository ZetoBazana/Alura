// DESAFIO - Compondo um objeto

    // Adicionar dependente para cada cliente:
    // com NOME, IDADE e PARENTESCO.

const cliente = {
    nome: "José",
    idade: 30,
    CPF: "02315927013",
    email: "jaugusto.bazana@gmail.com",
    fones: ["5551998429360", "5551980133405"]
}


// Para adicionar um objeto dentro de outro, usamos basicamente a mesma instrução ( objeto.novaChave = "valor")
// a diferença, é que vamos colocar outro objeto, então usa-se {} 
// (objeto.novaChave = { chave: "valor", chave: "valor",...})
// Ou seja, a chave dependentes, TERA COMO VALOR UM OBJETO

cliente.dependentes = {
    nome: "Michele",
    parentesco: "esposa",
    dataNasc: "24/05/1986"
}

console.log(cliente);

// Para acessar, alterar um valor do objeto dentro da chave, também usa-se mesma instrução de PONTO

cliente.dependentes.nome = "Michele Oliveira";

console.log(cliente);

// Desafio pessoal, adicionar email dependentes

cliente.dependentes.email = "michele@email.com"

console.log(cliente); // okkk