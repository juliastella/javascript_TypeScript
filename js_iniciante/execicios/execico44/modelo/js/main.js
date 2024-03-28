const form = document.querySelector('#formulario')

// function imc(peso, altura) {
//     resultado = peso / (altura * altura);
//     return resultado;
//   }

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
})

function criaP() {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return
}


function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    // para criar um paragrafo
    const mostraP = criaP();
}
