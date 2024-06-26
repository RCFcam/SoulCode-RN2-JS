
/*JAVASCRIPT - For
Prof. José Almir */

//1. Faça a tabuada completa utilizando o loop for.//
//resposta//

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) { // Loop para cada número de 1 a 10
    console.log("Tabuada do " + multiplicador + ":"); // Imprime qual tabuada estamos fazendo

    for (let i = 1; i <= 10; i++) { // Loop para multiplicar de 1 a 10
        console.log(multiplicador + " x " + i + " = " + (multiplicador * i)); // Imprime o resultado da multiplicação
    }

    console.log("======================"); // Linha em branco para separar as tabuadas
}


//modelo correção : Professor:

for(let nTab = 1; nTab < 10; nTab++) {
    console.log("-----------");
    console.log(`TABUADA DO ${nTab}`);
    console.log("-----------");
    for(let mult = 1; mult <= 10; mult++) {
        console.log(`${nTab} x ${mult} = ${nTab*mult}`);
    }
}




//-----//
//2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.//
//resposta//

let fibonum1 = 0;
let fibonum2 = 1;

let numprox;

for (let n = 3;n <=10;n++) {
    numprox = fibonum1 + fibonum2;
    console.log(numprox)

    fibonum1 = fibonum2
    fibonum2 = numprox
}




//-----//
//3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).//
//resposta//


for (let const3 = 10; const3 > 0; const3--) {
    console.log(const3);
}



//-----//
//4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.//
//resposta//

let conste4 = 8;
let fatori4 = 1;

for (let n =1; n <= conste4; n++) {
    fatori4 *= n;
}

console.log(`Fatorial de ${conste4} é ${fatori4}`);





//-----//
//5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.//
//resposta//

for (let numero = 1; numero <= 100; numero++) {
    if (numero % 7 === 0) {  // Verifica se o número é múltiplo de 7
        console.log(numero);  // Mostra o número
    }
}



//-----//
//6. Mostre a soma do 50 até o número 100 usando loop for.//
//resposta//

let soma = 0;

for (let numero = 50; numero <= 100; numero++) {
    soma += numero; 
}

console.log(`A soma de 50 até 100 é ${soma}`);  // Mostra o resultado



//-----//
/*7. Mostre a seguinte figura com utilização de laços:
*
**
***
****
***** */

//resposta//

for (let cont7 = 1; cont7 <= 5; cont7++) {let cont7l = '';
    for (let cont7est = 1; cont7est <= cont7; cont7est++) {
        cont7l += '*';
    }
    console.log(cont7l);
}