class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando.`);
    }

    comer(){
        console.log(`${this.nome} esta falando.`);
    }
    beber(){
        console.log(`${this.nome} esta falando.`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(params) {
    console.log(`${this.nome} esta falando.`);
};

const p1 = new Pessoa("Luiz", "Miranda");
const p2 = new Pessoa2("Carlos", "Miranda");

console.log(p1);
