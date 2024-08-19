const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const criaLi = () =>{
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(params) {
    inputTarefa.value = '';
    inputTarefa.focus(); 
}

function criaBotaApagar(li) {
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    li.appendChild(botaoApagar);
}

function criaTarefa(textoIpunt) {
    const li = criaLi(); 
    li.innerText = textoIpunt;
    tarefas.appendChild(li);
    limpaInput();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})