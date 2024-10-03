//               -5       -4       -3         -2         -1   posição do incices negativos
//                0        1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

// const removidos = nomes.splice(-2, 1); // indici negarivo
//                        Indice rev  add
const removidos = nomes.splice(3, 1, 'joana', 'Clara'); 



console.log(nomes, removidos);