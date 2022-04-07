// SOMAR VALORES A ITENS DA ARRAY COM .MAP

// DESAFIO 
// Somar 1 ponto a cada nota de um aluno, que tem notas: 10, 9, 8, 7, 6.

//-----------------------------------------------------------------------

const notas = [10,9,8,7,6]

let notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);

// retornou nota: 11, 10.... (só que nao pode passar de 10)

// Assim usamos o map com uma função, e o oporador ternario, que é um if else.
