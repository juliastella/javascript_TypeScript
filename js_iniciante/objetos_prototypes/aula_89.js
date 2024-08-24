// objeto resumo

// obejeto construido de forma construtor
const pessoa1 = new Object();
pessoa1.nome = 'Ju';
pessoa1.sobrenome = 'De';
pessoa1.idade = 20;

// delete pessoa1.nome;// estou apando o nome

// criaçao de metodos para obj

pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;  
};

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
    
// }

// Factory functions / constructor / classes

//factory

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){ // pode ou não usar o get 
//             return `${this.mome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('Joca', 'Calvo');
// console.log(p1.nomeCompleto);

//constructor

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // todos os atributos serão travados
}

const p1 = new Pessoa('julia','clara');
//Object.freeze(p1); // travo o meu objeto e não consimo mais alterar ele
console.log(p1);






