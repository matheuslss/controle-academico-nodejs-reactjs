const Disciplina = require('../models/Disciplina');
const Professor = require('../models/Professor');

module.exports = {

  async index(req, res){
    const disciplina = await Disciplina.findAll({
      include:[{
        association: 'curso'
      }]
    });

    return res.json(disciplina)
  },
  
  async store(req, res) {

    const { id, nome, id_curso } = req.body;

    let disciplina;

    if(id){

      disciplina = await Disciplina.update({
        ano, semestre
      },{
        returning: true,
        where:{
          id: id_curso
        }
      })
    } else {
        disciplina = await Disciplina.create({
        id_curso, nome
      })
    }

    return res.json(disciplina);
  },

  async listarDisciplinas(req, res) {
    const { id_curso } = req.params;
    
    const disciplinas = await Disciplina.findAll({
      where: {id_curso}
    })

    return res.json(disciplinas);
  },

  async destroy(req, res) {
    
    const { id } = req.params;
    
    await Disciplina.destroy({
      where: {
        id: id
      }
    })
    return res.send();
  }
}