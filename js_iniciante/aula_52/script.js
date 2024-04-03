/**
 * FOR
 * 
 * Geralmente com iteráveis (arrayou ou strings)
 */

// Exemplo para ver se é impar ou par

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

// percorrer um array
const frutas = ['maçã', 'pera', 'uva']

//length retorna o tamanho do array

for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);
}
