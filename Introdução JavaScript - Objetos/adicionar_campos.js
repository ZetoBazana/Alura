// DESAFIO - Adicionar novos campos/chaves
    // Adicionar posteriormente, valores e chaves que ainda nao existem, como ex telefone, endereço...

const cliente = {
    nome: "José",
    idade: 30,
    CPF: "02315927013",
    email: "jaugusto.bazana@gmail.com"
}

// Adicionar uma chave/item, é mais facil que andar pra frente
// usamos o ponto:
// varcliente.novoitem= "conteudo"
cliente.fones = "998429360"

//usa-se o varcliente.item = "" também para atualizar o conteudo, caso ja tenha criado.

console.log(cliente);
