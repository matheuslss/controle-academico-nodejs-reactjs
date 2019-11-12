const Usuario = require('../models/Usuario');

const md5 = require('md5');

module.exports = {

  async index(req, res){
    const usuarios = await Usuario.findAll({
      attributes: [
        "id",
        "nome",
        "email"
      ]
    });

    return res.json(usuarios)
  },
  
  async store(req, res) {
    const { nome, email, senha} = req.body;

    const usuario = await Usuario.create({
      nome,
      email,
      senha: md5(senha + global.SALT_KEY)
    })

    return res.json(usuario);
  },

  async show(req, res) {
    const { id_usuario } = req.params;

    const usuario = await Usuario.findByPk(id_usuario);

    return res.json(usuario)
  }
}