import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

// Inicializa a conexão com o banco de dados
const connection = new Sequelize(databaseConfig);

// Inicializa cada modelo
models.forEach((model) => model.init(connection));

export default connection;
