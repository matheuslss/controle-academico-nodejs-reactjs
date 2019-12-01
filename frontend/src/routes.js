import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

import Cursos from '../src/componentes/Curso/Curso';
import Alunos from '../src/componentes/Aluno/Aluno';

export default () =>
  <Switch>
    <Route exact path ='/cursos' component={Cursos} />
    <Route exact path ='/alunos' component={Alunos} />
    <Redirect from='*' to='/cursos' />
  </Switch>