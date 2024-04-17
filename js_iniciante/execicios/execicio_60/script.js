// Fazer uma função que mostre qual foi o maior número entre eles

// Corrigindo a função para retornar o maior número
// function maiorNumero(numb1, numb2) {
//     return numb1 > numb2 ? numb1 : numb2; 
// }

const maiorNumero = (numb1, numb2) => numb1 > numb2 ? numb1 : numb2; // a palavra return fica implicita depois do '=>'

console.log(maiorNumero(1, 4));
