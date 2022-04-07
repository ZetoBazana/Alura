// DESAFIO 2 - Filtrando por notas.

// Temos uma array de nomes e uma array de notas, temos que retornar quem esta aprovado

//---------------------------------------------------------------------------------------

const nomes = ["Ana", "Marcos", "Maria", "Mauro"]
const notas = [7, 4.5, 8, 7.5]


// Aqui vamos usar o .filter(é um callback, entao tem uma funcao dentro)
// o filter foi dado no nomes (se o primeiro parametro nao usado, coloca _)
// _,indice) => notas[indice] menor que 5
// CONFUSO, mas o filtro foi feito em nomes, usando o indice de notas.
// Ele pegou o indice abaixo de 5 e usou o mesmo indice no nome, identificando quem tirou menos que 5
// aqui retorna booleano, Truo or False
const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(`O aluno reprovado é o ${reprovados}`)