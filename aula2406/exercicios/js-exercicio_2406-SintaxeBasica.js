// Exercicio_ 24/06/2024 - JAVASCRIPT - Sintaxe básica//
let tempFai = 80;
let tempCel = (tempFai - 32) / 1.8;
// Concatenação = juntar valores de variáveis no texto
console.log("A temperatura em celsius é " + tempCel.toFixed(2), " °C");
let n1 = 9.5; // peso 3
let n2 = 7.5; // peso 2
let n3 = 8.0; // peso 1
let n4 = 9.0; // peso 4
let n5 = 10.0; // peso 5

let mediaPonderada = (n1 * 3 + n2 * 2 + n3 * 1 + n4 * 4 + n5 * 5) / 15;

console.log("A média ponderada é: " + mediaPonderada.toFixed(2));