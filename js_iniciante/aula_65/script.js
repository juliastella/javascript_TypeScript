/**
 * setInterval = configura intervalo de tempo para que uma função 
 * seja execultada em um determinado momento.
 * setTimeout = permite executar um código após um tempo estipulado, que pode ser definido em milissegundos. 
 */


function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

function funcaDoInterval() {
    console.log(mostraHora());
}

const timer = setInterval(function funcaDoInterval() {
    console.log(mostraHora());
}, 1000); // essa função vai ser executada a cada 1000ms 

setTimeout(function() {
    clearInterval(timer); // para a const time
}, 10000); // Vai para a 10000ms = a 10s.