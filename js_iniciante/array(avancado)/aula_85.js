//map => sempre retornar um array, com a mesma quantidade de elementos ou menos, contudo iremos modificar os elementos do nosso array.


// Filter, map, reduce I
// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

//console.log(numerosEmDobro);


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

const nomes = pessoas.map(valor => valor.nome);
const idades = pessoas.map(valor => ({idade : Object.idade}));
const  id = pessoas.map(function(obj, indice){ 
    obj.id = (indice = 1)* 1000;
    return obj;
})

console.log(id);
