// JAVASCRIPT - Arrays, Funções e Strings
// Prof. José AlmirData de entrega: 23:59


// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
//Resposta//

let todosOsAlunos = ["Pablo", "Batista", "Lucia", "Carlos", "Gustavo", "Igor"];
let alunosPresentes = ["Pablo", "Carlos", "Igor"];

/*Função : Formula para aplicação da função */
function quemFaltou(nomesDosAlunos, AlunosPresentes) {
    let alunosQuefaltaram = [];                      // o Retuno com a resposta da função.
                                                      
    for (let i = 0; i < nomesDosAlunos.length; i++) {// Considerando cada elemento da lista
                                                     // Analisando se o aluno não estiver na list "AlunosPresentes" ele faltou.
        if (!AlunosPresentes.includes(nomesDosAlunos[i])) {
            alunosQuefaltaram.push(nomesDosAlunos[i]);
        }
    }
    return alunosQuefaltaram ;
}
// Ativando a função e mostrando quem faltou:
let alunosQuefaltaram = quemFaltou(todosOsAlunos, alunosPresentes);
console.log(alunosQuefaltaram);  // Chamando a resposta da função com o cálculo feito, 
                                 //considerando as informações inseridas nas Arrays.

//---------//
// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
//Resposta//


let numeros = [4, 88, 8, 75, 5];

function numquadrados(numeros) {
    let elvQuadrado = [];
    for(let i = 0; i <numeros.length;i++) {
        elvQuadrado.push(numeros[i] * numeros[i]);
    }
    return elvQuadrado;
}

//trazendo a função:
let numAoquadrado = numquadrados(numeros);
console.log (numAoquadrado);


//---------//

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
//Resposta//

let nomesArquivos = ["ed.jpg", "doc.pdf", "mus.mp3", "vi.mp4", "des.png", "vi.vlc" , "doc.dng"];

function tipodeArquivo(nomesArquivos, exten) {
    let filtArq =[]                                    //   Criada para guardar o resultado

    for (let i = 0; i < nomesArquivos.length; i++) {  //  Formula para olhar o arquivo em cada lista
        if (nomesArquivos[i].endsWith(exten)){        //  Formula para achar O arquivo terminando com a extensão
            filtArq.push(nomesArquivos[i]);          //  Formula para separar O arquivo 
        }       
    }
    return filtArq;                                  //   Criada retornar informação da função. 
}
  
let arquiMp4 = tipodeArquivo(nomesArquivos,".mp4");
console.log(arquiMp4);


//---------//

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
//Resposta//

let nume = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

//for comum:
console.log("------------- for comun -------------" )

for(let i = 0; i < nume.length; i++) {
    console.log("O número é "+ nume[i]);
}
// for of:

console.log( "------------- for of ---------------" )

for (let numero of nume) {
    console.log(numero);
}

//---------//


// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
//Resposta//

let escrita = [ "onomatopeia" , "gato", "Saquarema", "resto", "vida", "Cachorro"]

function filEscrita(escrita){
    let acimaDeCincoCarac = [];
    for(let i = 0; i < escrita.length; i++) { // formula de análise dos termos dentro das listas.
        if (escrita[i].length > 5) {   // pedindo para que tudo que tiver mais que 5 caracteres seja incluido na minha lista 
            acimaDeCincoCarac.push(escrita[i]);   // jogando para a lista nova a ser criada no array destinado a ela.
                                                  // ainda dentro da função.
        }
    }
return acimaDeCincoCarac;
}

let maisDeCincoCarac = filEscrita(escrita);
console.log(maisDeCincoCarac)

//---------//

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
//Resposta//

let listacom7numeros = [1 , 8 , 3 , 854 , 5 , 155 ,78 ] // definindo a lista a ser percorrida

let oMaiorN = listacom7numeros[0] // definindo o indice de ponto de partida 

for (let i = 1; i < listacom7numeros.length; i++) {
    if(listacom7numeros[i] > oMaiorN) {
        oMaiorN = listacom7numeros[i];
    }
}
console.log("o maior número é:"+ oMaiorN);

//---------//

// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
//Resposta//
let cpf1 = "056.985.990-23";
function extDigVer(cpf1) {
    let digitosVerificadores = cpf.slice(-2);
    return digitosVerificadores;
}
console.log("CPF digitado : "+ cpf1)
let cpf = "056.985.990-23";
let digitosVerificadores = extDigVer(cpf);
console.log("Os dois ultimos digitos são: "+ digitosVerificadores); 

//---------//

// 8. Crie uma função que inverte uma string. Retorna ela invertida.
//Resposta//

function inverterString(str) {
    let arrayDeCaracteres = str.split('');
    let arrayInvertido = arrayDeCaracteres.reverse();
    let stringInvertida = arrayInvertido.join('');
    return stringInvertida;
}

let exemplo = "Meu mundo caiu de pé!";
let exemploInvertido = inverterString(exemplo);
console.log(exemploInvertido); 

//---------//

// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.
//Resposta//

function repetir(palavra, numero) {
    let resultado = "";
    
    for (let i = 0; i < numero; i++) {
        resultado += palavra; // Adicione a palavra ao resultado
    }
    return resultado;
}
let palavraRepetida = repetir("batata", 3);
console.log(palavraRepetida)

//---------//

// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.
//Resposta//

function saoIguaisouNao(string1, string2) {
    if (string1 === string2) {
        return true; 
    } else {
        return false; 
    }
}
let resultado1 = saoIguaisouNao("tostines", "tostines");
console.log(resultado1); 
let resultado2 = saoIguaisouNao("kibom", "prestigio");
console.log(resultado2); 

//---------//

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'
//Resposta//

function formatarData(dataArray, separador) {
    let dataFormatada = dataArray.join(separador);
    return dataFormatada;
}
let data = [20, 6, 2000];
let separador = '/';
let dataFormatada = formatarData(data, separador);
console.log(dataFormatada); 


//---------//

// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'

//Resposta//

function busca(array, valorDeBusca, valorPadrao) {
    if (array.includes(valorDeBusca)) {
        return valorDeBusca; 
    } else {
        return valorPadrao;
    }
}

let frutas = ["maçã", "banana", "laranja","Mico leão",];
let resultado1 = busca(frutas, "banana", "não tem banana");
console.log(resultado1); 

let resultado2 = busca(frutas, "batata", "não tem batata");
console.log(resultado2); 


//---------//
