// seria um try catch, em outras palavras.
// resolve é sempre que eu quero resolver minha promessa
// reject é tratar o erro,

function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            console.log(msg);
        resolve(msg); // estou passando o no resolve a mensagem
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta) // normalmente coloca funçoões dentro
        return esperaAi('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        return esperaAi('Frase 3', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('Erro', e);
        
    }); // sempre que chamamos nosso resolve, temos que chamar o then. Já o catch é quando tem o reject

