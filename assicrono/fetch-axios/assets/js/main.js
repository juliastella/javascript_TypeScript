// fetch('pessoas.json') // esse fetch para busca no json 
//   .then(respota => respota.json()) // pegamos a resposta e convertemos e json, criando uma nova promessa
//   .then(json => carregaElementosNaPagina(json));// so mandamos para a função

//trocando para axios

axios('pessoas.json')
.then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table'); // criamos a tabela

  for(let pessoa of json) {
    const tr = document.createElement('tr'); 

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}