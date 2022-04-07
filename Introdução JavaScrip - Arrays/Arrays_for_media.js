// MÉDIA USANDO O for

// DESAFIO
    // Calcular a média entre as seguintes notas, usando for: 10, 6.5, 8, 7.5

//---------------------------------------------------------------------------------

    // A variavel que sera usada dentro do for, deve ser sempre criada fora dele.
    // Caso seja criada dentro do for, sempre que repetir, vai criar nova var, descartando valor anteriro
    // O += é Soma o valor da direita com o valor da variavel a esquerda 

let notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}

let media = somaNotas/notas.length  

console.log(media);

// Note que nesse caso, tanto faz quantos itens tiver a Array, sempre vai calcular a media deles
// pq foi tudo definido com i, ou length, fazendo assim funcionar pra quantos valores forem informados.