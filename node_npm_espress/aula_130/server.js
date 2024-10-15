const express = require('express');
const app = express();

//     rota,requisição e resposta,       
app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">Nome: 
        <input type="text"name="nome">
        <button>Enviar</button>
        </form>`);
});


// agora irei da a resposta do 

app.post('/', (req, res) => {
    res.send('Recebi o formulario')
});

// para fazer uma nova rota

app.get('/contato', (req, res) => {
    res.send('Obrigado em entra em contato');
});


app.listen(3000, () => {
    console.log('Acessar htpp://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Estou passando a porta