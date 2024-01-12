let verdadeiro = true;

let nome = 'Luiz' // criando
var nome2 = 'julia'

if (verdadeiro) {
    let nome = 'Otavio'; // não estamos redeclarando a variavel e sim criando novamente.
    
    
    if (verdadeiro) {
        var nome2 = 'vitoria' // redeclarada
        let nome = 'outro';
        console.log(nome, nome2);
    }
}


// function falaOi() {
//     var sobrenome =  'casa'

//     if (verdadeiro){
//         let texto = 'Luiz';  // não é possivel usar uma variavel usada aqui e chamada fora desse bloco.
//         console.log(sobrenome);
//     }

//     console.log(texto);
// }

// falaOi();


// console.log(SourceBuffer);


// Isso é possível com o var, porém let não.
var sobrenome;

console.log(sobrenome);

sobrenome = 'stella'; // undefined
