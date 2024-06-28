
//JAVASCRIPT - Uso de Strings .

//1. Escreva um programa que inverte uma string//
//Resposta//
// ------1 mod.
let palavra = "Camarão";

let invertida = "";

for(let i = palavra.length - 1; i >= 0; i--){
    invertida = invertida + palavra[i]
}

console.log(invertida);

// ------2 mod.
function inverterString(str) {
    let stringInvertida = str.split('').reverse().join('');
    return stringInvertida;
}
let exemplo = "Camarão Empanado";
let exemploInvertido = inverterString(exemplo);
console.log(exemploInvertido); 


//2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###".//
//Resposta//
 let frase = "Eu torço para o Flamengo! E não Vasco.";
 let fraseCensurada = frase.replaceAll("E não Vasco","### #### ####");
 console.log(fraseCensurada);


//3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com//
//Resposta//

// 1º modelo :

let email = "exemplo@soulcode.com";
let isSoulcodeDomain = email.endsWith("@soulcode.com");

if (isSoulcodeDomain) {
    console.log("O e-mail é do domínio soulcode.com");
} else {
    console.log("O e-mail NÃO é do domínio soulcode.com");
}

// 2º modelo :

const emailAluno = "aluno@soulcodeacademy.org";

if(emailAluno.endsWith("soulcode.com") || emailAluno.endsWith("soulcodeacademy.org")) {
    console.log("Este email pertence a soulcode!");
    } else {
        console.log("Este email não pertence a Soulcode!")
    }
