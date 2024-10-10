// const nome = 'teste';
// const sobrenome = 'x';

// const falaNome = () => nome + ' ' + sobrenome;

// //forma de exporta
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// //  forma abreviada de exporta

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// //  atrelou o this 
// this.qualquerCoisa = 'o que eu quiser exportar';


// Fazendo codigo acima com classe

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

