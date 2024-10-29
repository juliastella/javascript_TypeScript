exports.paginaInicial = (req, res) => {
  // req.flash('info', 'Ola');
  // req.flash('error', 'b');
  // req.flash('succes', 'a');
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
