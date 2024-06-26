let  numero = 0; // Valor inicial .

// condição de parada 
while (numero < 1000) {
    console.log(numero);
    numero++; //Atualização ou incremento.
}

console.log(Fim)

// 2) modelo :

let numero2 = 5;

while(numero2 <= 50) {
    console.log(numero2);
    numero2 += 5; //numero2 = numero2 + 5
}
///----///
// 3) modelo :
let numero3 = 100;

while(numero3 >=0) {
    console.log(numero3);
    numero3--; //numero3 = numero3 -1
}
console.log("WHILE FIM");
console.log(numero3);

console.log("FIM");

///----///

// 4) modelo :

// Soma 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55


let cont = 1
let soma = 0; // acumulador

// Do 1 até 10

while(cont <= 10) {
    soma = soma + cont;
    cont++;
}

console.log(soma);