// OBJETOS

    // DESAFIO - Printar informações no console:

//-----------------------------------------------------------------------------

const clienteX = {
    nome: "José",
    idade: 30,
    CPF: "02315927013",
    email: "jaugusto.bazana@gmail.com"
}

// Para acessar os itens do objeto, no console.log, vamos usar o seguinte cód:
console.log(clienteX.nome);
// esse é o modo que acessamos o conteudo de um item dentro do objeto
// OBJETO: var nome = { dado1: conteudo, dado2: conteudo, dado3: conteudo}

// E como o var.item que usamos, acessa o conteudo do item, podemos usar funções de String se String e n° se n°
// EX:

console.log(`Os primeiros numeros do seu CPF são ${clienteX.CPF.substring(0,3)}?`)
// Aqui chamamos o objeto, e informamos o item CPF, como CPF é String, usamos a função substring
// substring() Seleciona os caracteres que serão exibidos, (de onde começa, até onde vai)
// O segundo parametro "até onde vai" é o limite, nao será exibido (igual a divisão de array!)

// deasfio meu, exibir CPF com pontos:

console.log(`O cliente ${clienteX.nome}, tem o seguinte CPF ${clienteX.CPF.substring(0,3)}.${clienteX.CPF.substring(3,6)}.${clienteX.CPF.substring(6,9)}-${clienteX.CPF.substring(9,11)}`)