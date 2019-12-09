const Professor = require('../models/Professor');
const Disciplina = require('../models/Disciplina');

module.exports = {

  async index(req, res){

    const professor = await Professor.findAll({
      include:[{
        association: 'disciplina'
      }, {
        association: 'turma'
      }]
    });

    return res.json(professor)
  },
  
  async store(req, res) {

    const { id, nome, area_atuacao, titulacao, id_disciplina, id_turma } = req.body;

    let professor;

    if(id){
      professor = await Professor.update({
        nome, area_atuacao, titulacao, id_disciplina, id_turma
      }, 
      {
        returning: true, 
        where: {
          id: id
        }
      })
    } else {
      professor = await Professor.create({
        nome, area_atuacao, titulacao, id_disciplina, id_turma
      })
    }
    return res.json(professor);
  },

  async destroy(req, res) {
    const { id } = req.params;
    
    await Professor.destroy({
      where: {
        id: id
      }
    })
    return res.send();
  }
}

