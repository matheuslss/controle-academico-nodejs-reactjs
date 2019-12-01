const Curso = require('../models/Curso');
const Turma = require('../models/Turma');

module.exports = {

  async index(req, res){
    const cursos = await Curso.findAll();

    return res.json(cursos)
  },

  async store(req, res) {
    const { id, nome } = req.body;

    let curso;

    if(id){

      curso = await Curso.update({
        nome
      }, 
      {
        returning: true, 
        where: {
          id: id
        }
      })
    } else {

      curso = await Curso.findOrCreate({
        where:{
          nome: nome
        }
      })
    }
    return res.json(curso);  
  },

  async destroy(req, res) {
    const { id } = req.params;
    
    await Curso.destroy({
      where: {
        id: id
      }
    })
    return res.send();
  },

  async listarTurmas(req, res) {
    const { id_curso } = req.params;
    
    const turmas = await Turma.findAll({
      where: {id_curso}
    })

    return res.json(turmas);
  }
}