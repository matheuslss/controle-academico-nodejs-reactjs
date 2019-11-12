const Aluno = require('../models/Aluno');
const Turma = require('../models/Turma');
const Disciplina = require('../models/Disciplina');
const Nota = require('../models/Nota');

module.exports = {

  async index(req, res){

    const nota = await Nota.findAll( {
      // include: [{ 
      //   association: 'turmas',
      //   include: [{
      //     association: 'cursos'
      //   }]
      // }]
    });

    // if(!usuario) {
    //   return res.status(400).json({ Erro: "Usuário não encontrado"})
    // }

    return res.json(nota);
  },
  
  async store(req, res) {
    const { nota, peso, id_turma, id_disciplina, id_aluno } = req.body;

    // const turma = await Turma.findByPk(id_turma)

    // if(!turma) {
    //   return res.status(400).json({ Erro: "Usuário não encontrado"})
    // }

    const nota_aluno_disciplina = await Nota.create({
      nota, peso, id_turma, id_disciplina, id_aluno
    })

    return res.json(nota_aluno_disciplina);
  }
}