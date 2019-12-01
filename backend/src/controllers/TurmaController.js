const Turma = require('../models/Turma');

module.exports = {

  async index(req, res){

    const turma = await Turma.findAll({
      include: [{
        association: "curso"
      }]
    });

    return res.json(turma)
  },
  
  async store(req, res) {

    const { id_curso, ano, semestre } = req.body;

    const turma = await Turma.create({
      id_curso, ano, semestre
    })

    return res.json(turma);
  },
}