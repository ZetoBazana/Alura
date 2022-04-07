// MÉDIA USANDO O for

// DESAFIO
    // Calcular a média entre as seguintes notas, usando for: 10, 6.5, 8, 7.5

//----------------------------------------------------------------------------------

    // forEach = ParaCada (para cada item da array). Ou seja, ele ja faz a parametrização do for, automatico
    // Ele só vai repetir para cada item da array. Metodo mais recente, menos código, mais pratico.
    // variavel.forEach (index => { Variavel 0 += index}) 
    //  Array  . for     nomePertinente => (igual a função) {entre chaves o que vai ser feito somado a variavel +}

    // o forEach só resebe uma função dentro dos parametrso (function(){} ou nota =>{})

    
const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

notas.forEach (nota => {
    somaNotas += nota
})

// chamada função Callback, pq pode ser usado:
//  notas.forEach (function(nota) {
//     somaNotas += nota
//  })


let media = somaNotas/notas.length  

console.log(media);
console.log(" \n");

// também pode chamar uma função ja declarada. EXEMPLO

let nomes = ["José", "Michele", "Isi", "Pietro"];

nomes.forEach(mostraNomes);

function mostraNomes(nome) {
    console.log(nome)
}