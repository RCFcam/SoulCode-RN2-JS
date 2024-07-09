



// Exemplo: Use map para transformar os valores do array abaixo.
const valores = [1, 2, 3, 4, 5, 6, 7];

valores.map((valor) => {
    (n)
    // Se o valor for par faz valor * 2, se for ímpar faz valor / 2
});


 // FILTER: 


// Filter = cria um novo array com todos os elementos
// que passaram no teste da função

const notas = [7.0, 4.0, 5.5, 9.0, 8.4];
const notasAcima7 = notas.filter((nota) => nota > 7);

console.log(notasAcima7);

// Exemplo: Filtro de arquivos
let arquivosPasta = ["codigo.js", "estilos.css", "index.html", "sobre.html"];
let extensao = ".html";

// Novo array com os elementos que passaram no teste
const arquivosHtml = arquivosPasta.filter((arquivo) => arquivo.endsWith(extensao));
console.log(arquivosHtml);

// Exemplo: Lista de presença
let turma = ["José Almir", "Gabriel Braga", "Victor Icoma", "Igor Gondim", "Bismark"];
let presenca = ["Gabriel Braga", "Victor Icoma", "Bismark"];

const ausentes = turma.filter((aluno) => !presenca.includes(aluno));
console.log(ausentes);

//// Prof.

// Map = cria um novo array com os resultados da função aplicada em cada elemento
const numeros = [3, 4, 9, 10];
// Cada elemento no array, será aplicado na função
// O resultado será gerado em um novo array
const quadrados = numeros.map((n) => n**2);
console.log(quadrados);

const nomes = ["josé", "maria", "joão", "carlos"];
// nome = valor de cada elemento
// i = indice desse elemento
const nomesMaiusculo = nomes.map((nome, i) => nome.toUpperCase());
const nomesExclamacao = nomes.map((nome, i) => nome + "!");

console.log(nomes);
console.log(nomesMaiusculo);
console.log(nomesExclamacao);

// Exemplo: Use map para transformar os valores do array abaixo.
const valores = [1, 2, 3, 4, 5, 6, 7];

const novoValores = valores.map((valor) => {
    // Se o valor for par faz valor * 2, se for ímpar faz valor / 2
    if(valor % 2 == 0) {
        return valor * 2;
    } else {
        return valor / 2;
    }
});

console.log(novoValores);