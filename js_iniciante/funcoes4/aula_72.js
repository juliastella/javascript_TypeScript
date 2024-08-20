// Closures
// É a abilidade da função de acessa o seu proprio escorpo lexico
function retornaFuncao() {
    const nome = "Jú";
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);
