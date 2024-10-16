const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        { 
            extended: true
        }
    )); 

//     rota,requisição e resposta,       
app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">Nome: 
        <input type="text"name="qualquer">
        <button>Enviar</button>
        </form>`);
});


// agora irei da a resposta do 

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou: ${req.body.qualquer}`);
});

// para fazer uma nova rota
app.get('/testes/:idUsuarios?', (req, res) => { // estou passando o id depois da barra. A ? no final indica a opicionalidade
    console.log(req.params);
    res.send(req.params.idUsuarios); // pegando o id que coloquei. e mostrando na pagina
});

app.listen(3000, () => {
    console.log('Acessar htpp://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Estou passando a porta