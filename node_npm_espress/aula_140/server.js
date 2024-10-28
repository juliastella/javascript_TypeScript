require('dotenv').config(); // vamos mascarar os dados do connectionString
const express = require('express');
const app = express();
// Vamos chamar o mongoose para iniciar a conexão com o mongoDB
const mongoose = require('mongoose');

// Isso aqui retorna uma promessa
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Conectei a base de dados');
    app.emit('pronto'); // assim que conectar, o app manda um sinal
}).catch(e => console.log(e));

// O resto do código...


const routes = require('./routes');
const path = require('path');
// rota do middlewares 
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); 
// Se eu quiser chamar o meu middleware em todo o sistema
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log('Acessar http://localhost:3000');  
        console.log('Servidor executando na porta 3000');
    });
});
