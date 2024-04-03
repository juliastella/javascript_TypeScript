/**
 * Atividade pegar os p e colocar a cor deles com a cor correspondente do body.
 */

const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backColorBody = estilosBody.backgroundColor;


console.log(backColorBody);


for (let p of ps){
    p.style.backgroundColor = backColorBody;
    p.style.color = '#ffffff';
}

