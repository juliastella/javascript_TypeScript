// função construtuora
// Sempre inica com letra maiuscula
// Construtora -> Exemplo (new)

function Pessoa(nome, sobrenome) {

    const ID = 123456;

    //atributos e metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.calculaIdade = calculaIdade;

    //metodos

    this.calculaIdade = function(ano1, ano2) {
        return ano1 - ano2
    }
}

const p1 = new Pessoa('ju', 'ste'); // Olha o new aí para cria uma pessoa
// o new cria um objeto vazio e faz o this ser direcionado para esse objeto vazio. 