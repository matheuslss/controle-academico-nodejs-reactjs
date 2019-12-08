const Professor = require('../models/Professor');
const Disciplina = require('../models/Disciplina');

module.exports = {

  async index(req, res){

    const professor = await Professor.findAll();

    // {
    //   include:[{
    //     association: 'disciplina',
    //     include:[{
    //       association: 'curso',
    //       include: [{
    //         association: 'turmas'
    //       }]
    //     }]
    //   }]
    // }

    return res.json(professor)
  },
  
  async store(req, res) {

    const { id, nome, area_atuacao, titulacao } = req.body;

    let professor;

    if(id){
      professor = await Professor.update({
        nome, area_atuacao, titulacao
      }, 
      {
        returning: true, 
        where: {
          id: id
        }
      })
    } else {
      professor = await Professor.create({
        nome, area_atuacao, titulacao,
        include: [{
          association: 'disciplina',
        }]
      })
    }
    return res.json(professor);
  }
}

