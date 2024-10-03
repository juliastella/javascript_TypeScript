// nova forma de construir array

const nomes = new Array('Eduardo', 'Maria', 'J');
//const novo = nomes; // se eu mudar novo, eu também mudo nomes
const novo = [...nomes]; // o que eu faço em novo não vai alterar nomes
// teriocamente eu fiz uma copia de nomes e coloquei em novo

const novoNome = nomes.join(' '); // faço a união de todos os elemento em uma string
// para ser o separador de dentro você pode deixa () vazio e adicona ",", e pode (" ") que só separa os nomes
novo.pop();

console.log(nomes);

console.log(novoNome);
