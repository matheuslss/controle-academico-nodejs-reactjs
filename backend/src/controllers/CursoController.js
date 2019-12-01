const Curso = require('../models/Curso');
const Turma = require('../models/Turma');

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
  },

  async listarTurmas(req, res) {
    const { id_curso } = req.params;
    
    const turmas = await Turma.findAll({
      where: {id_curso}
    })

    return res.json(turmas);
  }
}