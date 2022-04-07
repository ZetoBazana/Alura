// USANDO MAP COM STRINGS

    // DESAFIO
    // Padronizar Array de nomes, para conter apenas letras maiusculas:

//-------------------------------------------------------------------------

let nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// Vamos usar o for e a função de deixar tudo maiúsculo

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);
