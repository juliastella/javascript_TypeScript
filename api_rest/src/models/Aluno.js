import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len:{
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracter.',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len:{
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracter.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail:{
              msg: 'E-mail inválido',
            },
          },
        },
        idade: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isInt:{
              msg: 'Idade precisa ser um número inteiro',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat:{
              msg: 'Altura precisa ser um número inteiro',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat:{
              msg: 'Sobrenome precisa ter entre 3 e 255 caracter.',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'alunos',
        timestamps: true,
      }
    );
    return this;
  }
}
