// let a =  'A';
// let b =  'B';
// let c =  'C';

// const numerosA = [b,c,a]; // estou pegando as variaves acima a, b e c. E colocando em um array.
// [a,b,c] = numeros; // reatibuido a cada elemento de array o valor da variavel numeros que tem um array com as variaveis.

// console.log(a,b,c);


const numeros = [1,2,3,4,5,6,7,8,9];

const [primeiroN, segundoN, ...resto] = numeros; // ...resto equile ao outros do array.
// todas as vezes que adiciono uma vairavel no array, os resto diminui.

const [um, , tres, , cinco, , sete] = numeros;

// console.log(primeiroN, segundoN);
// console.log(resto);

console.log(um, tres, cinco);
