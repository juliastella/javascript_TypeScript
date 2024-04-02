const pessoa = {
    nome:'j',
    sobrenome: 'P',
    idade: 20,
    endereco:{
        rua: 'Av J',
        numero: 100
    }  
};
// atribuição via destruturação 
const {idade} = pessoa // vai tirar co objeto essa chave
//const {nome = 'Não existe', sobrenome} = pessoa // podemos colocar mais de uma atributo do metodo. Além de atribuir valores a eles.
const {nome: teste = 'Não existe', sobrenome} = pessoa // o nome terá outro valor

//const { endereco: {rua, numero}, endereco } = pessoa; // E eu posso pergar para mostrar o objeto novamente, assim declarei endereço de novo
console.log(teste, sobrenome);

const { endereco: {rua:r = 12345 , numero}, endereco } = pessoa;

console.log(r, numero, endereco);

// podemos também pegar o resto do objeto

const {nome, ...resto } = pessoa;
console.log(resto);
