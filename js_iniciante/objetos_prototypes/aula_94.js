// manipulando prototypes

// Isso é um new object
const  objeA = {
    chave: 'A'
    // __proto: Object.prototype
};

const  objeB = {
    chave: 'B'
    // __proto: Object.prototype
};


const objeC = new Object();
objeC.chaveC = 'C';

// não é aconselhavel usar o prototype puro, pode gerar problemas de desenpenho
// Object.setPrototypeOf(objeB, objeA);
// Object.setPrototypeOf(objeC, objeB);
// console.log(objeB.chaveA);


// exemplo 2


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);
