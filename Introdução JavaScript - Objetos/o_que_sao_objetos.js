// Diferente das arrays, que usamos para colocar os dados de um tipo só, de uma fonte só e para um só objetivo.
// Os objetos, servem para guardar informações diferentes, tipo um cadastro de cliente.
// Objetos serão muito usados no JavaScript:

const clienteX = {
    nome: "José",
    idade: 30,
    CPF: "02315927013",
    email: "jaugusto.bazana@gmail.com"
}

// Pelo que entendi, sempre entre chaves dentro de uma varivel, usando virgula para separa-los.
// o nome: (seria a informação/item, o "José" seria o conteudo da informação/item)

// NOMENCLATURA  EXATA

// NOME: (chama de chave) (pra mim melhor Item)
// JOSÉ, (chama de tonteudo) (pra mim melhor conteudo do item)


// Complemento sobre cópia de onjetos:
// se eu copiar assim: clienteY = clienteX, quando eu chamar o cliente y, ele vai me informar o X, 
// ele não faz cópia, apenas referencia.

// para criar um novo objeto, "copiando" outro, usamos o Object.crate(), EX

const clienteY = Object.create(clienteX)

console.log(clienteY.nome)