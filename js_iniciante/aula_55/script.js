/**
 * FOR in
 * 
 * 
 * Retorna o índice ou chave (string, array ou obejtos)
 */

const frutas = ['maçã', 'pera', 'uva'];

// for (let indice in frutas){ // ele está lendo os índices do array 
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome:'Luiz',
    sobrenome: 'otavio',
    idade: 30
};

for (let chave in pessoa){ 
    console.log(chave, pessoa[chave]);
}