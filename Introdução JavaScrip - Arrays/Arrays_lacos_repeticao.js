// ARRAYS E LAÇOES DE REPETIÇÃO:

// DESAFIO
    // - Crie uma função que recebe como argumento o nome de um aluno;
    // - Verifique se o aluno está presente na lista/array, e retorne
    //   a média final que se encontra no mesmo indice;
    // - Caso o nome do aluno não esteja na lista, retorne uma mensagem
    //   indicando que o aluno não foi encontrado;

//-------------------------------------------------------------------------

    // Novos comandos: .includes() - "Verificar se um parametro está dentro de uma lista".
    // EX: alunosENotas[0].includes(nomeDoAluno) = ele ta vendo se dentro da array, tem o nome do aluno
    // O .includes() sempre retorna um boolean, True or False

    // Novo comando: .indexOf() - "Retorna o indice do parametro na array"
    // EX: alunosEnotas[0].indexOf(nomeDoAluno);
    // Se nome do alino for Juliana, ele vai retornar o indice 1 (que é a posição da Juliana na Array)


const alunos = ["João", "Juliana", "Caio", "Ana"];
const notas = [10,7,9,6];

const alunosENotas = [alunos, notas];

const exibeNomeENota = (nomeDoAluno) => {
    if (alunosENotas[0].includes(nomeDoAluno)) {
        let indice = alunosENotas[0].indexOf(nomeDoAluno)
        return `${alunosENotas[0][indice]}, sua nota é ${alunosENotas[1][indice]}`
    } else {
        return "O Aluno não foi encontrado!"
    }
}

console.log(exibeNomeENota("Ana"));

