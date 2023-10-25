// Date é uma função construtora
// se Date é igual a zero, isso indica que é o inicio da contagem ou seja a data de inicio 01/01/1970 timestamp unix


//const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, minuto, segundo, milessimo de segundo.

const data = new Date("2019-04-20T20:20:59");// esse é outro formato
// console.log('Dia', data.getDate()); // Obtem o número do dia
// console.log('Mês', data.getMonth() + 1); // Obtem o número do dia. Se quisemos o mês real usamos o + 1
// console.log('Ano', data.getFullYear()); // Obtem o número do ano
// console.log('Hora', data.getHours()); // Obtem o número do hora
// console.log('Min', data.getMinutes()); // Obtem o número do minuto
// console.log('Seg', data.getSeconds()); // Obtem o número do segundo
// console.log('ms', data.getMilliseconds()); // Obtem o número do milisegundo
// console.log('Dia semana', data.getDay()); // Obtem o número do dia na semana. 0 - domingo, 6 - sábado.

// console.log(data.toDateString()); //Formato extrangeiro 

// Você também pode criar a data na hora. aÉ outra forma

console.log(Date.now()); // seria do marco zero até a data de hoje em milessimos de segundo.

// Vamos construir uma função par conversão:

function zeroAEsrquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsrquerda(data.getDate());
  const mes = zeroAEsrquerda(data.getMonth() + 1);
  const ano = zeroAEsrquerda(data.getFullYear());
  const hora = zeroAEsrquerda(data.getHours());
  const min = zeroAEsrquerda(data.getMinutes());
  const seg = zeroAEsrquerda(data.getSeconds());
  
  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data2 = new Date();
const dataBrasil = formataData(data2);

console.log(dataBrasil);
