// propety() e properties

// a função freeze() ela trava todos os atributos o definePropety libera um para mudar
// e definerPoperties libera algumas

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estouque', { // estou fazendo apenas de um atributo
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar o valor
        configurable: true // poderia apagar a chave
    });

    Object.defineProperties(this, {
        nome: { // o objeto que quero 
                // as configurações dele 
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: true

        }, 
        preco: {
            enumerable: true, 
            value: estoque, 
            writable: false, 
            configurable: true
        },
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);;

for(let chave in p1){
    console.log();
}
