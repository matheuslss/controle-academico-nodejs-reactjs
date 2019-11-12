const Professor = require('../models/Professor');

module.exports = {

  async index(req, res){

    const professor = await Professor.findAll();

    return res.json(professor)
  },
  
  async store(req, res) {

    const { id_usuario, area_atuacao, titulacao } = req.body;

    const professor = await Professor.create({
     id_usuario, area_atuacao, titulacao
    })

    return res.json(professor);
  }
}