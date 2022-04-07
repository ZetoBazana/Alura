// DESAFIO FINAL CURSO
//Vamos multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados

const arrayNums = [1,2,3,4]

//function multiplicaPorDez(num) {
//    return num * 10
//}

//const arraysMult = arrayNums.map(multiplicaPorDez);

//console.log(arraysMult);



// agora vamos usar a função direto dentro do map

const arrayMult = arrayNums.map(num => num * 10)

console.log(arrayMult);