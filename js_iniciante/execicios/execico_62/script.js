/**
 *  1 Escreva uma função que recebe um número e
    2 retorne o seguinte:
    3 Número é divisível por 3 = Fizz
    4 Número é divisível por 5 Buzz
    5 Número é divisível por 3 e 5 = FizzBuzz
    6 Número NÃO é divisível por 3 e 5 Retorna o próprio número
    7 Checar se o número é realmente um número = Retorna o próprio número
    8 Use a função com números de 0 a 100
 */

const divisor = (numb) => {
    if (typeof numb ==! 'number')  return numb;
    if ( (numb % 3 === 0) && (numb % 5 === 0) ) return 'FizzBuzz';
    if (numb % 5 === 0) return 'Buzz';   
    if (numb % 3 === 0) return 'Fizz';    
    return numb;
}


for (let i = 0; i <= 100; i++) {
    console.log(i ,divisor(i));    
}

