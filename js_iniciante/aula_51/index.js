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
console.log(teste, sobrenome);