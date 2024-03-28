const numeros = [1000, 2000, 3000, 4000, 5000];

/** Esse operador faz duas coisas 
 *  No sentido de pegar o reto de alguma coisa, ele se chamara = ... rest.
 *  No sentido de destribuir ou espalhar = ... spread
 */

// resto é literalmente o resto do array que não foi atribuido a uma variavel  

// const [primeiroNumero, SegundoNumero, TerceiroNumero, resto] = numeros;

// Se queremos pular alguns, podemos fazer dessa forma

const [primeiroNumero, , terceiroNumero, quartoNumero] = numeros;

console.log(primeiroNumero, SegundoNumero, TerceiroNumero);
console.log(resto);

// Outro exemplo

//                    0        1       2 
//                 0 1 2    3 4 5    6 7 8        
const numeros2 = [[1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3] = numeros2

console.log(lista3[2]);