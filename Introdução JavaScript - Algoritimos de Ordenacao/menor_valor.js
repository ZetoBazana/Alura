// DESAFIO - Lista de Livros

// Temos uma lista de 6 livros, com preços variados.
// Preciso ordenalos por preço.

// Uma primeira idealização:

const livros = require(`./lista_livros`); // criamos uma variavel nova, para armezenar a lista do outro arquivo


function menorValor(arrProdutos, posicaoInicial) {

    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
      if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual
      }
    }
    return maisBarato
}

module.exports = menorValor;


// Fiz um for convencional, para percorrer a lista de livros.
// Condição SE livros posição atual, for menor que, livros posição mais barato, então, mais barato vira o atual.