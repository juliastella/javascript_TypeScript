// Getters e Setters
// get = obtem o valor
// set = configura o valor

function Produto(nome, preco, estoque) {

    let estoquePrivado
    Object.defineProperty(this, 'estouque', { // estou fazendo apenas de um atributo
        enumerable: true, // mostra a chave
        configurable: true, // poderia apagar a chave

        get: function(){
            return estoque;
        }, 
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('mensagem')
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);;

for(let chave in p1){
    console.log();
}