let num1 = 0.9;

let num2 = Math.floor(num1); // aredondar uma valor para baxo
num2 = Math.ceil(num1); // aredondar uma valor para cima
num2 = Math.round(num1); // aredondar uma valor de forma automatica

console.log(Math.max(1,2,3,4,5, -10,-50,1500,9,8,7,6)); // Pega o maior valor de uma lista de numero
console.log(Math.min(1,2,3,4,5, -10,-50,1500,9,8,7,6)); // Pega o menor valor de uma lista de numero

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Random para gerar numeros aleatorios 

console.log(aleatorio);