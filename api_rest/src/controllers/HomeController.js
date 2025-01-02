class HomeController {
  async index(req, res) {  // Torna a função assíncrona
    res.json('Index');
  }
}

export default new HomeController();
