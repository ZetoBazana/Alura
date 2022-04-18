// Insertion Sort é ao inves de passar todos os arrays, ele pega uma por vez

// 1º Passo, importar a lista de livros

const livros = require("./lista_livros");

// 2º passo agora, importar função de troca, para nao reescrever

const troca = require("./troca");

// FUNCTION COMENTADA
// função parametro lista
// for ( var atual, se atual é menor que lista; atual++) For classico e basico.
// dentro do for criamos uma variavel pra guardar a atual a cada passagem do loop
// While(laço repetição tmb)
// whilie(se analise maior que zero e lista.posição atual. chave preco maior que o mesmo menos 1) uma anterior
// criamos as variaveis pra guardar os doi itens analisados, para depois reatribuir trocando de lugar
// Após trocar de lugar analise-- vai voltar uma cassa da array para conferir. Fazendo assim o loop terminar tmb

function insertionSort(lista) {
    
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise)
            analise--
   }
        
    }
    
    console.log(lista)
}

insertionSort(livros)


// Basicamente ele pega o item pos.1 compara com o pos.0.
// SE maior, troca eles de lugar
// Volta par ao loop
// o item pos.2 é maior que a pos.1 (por isso atual e atual - 1)
// E no caso do ultimo item ser mais barato??
// Ele troca com o penultimo, o atual/analise--, faz ele voltar uma casa e passar pelo for novamente, até
// deixar nao ter menores antes.