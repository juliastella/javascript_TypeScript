const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// rota do middlewares 

const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); 

// se eu quiser chamar o meu middleware em todo o sistema
app.use(middlewareGlobal);
app.use(routes);


app.listen(3000, () => {
    console.log('Acessar htpp://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Estou passando a porta