1 
/* exercicios
let far = 62;

celsius =  ( far - 32 ) / 1.8;
console.log(celsius);


let far = 62;
*/
// correção :

let tempF = 80;
let tempC = (tempF - 32) / 1.8;
// Concatenação = juntar valores de variáveis no texto
console.log("A temperatura em celsius é " + tempC.toFixed(1) + " °C");
let n1 = 9.5; // peso 3
let n2 = 7.5; // peso 2
let n3 = 8.0; // peso 1
let n4 = 9.0; // peso 4
let n5 = 10.0; // peso 5

let mediaPonderada = (n1 * 3 + n2 * 2 + n3 * 1 + n4 * 4 + n5 * 5) / 15;

console.log("A média ponderada é: " + mediaPonderada.toFixed(2));