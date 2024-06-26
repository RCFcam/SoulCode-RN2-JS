
//  1)- Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:

//Resposta://

// Definindo as três variáveis com notas de 0 a 10:
let not1 = 2;
let not2 = 2.5;
let not3 = 8.5;

// Calculo da média das três notas:
let media = (not1 + not2 + not3) / 3;

// Validação do aluno com relação a média:

if (media >= 7) {
    console.log("Ex_1) Parabéns! sua média é " + media.toFixed(2)+ ".Você foi aprovado!");
} else if (media >= 5 && media < 7) {
    console.log("Ex_1) Sua média é " + media.toFixed(2),"Você está aprovado. Mas precisará de reforço!");
} else {
    console.log("Ex_1) Sua média é " + media.toFixed(2),"Você está reprovado. Precisará refazer a matéria!");
}

/*-----------------------------------------------------*/

/*  2)- Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC */

//Resposta://
 
// Inserindo peso e a altura:

let peso = 45; 
let altura = 1.20;

// Calculo do IMC :

let imc = peso / (altura * altura);

/*Definição IMC: Condição : 

  Magreza = menor que 18,5
  Normal =  entre 18,5 e 24,9
  Sobrepeso = entre 25 e 29,9
  obesidade grau 1 = entre 30 e 34,9
  obesidade grau 2 = entre 35 e 39,9
  obesidade grau 3 = maior que 40

*/

// Determinando o status do IMC

if (imc < 18.5) {
     console.log("Ex_2)-Imc "+ imc.toFixed(2),"abaixo do ideal, Classificação  Magreza.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Ex_2)-Imc "+ imc.toFixed(2),"índice ideal, Classificação  Normal.");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Ex_2)-Imc "+ imc.toFixed(2),"acima do ideal, Classificação  Sobrepeso.");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Ex_2)-Imc "+ imc.toFixed(2),"acima do ideal, Classificação obesidade grau 1.");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Ex_2)-Imc "+ imc.toFixed(2),"acima do ideal, Classificação obesidade grau 2.");
} else {
    console.log("Ex_2)-Imc "+ imc.toFixed(2),"acima do ideal, Classificação obesidade grau 3.");
}

/*-----------------------------------------------------*/

/*  3)-  Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais! */

//Resposta://

// Definindo o nº a e o nº b //
let nA = 6; 
let nB = 7; 

if (nA > nB) {
    console.log("Ex_3)- O valor do número A: "+ nA.toFixed(1)," é maior que o valor do número B:"+ nB.toFixed(1));
} else if (nA < nB) {
    console.log("Ex_3)- O valor do número B: "+ nB.toFixed(1)," é maior que o valor do número A:"+ nA.toFixed(1));
} else {
    console.log("Ex_3)- O valor do número A: "+ nA.toFixed(1)," é igual ao valor do número B:"+ nB.toFixed(1));
}

/*-----------------------------------------------------*/

/*  4)-  Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário. */
//Resposta://


let salario = 3000;
let qtDeps = 8;
let aumento = 0;

if(qtDeps === 0) {
    console.log("Sem dependentes. Sem ajustes no salário atual.");
} else if(qtDeps >= 1 && qtDeps <= 5) {
    console.log("Aumento de 30% no salário.");
    aumento = 0.3 * salario;
} else if(qtDeps > 5) {
    console.log("Aumento de 40% no salário.");
    aumento = 0.4 * salario;
}

salario = salario + aumento;
console.log("Salário: " + salario);


/*-----------------------------------------------------*/

/*  5)- Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.  */
//Resposta://

let diaDaSemana = 9;  

if (diaDaSemana === 1 || diaDaSemana === 7) {
    console.log("É final de semana!");  
} else if (diaDaSemana >= 2 && diaDaSemana <= 6) {
    console.log("É dia útil!");  
} else {
    console.log("Número do dia inválido!"); 
}





/*-----------------------------------------------------*/

/*  6)-  Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.*/
//Resposta://

let ano = 2000;

if(
    (ano % 4 == 0 && ano % 100 != 0) || 
    (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)
) {
    console.log("O ano de " + ano + " é bissexto.");
} else {
    console.log("O ano de " + ano + " não é bissexto.");
}

/*-----------------------------------------------------*/

/*  7)- Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.  */
//Resposta://

let idade = 150; 

if (idade < 0 || idade > 130) {
    console.log("Idade inválida!");  
} else {
    console.log("Idade válida!");  
}

/*-----------------------------------------------------*/

/*  8)- Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.  */
//Resposta://

let turno = 'M';  

if (turno === 'M') {
    console.log("Bom Dia!");  
} else if (turno === 'V') {
    console.log("Boa Tarde!");  
} else if (turno === 'N') {
    console.log("Boa Noite!");  
} else {
    console.log("Valor Inválido!");  
}