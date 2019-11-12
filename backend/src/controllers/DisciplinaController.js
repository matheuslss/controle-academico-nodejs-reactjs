const Disciplina = require('../models/Disciplina');
const Professor = require('../models/Professor');

module.exports = {

  async index(req, res){

    const disciplina = await Disciplina.findAll();

    return res.json(disciplina)
  },
  
  async store(req, res) {

    const { nome, id_curso } = req.body;

    console.log(req.body);

    const disciplina = await Disciplina.create({
      nome,
      id_curso,
    })

    return res.json(disciplina);
  }
}