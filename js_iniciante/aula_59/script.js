/**
 * Break e continue
 */

const numeros = [1,2,3,4,5,6];

for (let numero of numeros){
    if (numero === 2) {
        continue; // pula para a proxima interação do laço, sem execulta a linhas a baixo. 
    }

    if (numero === 7) {
        break; // Quebra a linha, ou seja não vai execulta mais nada a baixo quando che no elemento esperado.
    }


    console.log(numero);
}

