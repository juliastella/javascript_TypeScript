// require é requere esse aquivo, buscar ele
// ele viro um objeto normal
// const mod1 = require('./mod1').falaNome;
// const falaNome = mod1.falaNome;

// console.log(mod1.falaNome());


// tem como fazer pelo modo desatribuição

// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());

// com a classe pessoa

const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Luiz');
console.log(p1);
