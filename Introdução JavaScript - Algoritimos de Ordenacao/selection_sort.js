// Sort é ordenar.
// Agora vamos ordenar todos os livros, por ordem de preço.

// 1º passo, importar nossos outros algoritimos, a lista de livros e o livro mais barato

const livros = require("./lista_livros");

// 2° passo, importar a função menorValor que foi feita em outro arquivo

const menorValor = require("./menor_valor");

// Agora vamos com o for, para novamente usar loop para ordena-los

for (atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual

}

console.log(livros);