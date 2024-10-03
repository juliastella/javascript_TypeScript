// Reduce => reduzir um array a um unico elemento

// Filter, map, reduce I
// Some todos os números (reduce)
// Retorne array com os pares (filter)
// retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) { //somei todos os números
//     acumulador += valor;
//     console.log(acumulador, valor);
//     return acumulador;
// }, 0);

// const total = numeros.reduce(function(acumulador, valor, indice, array) { //// Retorne array com os pares
//    if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

const total = numeros.reduce(function(acumulador, valor) { // retorne um array com o dobro dos valores
     acumulador.push(valor*2);
     return acumulador;
 }, []);

console.log(total);



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos

// Retorne a pessoa mais velha
const pessoas = [

{ nome: 'Luiz', idade: 62},
{ nome: 'Maria', idade: 23},
{ nome: 'Eduardo', idade: 55},
{ nome: 'Letícia', idade: 19},
{ nome: 'Rosana', idade: 32 },
{ nome: 'Wallace', idade: 47},
];


const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; 
});

console.log(maisVelha);
