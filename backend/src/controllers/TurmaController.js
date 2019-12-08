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

    const { id, ano, semestre, id_curso } = req.body;

    let turma;

    if(id){

      turma = await Turma.update({
        ano, semestre
      },{
        returning: true,
        where:{
          id: id_curso
        }
      })
    } else {
        turma = await Turma.create({
        id_curso, ano, semestre
      })
    }

    return res.json(turma);
  },

  async destroy(req, res) {
    
    const { id } = req.params;
    
    await Turma.destroy({
      where: {
        id: id
      }
    })
    return res.send();
  }
}
