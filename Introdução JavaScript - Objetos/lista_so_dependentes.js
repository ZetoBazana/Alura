// DESAFIO - Lista de dependentes

// Extrair uma listagem de clientes, apenas com as informações de seus dependentes
// e montar lista única, para analise de outros setores


const clientes = [
    {
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
},
    {
    nome: "Bauduino",
    idade: 30,
    CPF: "02366627013",
    email: "jaugusto.bazana@gmail.com",
    fones: ["5551998429360", "5551980133405"],
    saldo: 100,
    dependentes: 
    [
        {
        nome: "Baudunino Jr.",
        parentesco: "Filho Adotivo",
        dataNasc: "15/02/2006"},
        {
        nome: "Lucildis",
        parentesco: "esposa",
        dataNasc: "20/09/1978"
        }
    ],
    depositar: function(valor) {
        this.saldo += valor
    }
}]

// Aqui queremos um array com informações só dos dependentes
// vamos usar o metodo de ESPALAHMENTO, que literalmente espalha as chaves e conteudos dentro d uma array
// usa-se três pontos(...).   ...objeto (espalharia tudo) ...objeto.dependentes[0] espalharia dados de 1 dependente

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.log(listaDependentes);

// temos também console.table() que vai montar uma tabela, com as infos

console.table(listaDependentes);


