const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({ // é um objeto com a configuração dos dados que queremos 
    titulo: {type: String, require: true}, // estou especificando como quero que os meus dados sejam armazenados no mongoDB 
    descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body){
        this.body = body;
    }
}

module.exports = LoginModel;