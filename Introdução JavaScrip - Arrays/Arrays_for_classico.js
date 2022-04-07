// FOR CLASSICO:

// DESAFIO
    // - imprime o indice e a lista com os numeros: 100, 200, 300, 400, 500, 600:

//---------------------------------------------------------------------------------

// for (parm1; parm2; parm3) { o que vai se repitir }
    // parm1: Criação da variavel para guardar o valor, geralmente i de indice (let i = 0;).
    // parm2: A condição para repetição, se o i menor que x, então.."repete" (i >=/>/<= numero ou var.length;).
    // parm3: O que vai acontecer enquanto se repetir os parametros... (i++) que é igual (i = i + 1).
    // EX for (let i = 0; i >= array.length; i++)

    let numeros = [100, 200, 300, 400, 500, 600];

    for (let i = 0; i < numeros.length; i++) {
        console.log(i, numeros[i]);
    }

// i começou com 0, dai verificou se i é menor que o tamanho da arrai, então executou o console.
// só depois de executar, ele vai para o parm3, e adiciona 1. Então agora i = 1, repete operação.

// SEMPRE cuidar o for, se nao tiver o parametro de i++, ou nao tiver a condição. LOOP INFINITO TRAVA A ALMA
// finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.