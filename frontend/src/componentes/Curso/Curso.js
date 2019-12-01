import React, {useState, useEffect} from 'react';
import Main from '../template/Main/Main';

import ListarCursos from './Listar';
import CadastrarCurso from './Cadastrar';
import EditarCurso from './Editar';

export default function Alunos(props) {

  const [view, setView] = useState("Listar");
  const [curso, setCurso] = useState();

  useEffect(() => {
    setView("Listar")
  },[])

  function exibirCadastrarCurso() {
    setView("Cadastrar");
  }

  function exibirListarCurso() {
    setView("Listar");
  }

  function exibirEditarCurso(curso) {
    setCurso(curso);
    setView("Editar");
  }

  return (
    <Main title="Cursos" >
      {view === "Listar" ? <ListarCursos novoCurso={() => exibirCadastrarCurso()} 
      editarCurso={exibirEditarCurso} /> : null}
      {view === "Cadastrar" ? <CadastrarCurso listarCursos={() => exibirListarCurso()} /> : null}
      {view === "Editar" ? <EditarCurso listarCursos={() => exibirListarCurso()} curso={curso}/> : null}
    </Main>
  );
}