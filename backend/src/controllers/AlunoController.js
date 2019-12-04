const Aluno = require('../models/Aluno');
const Turma = require('../models/Turma');

module.exports = {

  async index(req, res){

    const aluno = await Aluno.findAll({
      include: [{
        association: 'turma',
        include: [{
          association: 'curso',
        },]
      },
      { 
        association: 'notas',
      }]

    });

    // if(!usuario) {
    //   return res.status(400).json({ Erro: "Usuário não encontrado"})
    // }

    return res.json(aluno);
  },
  
  async store(req, res) {
    const { id, data_matricula, nome, id_turma } = req.body;

    const turma = await Turma.findByPk(id_turma)

    if(!turma) {
      return res.status(400).json({ Erro: "Turma não encontrada"})
    }

    let aluno;

    if(id){

      aluno = await Aluno.update({
        data_matricula, nome, id_turma
      }, 
      {
        returning: true, 
        where: {
          id: id
        }
      })
    } else {

      aluno = await Aluno.create({
        data_matricula, nome, id_turma
      })
    }

    return res.json(aluno);
  },

  async destroy(req, res) {
    const { id } = req.params;
    
    await Aluno.destroy({
      where: {
        id: id
      }
    })
    return res.send();
  }

}