function imc(peso, altura) {
    return peso / (altura*altura)
}

const peso = document.getElementById('peso');
const altura = document.getElementById('altura');


console.log(imc(peso,altura));