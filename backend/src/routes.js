const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const CursoController = require('./controllers/CursoController');
const AlunoController = require('./controllers/AlunoController');
const DisciplinaController = require('./controllers/DisciplinaController');
const ProfessorController = require('./controllers/ProfessorController');
const TurmaController = require('./controllers/TurmaController');
const NotaController = require('./controllers/NotaController');

const routes = express.Router();

//usuarios
routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);
routes.get('/usuarios/:id_usuario', UsuarioController.show);
//cursos
routes.get('/cursos', CursoController.index);
routes.get('/cursos/:id_curso', CursoController.show);
routes.post('/cursos', CursoController.store);
routes.put('/cursos', CursoController.store);
routes.get('/cursos/:id_curso/turmas', CursoController.listarTurmas);
routes.delete('/cursos/:id_curso', CursoController.destroy);
//alunos
routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.store);
routes.put('/alunos', AlunoController.store);
routes.delete('/alunos/:id', AlunoController.destroy);
//disciplinas
routes.get('/disciplinas', DisciplinaController.index);
routes.post('/disciplinas', DisciplinaController.store);
//professores
routes.get('/professores', ProfessorController.index);
routes.post('/professores', ProfessorController.store);
//turmas
routes.get('/turmas', TurmaController.index);
routes.post('/turmas', TurmaController.store);
routes.put('/turmas', TurmaController.store);
routes.delete('/turmas/:id', TurmaController.destroy);
//notas
routes.get('/notas', NotaController.index);
routes.post('/notas', NotaController.store);

module.exports = routes;