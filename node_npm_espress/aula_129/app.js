const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); //posso troca o tipo do arquivo para .txt
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');


// const pessoas = [
//     {nome: 'Joca'},
//     {nome: 'Jica'},
//     {nome: 'Poca'},
//     {nome: 'Karla'},
//     {nome: 'Teste'},
// ];

// const json = JSON.stringify(pessoas, '', 2); // estou convertendo o meu objeto em json
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
  }
  
  function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
  }
  leArquivo(caminhoArquivo);
  
