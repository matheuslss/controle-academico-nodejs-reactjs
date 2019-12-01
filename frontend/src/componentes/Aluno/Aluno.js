import React, {useState, useEffect} from 'react';
import Main from '../template/Main/Main';

import ListarAlunos from './Listar';
import CadastrarAluno from './Cadastrar';
import EditarAluno from './Editar';

export default function Alunos(props) {

  const [view, setView] = useState("Listar");
  const [aluno, setAluno] = useState();

  console.log(view, "View")

  useEffect(() => {
    setView("Listar")
  },[])

  function exibirCadastrarAluno() {
    setView("Cadastrar");
  }

  function exibirListarAluno() {
    setView("Listar");
  }

  function exibirEditarAluno(aluno) {
    setAluno(aluno);
    setView("Editar");
  }

  return (
    <Main title="Alunos" >
      {view === "Listar" ? <ListarAlunos novoAluno={() => exibirCadastrarAluno()} 
      editarAluno={exibirEditarAluno} /> : null}
      {view === "Cadastrar" ? <CadastrarAluno listarAlunos={() => exibirListarAluno()} /> : null}
      {view === "Editar" ? <EditarAluno listarAlunos={() => exibirListarAluno()} aluno={aluno}/> : null}
    </Main>
  );
}