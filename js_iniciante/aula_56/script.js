/**
 * FOR of and forEach
 * 
 * O for of = retorna o valor em si (iteráveis, arrays o strings)
 */

const frutas = ['maçã', 'pera', 'uva'];

for (let valor of frutas){ // nào conseguimos utilizar o for of em objetos, já que objetos não são interaveis
    console.log(valor);
}

frutas.forEach(function (valor, indice) {
    console.log(valor, indice);
})