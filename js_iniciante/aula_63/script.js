/**
 * Tratamento de erro
 */

// try { // codigo que gera o erro

// }catch(){ // tratar o erro, ou seja mudar a saida do erro

// }

function soma(x , y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisa ser números'); // colocando um erro se a entrada passar por essa verificação.
        // se quisemos que o erro fique com a estrutura que normalmente vem por padrão do JS, basta colocar o new <class de erro >
        // a class de erro você pode criala ou seja, colocar o nome que você quiser ou pegar classes já existentes na linguagem. 
        // as classes de erro são nada mais que construtores no JS.
    }

    return x + y;
}


try { 
    console.log(soma(1, 'number'));

}catch(erro){ 
    console.log(soma(erro));

}
