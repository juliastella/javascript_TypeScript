import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {  // Torna a função assíncrona
    const novoAluno = await Aluno.create({
      nome: 'Júlia',
      sobrenome: 'Stella',
      email: 'julia.adim@gmail.com',
      idade: 21,
      peso: 65,
      altura: 1.68,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
