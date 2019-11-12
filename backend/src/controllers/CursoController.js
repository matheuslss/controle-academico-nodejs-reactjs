const Curso = require('../models/Curso');

module.exports = {

  async index(req, res){
    const cursos = await Curso.findAll();

    return res.json(cursos)
  },
  
  async store(req, res) {
    const { nome } = req.body;

    const curso = await Curso.create({
      nome,
    })

    return res.json(curso);
  }
}