// JAVASCRIPT - Semana 3 :

// Exercícios :

// Exercício - 1): Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
// Seu código aqui =>
    // Na função  foi criada a array vazia que irá receber o resultado apartir do for que iniciará pelo processo de loop , usando for ..if ..os filtros e a operação do resto da divisão se o resultado for 0 que é divisivel por dois , sendo par. Depois tenho os codigos de inserção para alimentar a função e a impressão pelo comando console.log, trazendo a variavel "resultadoPares" com as informações guardadas pela ação da função alimentada pela variavel "numeros".
    function recebendoPar(numeros) {
        let resultadoPares = [];

        for (let numero of numeros){
          if (numero % 2 == 0){
             resultadoPares.push(numero);
            }
        }    
        return resultadoPares;     
    }

    let numeros = [1, 894, 3, 259, 5, 6, 35, 44, 89]
    let resultadoPares = recebendoPar(numeros)
    console.log(resultadoPares);


// Exercício - 2): Escreva uma função que receba um array de números e retorne a soma de todos os números.
// Seu código aqui =>

        // Na função  abaixo possui em sua estrutura a indicação de definição unica por parâmetro e com codigo para calcular a soma e tendo o loop para atuar em cada elemento da array iserida na função.

    function calculandoSomadeElementos(dadosInseridos) {
        let retornoSoma = 0;
        for (let dados of dadosInseridos) {
            retornoSoma += dados;}        
        return retornoSoma;     
    }
    let elementosDeEntrada = [1, 894, 3, 259, 5, 6, 35, 44, 89]
    let resultadeSomaElementos = calculandoSomadeElementos(elementosDeEntrada)
    console.log(resultadeSomaElementos);




// Exercício - 3): Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
// Seu código aqui =>

    function verificarPalindromo(texto) {
        let textoMinusculo = texto.toLowerCase(); // Converte para minúsculas
        let textoReverso = ""; // Inicializa string vazia para o texto reverso
      
        for (let i = textoMinusculo.length - 1; i >= 0; i--) {
          textoReverso += textoMinusculo[i]; // Concatena cada caractere
        }
      
        return textoMinusculo === textoReverso; // Compara strings
      }
      
      // Exemplo de uso
      let textoEntrada = "ovo"; // String a ser verificada
      let resultadoPalindromo = verificarPalindromo(textoEntrada);
      
      if (resultadoPalindromo) {
        console.log(textoEntrada + " é um palíndromo!");
      } else {
        console.log(textoEntrada + " não é um palíndromo.");
      }


// Exercício - 4): Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
// Seu código aqui =>

  function contarVogais(texto) {
    let vogais = ["a", "e", "i", "o", "u"];
    let contadorVogais = 0;
    for (let letra of texto.toLowerCase()) {
      if (vogais.includes(letra)) {
        contadorVogais++;
      }
    }
    return contadorVogais;
  }
  let frase = "Minha gata ficou resfriada, no escritorio soulcode!";
  let numeroVogais = contarVogais(frase);
  console.log("A frase \"" + frase + "\" possui " + numeroVogais + " vogais.");

      // pensei na função que inicie a verificação da frase apartir do primeiro indice, declarando depois os itens que irão 
      // ser verificados se existem. Depois convertendo todas para minusculas... inserindo uma verificação se há algum indice da array "vogais" existe na frase e contando a exestencia delas . Depois guardandono em incremento na array "contadorVegais"                  // Inicializa contador de vogais


// Exercício - 5): Escreva uma função que receba um array de números e retorne o menor número do array.
// Seu código aqui =>
    // Na função do codigo feito,  irá verificar sempre o próximo indice da array , verificando se este é menor que ele. Sendo definido para o começo o primeiro indice da array, ele irá analisar até o ultimo. Dando assim sempre o menor número inserido nos indices da Array.

    function procurarOMenorNume(numeros) {
        let menorNumero = numeros[0]; 
        for (let i = 1; i < numeros.length; i++) {
          if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
          }
        }
        return menorNumero; 
      }
      let numeEntr = [5, -30, -10, 1, 20, 56, -3, 45, 0];
      let mEncontrado = procurarOMenorNume(numeEntr);
      console.log("O menor número da array inserida é: ", mEncontrado);

  

// Exercício - 6): Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
// Seu código aqui =>

    // Código : Na function tem a formula para tirar a média simples da somatoria dos valores de uma array.
    //           Está ação irá ocorrer pois a formula soma o primeiro indice ao posterior e divide pela quantidade de indices na array, independente de quantos indices tenha.

    function mediaNEmUmArray(arrayPaCal) {
        let soma = 0;
        for (let indiceDaArray of arrayPaCal) {
          soma += indiceDaArray;
        }
        return soma / arrayPaCal.length;
      }
      let mediadasArray = mediaNEmUmArray([7.0, 8.0, 9.0, 10, 30, 36, 89]);
      console.log("A média dos números é:", mediadasArray);


// Exercício - 7): Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.
// Seu código aqui =>







// Exercício - 8): Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
// Seu código aqui =>

    // // dividir o email em partes
  function esconderEmail(email) {
    let partesEmail = email.split("@");
    // primeira parte do email (nome)
    let nome = partesEmail[0];
    // Vamos ofuscar a primeira parte do nome
    let nomeEscondido = "";
    for (let i = 0; i < nome.length; i++) {
      if (i < 3) {
        nomeEscondido += nome[i];
      } else {
        nomeEscondido += "*";
      }
    }
    // ocultando o email completo 
    let emailEscondido = nomeEscondido + "@" + partesEmail[1];
    // Vamos devolver o email ofuscado
    return emailEscondido;
  }
  // usando a função para esconder um email
  let email = "jose.almir@dev.com";
  let emailEscondido = esconderEmail(email);
  // mostrando o email escondido
  console.log("Email original: " + email);
  console.log("Email escondido: " + emailEscondido)
// ---------------------------------------------------------

function receberEmail(email) {
  let emailRecebido = email.replaceAll("ose.almir","******");
  console.log("Você me enviou o email " + emailRecebido );
}
let emailDoUsuario = "oscar@dev.com";
receberEmail(emailDoUsuario);
   
// ok abaixo :

/// no codigo pensei em dividir em duas seçoes o email e trabalhar a ocultação da parte que eu gostaria , idempendente do email inserido.

function esconderEmail(email) {
  let partes = email.split('@');
  let nomeUsuario = partes[0];
  let dominio = partes[1];
  let nomeUsuaOcultado = nomeUsuario.substring(0, 1) +'*****';
  let emailCodificado = nomeUsuaOcultado+'@'+dominio;
  return emailCodificado;
  }
  let meuEmail = 'rodrigocamacho@soulcode.com';
  let emailEscondido = esconderEmail(meuEmail);
  console.log(emailEscondido);