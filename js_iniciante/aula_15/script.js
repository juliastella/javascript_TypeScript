const verdadeira = true;

// Leet tem escorpo de bloco {... bloco}
// Var so tem escopo de funcao 

let nome = 'teste'; // Aqui acaba criando
let nome2 = 'teste';

if (verdadeira) {
    let nome = 'caso' // Aqui acaba criando em cima do que ja existe.
    // console.log(nome, nome2);

   if(verdadeira){
    let nome = 'Outra coisa' // redeclarando
    console.log(nome, nome2);
   }
}


// Escorpo de funcao

function falaOi() {
    var nome = 'Luiz';
    console.log(nome);
}

falaOi();  