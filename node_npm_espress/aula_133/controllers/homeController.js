exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="POST">Nome: 
        <input type="text"name="qualquer">
        <button>Enviar</button>
        </form>`);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de Post')
};