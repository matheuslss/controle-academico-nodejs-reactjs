const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Usuario = require('../models/Usuario');
const Curso = require('../models/Curso');
const Aluno = require('../models/Aluno');
const Disciplina = require('../models/Disciplina');
const Professor = require('../models/Professor');
const Turma = require('../models/Turma');
const Nota = require('../models/Nota');

Usuario.init(connection);
Curso.init(connection);
Professor.init(connection);
Disciplina.init(connection);
Turma.init(connection);
Aluno.init(connection);
Nota.init(connection);

Disciplina.associate(connection.models);
Professor.associate(connection.models);
Turma.associate(connection.models);
Aluno.associate(connection.models);
Nota.associate(connection.models);

module.exports = connection;
