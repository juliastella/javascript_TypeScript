function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min); // Subtração adicionada
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){ 
            reject(false)
            return;
        }


        setTimeout(() => {
           resolve(msg.toUpperCase() + '- Passei na promise');
           return;
        }, tempo);
    });
} 

// Promise.all promise.race promise.resolve promise.reject

//promiase all recebe um array

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];
 

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });
    
// promise.race seria como se fosse uma corrida 

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });


function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Pagina em cache')
    }else{
        return esperaAi('Baixei a pagina', 2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
        
    })
    .catch(e => console.log("erro", e));