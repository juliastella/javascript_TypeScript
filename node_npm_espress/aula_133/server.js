const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended: true})); 
app.use(routes);


app.listen(3000, () => {
    console.log('Acessar htpp://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Estou passando a porta