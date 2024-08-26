// métodos úteis para objetos

/*
Object.values (é semelhante ao keys)
Object.entries (é semelhante ao keys)
Object.assign(des, any) (serve para copiar o objeto)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

o que já foi visto

object.keys (retorna as chaves)
Object.freeze (congela o objeto)
object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto1 = {
    nome: 'caneca',
    preco: 1.8
};

/*const outraCoisa = {
    ...produto,
    material: 'porcelana'
};
outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
*/


/*//Object.assign(des, any)
                                // copiei tudo de produto para esse
const caneca = Object.assign({}, produto, {matrial: 'porcelana'}); // como também posso adicionar outros obejtos

// essa é a forma mais trabalhosa, mas seleciona o que é especifico.
const caneca2 = {nome: produto.nome, preco: produto.preco}
*/

const produtoB = {nome: 'Produto', preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produtoB, 'nome', {
    Writable: false,
    configurable: false
}));



console.log(produtoB);

