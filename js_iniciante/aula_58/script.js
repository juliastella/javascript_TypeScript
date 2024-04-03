/**
 * O while vai verificar a condição e depois execulta o código
 */



function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let min = 1;
let max = 50;
let rand = random(min, max);

while (rand !== 10){ // enquanto for diferente de dez ele faz. E quando for dez para. 
    rand = random(min, max);
    console.log(rand);
}

console.log('##################################');
/**
 * O Do while é faça primeiro e depois verifique 
 */

do{
    rand = random(min, max);
    console.log(rand);
}while (rand !== 10) {
    
}