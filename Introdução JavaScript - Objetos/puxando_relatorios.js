// DESAFIO - Puxando relatórios

    // Percorrer um objeto e extrair informações básicas de um cliente,
    // em um formato mais legível e de forma automatizada,
    // para fornecer a outros departamentos do banco.

    
    const cliente = {
        nome: "José",
        idade: 30,
        CPF: "02366627013",
        email: "jaugusto.bazana@gmail.com",
        fones: ["5551998429360", "5551980133405"],
        saldo: 100,
        dependentes: 
        [
            {
            nome: "Michele",
            parentesco: "Esposa",
            dataNasc: "24/05/1986"},
            {
            nome: "Cleusa",
            parentesco: "Mãe",
            dataNasc: "25/01/1951"
            }
        ],
        depositar: function(valor) {
            this.saldo += valor
        }
    }

// Bora que é complicado saporra!

let relatorio = "";


for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info}: ${cliente[info]}`
    }
}

// esse for é o for it. 
// nele vai ( variavel info in cliente) ou seja, info sera a variavel de repetição, que cada vez recebe um dado
// como temos function e objetos, nao queremos mostrar no relatorio
// então criamos o if
// se typeof cliente[info], quer dizer, se a informação do cliente for (typeof diz se é string)
// .. se for === "object" ou(||) se for "function", usamos comando continue (sim tem continue)

// Quando fizemos a for, sem o if else, ele retornou os dados e também aparecer "object" e "function"
// por isso criamos o if else, como retorna string "object e Function"...
// falamos para se o resultado for um desses, ele continuar, nao exibir. se nao, ai sim exibe a info

// a variavel relatorio += S{info} para aparecer a chave, e ${cliente[info]} para aparecer o conteudo


console.log(relatorio)