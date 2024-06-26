//JAVASCRIPT - Uso de funções :

//1. Crie uma função para calcular e retornar o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.//
//      resposta    //
function calcularImc(peso, altura) {
    let imc = peso / (altura * altura); // Calcula o IMC usando a fórmula
    return imc;                         // Retorna o valor do IMC   
}
function mostrarImc(imc) { // Verifica o status do IMC e mostra a mensagem correspondente
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30) {
        console.log("Obesidade");
    } else {
        console.log("Valor de IMC inválido");
    }
}
let peso = 23;  // Peso em kg
let altura = 1.75;  // Altura em metros

let imc = calcularImc(peso, altura);  // Calcula o IMC
console.log(`Seu indíce de Imc é ${imc.toFixed(2)}`)
mostrarImc(imc);
 
//------------------//


// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6% //
//      resposta    //

// Função para transformar um número entre 0 e 1 em porcentagem
function percentual(numero) {
    let porcentagem = numero * 100;  // Multiplica o número por 100 para obter a porcentagem
    return porcentagem + "%";       // Adiciona o símbolo "%" e retorna a porcentagem
    console.log();
}

// Exemplo de uso
let resultado = percentual(0.456);  // Chamamos a função com o número 0.456
console.log(resultado);             // Mostra "45.6%" no terminal

//------------------//
// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true //

//      resposta    //

function ehNegativo(num) {
    if(num < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(ehNegativo(-2));
console.log(ehNegativo(0));




//------------------//

// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno. //

//      resposta    //

function contar(num) {
    for(let c = 1; c <= num; c++) {
        console.log(c);
    }
}

contar(10);
console.log("----");
contar(5);

//------------------//
// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado. //

//      resposta    //
function criarNomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let nomeCompleto = criarNomeCompleto("José", "Almir");



//------------------//

// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14. //
//      resposta    //
function calcularAreaCirculo(raio) {
    const PI = 3.14;
    let area = PI * raio * raio;

    return area; // O valor dentro da variável é retornado
}



//------------------//

/* 7. Crie uma função que recebe a área de um circulo e mostra o nível:
Entre 1 e 20 => Nível I
Entre 21 e 40 => Nível II
Qualquer outro diâmetro => Nível inválido */
//      resposta    //
function mostrarNivelCirculo(area) {
    console.log(`Analisando círculo de área: ${area}`);
    if(area >= 1 && area <= 20) {
        console.log("Nível I");
    } else if(area >= 21 && area <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido");
    }
}

let areaCirculo1 = calcularAreaCirculo(3);
mostrarNivelCirculo(areaCirculo1);




//------------------//
/* 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas. */

// resposta //
function stringMinuscula(palavra) {
    return palavra.toLowerCase();
}

console.log(stringMinuscula("BATATA"));
console.log(stringMinuscula("REACT"));
console.log(stringMinuscula("Node"));





/* 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string. */

// resposta //

function contarCaracteres(palavra, caractere) {
    let ocorrencias = 0;
    
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === caractere) {
            ocorrencias++;
        }
    }

    return ocorrencias;
}

console.log(contarCaracteres("BATATA", "A"));
console.log(contarCaracteres("Soulcode", "o"));


