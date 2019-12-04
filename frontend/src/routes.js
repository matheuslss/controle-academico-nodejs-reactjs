import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

import Cursos from './componentes/Curso/Curso';
import Alunos from './componentes/Aluno/Aluno';
import ListarTurmasCurso from './componentes/Turma/Listar';
import Professores from './componentes/Professor/Professor';

export default () =>
  <Switch>
    <Route exact path ='/cursos' component={Cursos} />
    <Route exact path ='/cursos/:id/turmas' component={ListarTurmasCurso} />
    <Route exact path ='/alunos' component={Alunos} />
    <Route exact path ='/professores' component={Professores} />
    <Redirect from='*' to='/cursos' />
  </Switch>