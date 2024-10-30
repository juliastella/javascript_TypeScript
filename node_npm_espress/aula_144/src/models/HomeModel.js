const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({ // é um objeto com a configuração dos dados que queremos 
    titulo: {type: String, require: true}, // estou especificando como quero que os meus dados sejam armazenados no mongoDB 
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;