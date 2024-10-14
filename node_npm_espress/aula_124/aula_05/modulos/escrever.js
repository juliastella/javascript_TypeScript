const fs = require('fs').promises;   

/** passando o caminho, conteudo que irei colocar nele e
 * a flag w faz apagar tudo que estiver dentro dele caso já exista,
 * */   

/** Se eu quero que ele adicione ao final do arquivo ao contrario de reescrever
 * é só colocar na flag a.
 */
// fs.writeFile(caminhoArqivo, 'Frase1', {flag: 'w'});

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
  };