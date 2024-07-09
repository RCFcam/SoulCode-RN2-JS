// declaração de uma function :

function 


Exemplo: Converter a função abaixo em arrow
function extrairDigitosVerificadores(cpf) {
    const partesCpf = cpf.split("-");
    return partesCpf[1];

const extpf() => cpf.split("-"),partesCpf[1];


// Exemplo: Converter a função em arrow, e o for em forEach.
function repetirPalavra(palavra, qt) {
    let resultado = "";

    for(let i = 0; i < qt; i++) {
        resultado += palavra;
    }
    return resultado;
}

// ver se esta certo ?
numeroVogais.forEach((palavra, qat) => resultado += palavra);
console.log(resultado);


// Exemplo: Converter a função abaixo em arrow e o for em forEach
function filtrarStrings(arr) {
    let stringsFiltradas = [];

    for(let str of arr) {
        if(str.length > 5) {
            stringsFiltradas.push(str);
        }
    }

    return stringsFiltradas;
}