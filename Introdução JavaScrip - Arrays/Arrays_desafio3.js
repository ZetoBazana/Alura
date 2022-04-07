// DESAFIO 3 - Somando com reduce

    // Com as médias de alunos de 3 salas, vamos soma-las e ver a média geral

//------------------------------------------------------------------------------

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

// criar a função da média, para usarmos a mesma pra todos;
// parametro é nomedasala
// Cria a constante da soma = parametro.reduce(Dois parm, acum e atual) - Um é o total, o outro  numero atual
// pois a função REDUCE também loopa, passa de um em um, acumulado + atual
// faz a função => atual + acum
// ultimo parametro é o valor inicial(antes defidino em variavel 0 fora.)
// parm.reduce(parm1, parm2) func parm1 + parm2, 0)

function mediasDaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala JS é ${mediasDaSala(salaJS)}`);
console.log(`A média da sala de Java é ${mediasDaSala(salaJava)}`);
console.log(`A média da sala Python é ${mediasDaSala(salaPython)}`);


// Vamos calcular uma média simples novamente
// agora usando a funcao reduzida, tudo junto

const notasAlunos = [7, 5, 9, 10]

const media = notasAlunos.reduce((acum, atual) => atual + acum / notasAlunos.length);
// novamente entao
// array.reduce((parm1, parm2) aeron function parm1 + parm2 / array.length)
// parece facil mas é dificil e parece dificil mas é facil :)

console.log(`A média simples é ${media}`);



