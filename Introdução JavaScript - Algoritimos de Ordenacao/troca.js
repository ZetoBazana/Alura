// Vamos criar uma função, que guarda os itens analisados e os troca, 
// nao precisando reescrever

function troca (lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];

    lista[analise] = itemAnterior
    lista[analise - 1] = itemAnalise
}

module.exports = troca;