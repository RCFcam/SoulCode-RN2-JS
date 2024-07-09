// // JAVASCRIPT - 

// Prof. José Almir
// ---
// ----

// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.

//Resposta//

/// Função flecha para encontrar o maior guerreiro
const encontrarMaior = (cavalo1, cavalo2) => {
    // Se cavalo1 for maior que cavaloo2, retorne cavalo1 :
    if (cavalo1 > cavalo2) {
      return cavalo1;
    }
    // Caso contrário, retorne Cavalo2 :
    else {
      return cavalo2;
    }
  };
  
  // impressão do resultado
  const cavaloVencedor = encontrarMaior(10, 50);
  console.log("O maior deles, é o cavalo nº", cavaloVencedor);

//

// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

//Resposta//

// Alterando a primeira letra das palavras:

const palavras = ["Abacate", "Constitucionalicimamente", "Soulcode"];

palavras.forEach(palavra => {
  // Peguando a primeira letra da palavra:
  const primeiraLetra = palavra.charAt(0);
  // Transformando a primeira letra em maiúscula :
  const primeiraLetraMaiuscula = primeiraLetra.toUpperCase();
  // Juntando a primeira letra em maiúscula com o restante da palavra :
  const palavraMaiuscula = primeiraLetraMaiuscula + palavra.slice(1);
  console.log("Palavra alterada com Maiúscula:", palavraMaiuscula);
});

//

// 3. Use map para transformar um array de números, multiplicando cada número por 5.

//Resposta//

// Transformando os números com map :
const numeros = [33, 88, 52, 7];

const numerosMultiplicados = numeros.map(numero => {
  // Multiplique cada número por 5
  const numeroMultiplicado = numero * 5;
  return numeroMultiplicado;
});
console.log("O resultado dos números originais \"" + numeros + "\" sendo multiplicados por x5 são :" + numerosMultiplicados + ".");

//

// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

//Resposta//

// Filtro de Maior idade idade:

const idades = [10, 15, 18, 21];

const idadeParAdultos = idades.filter(idade => {
  // Verifique se a idade é maior ou igual a 18
  if (idade >= 18) {
    return true; // Inclui pessoas com 18 anos ou mais será considerado adulto:
  } else {
    return false; // pessoas com  menos de 18 anos, será considerado não adulto:
  }
});
console.log("As pessoas na lista que são consideradas como Adultos, tendo 18 anos ou mais...são os :", idadeParAdultos);

//

// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

//Resposta//

// Acessando o nome da editora em um objeto livro :
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    publicacao: {
      editora: "Editora LTDA",
      ano: 1954
    }
  };
  
  // Acesse o objeto "publicacao" dentro do objeto "livro"
  const publicacao = livro.publicacao;
  // Acesse a propriedade "editora" dentro do objeto "publicacao"
  const nomeEditora = publicacao.editora;
  console.log("Nome da editora:", nomeEditora);
  
//

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
//Resposta//

// Desestruturando um array de frutas :

const frutas = ["Abacaxi", "Uva", "Pêra", "Tamarindo"];

// Desestruturando as duas primeiras frutas do array :

const [primeiraFruta, segundaFruta] = frutas;
console.log("Primeira fruta:", primeiraFruta);
console.log("Segunda fruta:", segundaFruta);

//

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.
//Resposta//

//

 // Vou ver  os arquivos certinho para fazer esta parte  da semana 3 , meus arquivos deram uma bagunçadinha e estou recuperando . obrigado professor!

