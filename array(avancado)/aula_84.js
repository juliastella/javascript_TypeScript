// filter => sempre retornar um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// quero só pegar os números maiores que 10 d0 array, então vou chamar uma função de callback dentro do filtet
// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10;
// });

// diminuindo linha, vamos só mudar a functio para arrow function
// const numerosFiltrados = numeros.filter(valor => valor > 10);

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice);
    
    return valor > 10;
});


//onsole.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos

// Retorne as pessoas cujo nome termina com a

const pessoas = [

{ nome: 'Luiz', idade: 62},
{ nome: 'Maria', idade: 23},
{ nome: 'Eduardo', idade: 55},
{ nome: 'Letícia', idade: 19},
{ nome: 'Rosana', idade: 32 },
{ nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5); 
const pessoasCom50mais = pessoas.filter(obj => obj.idade >= 50); 
const pessoasQueTerminamA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); // tansformo o nome inteiro em minusculo e depois o endsWith vai procura a do final.


console.log(pessoasQueTerminamA);
