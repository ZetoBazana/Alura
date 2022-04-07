                                      // AULA SOBRE ARRAYS //                                    

// CRIANDO ARRAYS.
    // sempre dividido por virgula. O espaço é facultativo, mas fica melhor de ler com ele.
    // se String sempre entre Aspas. se Number não vai aspas.
    let alunos = ["pedro", " joao", " marcio", " julio", " tobias", " chico", " lurdes", " macaco", " luis", " eu"];
        // ADICIONAR ITEM na lista = .push() com os parametros a add; Os itens serão ADICIONADOS NO FINAL, SEMPRE!
            // EX: alunos.push("adicionaldo", "Josefa");
        // REMOVER item na lista = .pop() Sem parametro nesse caso. Vai SEMPRE REMOVER O ÚLTIMO ITEM da array.
            // EX: alunos.pop();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // DIVIDIR A LISTA PT1 usamos o .slice(parm1, parm2).
        // Parametros (de onde começa = 0 , até a metade da lista = var.length/2 (dividi por dois o numero da lista)).
        // O ultimo item, informado na separação não é utilizado. EX Tem 10 itens, 0 a 9. ele vai até <= a metade.
        let turma1 = alunos.slice(0, alunos.length/2);

    // DIVIDIR A LISTA PT2 usamos o .slice(parm1, não usaremos o parm2).
        // Aqui eu defini a lista 2, isando o .slice() tmb. 
        // Usei um parametro só, pq se só tem o parametro inicial, ele entende que é do INICIAL ATÉ O FINAL.
        let turma2 = alunos.slice(alunos.length/2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // Mostrar a lista, ou seja a ARRAY INTEIRA, usando o console.log();
    console.log(`Está é a lista inicial criada, intitulada alunos: ${alunos}\n`);

    // Console.log para mostrar e .length, que é o número de itens da Array (VAR.LENGTH = Numero de itens):
    console.log(`Esse é o comando .length, que mostra o numero de itens da lista, que são: ${alunos.length}\n`);

    // Mostrei a lista da turma1:
    console.log(`Esse é o resultado da divisão pt1, a Turma 1: ${turma1}\n`);

    // mostrei a lista da turma 2:
    console.log(`Esse é o resultado da divisão pt2, a Turma 2: ${turma2}\n`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ATUALIZANDO LISTA, COLOCANDO E TIRANDO ITENS

    // Para alterar a lista (REMOVER, ADICIONAR), usamos o .plice(parm1, parm2, parm3) se for só retirar, só usa parm1, parm2.
    // PARM1 = posição inicial, PARM2 = quantos itens serão removidos, PARM3 = o que sera adicionado:
    // para só adicionar sem retirar, usar 0 no parm2 = .splice(2,0, "item adicionado")
    turma2.splice(2,1,"adicionaldo");

    // Mostrando a turma 2 alterada, aonde tirei o "macaco" e adicionei o "adicionaldo"
    console.log(`alterando a lista da turma dois para ${turma2}\n`)
   

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // JUNTANDO, AGRUPANDO, CONCATENANDO ARRAYS
       // Para juntar dois Arrays, usamos o .concat().
       // EX: array1.concat(array2); Vamos juntar novamente as duas turmas que foram separadas
       let reagrupandoArrays = turma1.concat(turma2);

       console.log(`Concatenando as duas turmas, volta a ser:  ${reagrupandoArrays}\n`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ARRAYS COM DUAS DIMENÇÕES
       // Basicamente é uma array que contem duas ou mais arrays:
       // Exemplo const ArrayDuasDim = [[item1,item2,item3], [item11,item22,item33]] podendo ser string ou number
       const alunosNovos = ["Pedroca", " Julicor", " Ratata"];
       const notas = [10, 5, 7];
       const alunosENotas = [alunosNovos, notas];
       // Tmb pode ser escrito direto var = [["Pedroca", "Julicor"], [10,5]];

       console.log(`Array de duas dimenções\n${alunosENotas}\n`);
       
       // Agora para chamar os item vai ser igual chamar array, mas terão mais Conchetes[]
       // Ex:
       console.log(`${alunosENotas[0][0]}, sua nota é ${alunosENotas[1][0]}\n`)
       // No primeiro [] vai apontar qual array dentro da const está chamando
       // No segundo [] vai apontar a posição dessa array que chamou.
    
