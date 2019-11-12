const Aluno = require('../models/Aluno');
const Turma = require('../models/Turma');

module.exports = {

  async index(req, res){

    const aluno = await Aluno.findAll( {
      include: [{ 
        association: 'turmas',
        include: [{
          association: 'cursos',
        }]
      }],
      include: [{
        association: 'notas'
      }]
    });

    // if(!usuario) {
    //   return res.status(400).json({ Erro: "Usuário não encontrado"})
    // }

    return res.json(aluno);
  },
  
  async store(req, res) {
    const { data_matricula, nome, id_turma } = req.body;

    const turma = await Turma.findByPk(id_turma)

    if(!turma) {
      return res.status(400).json({ Erro: "Usuário não encontrado"})
    }

    const aluno = await Aluno.create({
      data_matricula, nome, id_turma
    })

    return res.json(aluno);
  }
}