import React, {useState, useEffect} from 'react';
import Main from '../template/Main/Main';

import ListarProfessores from './Listar';
import CadastrarProfessor from './Cadastrar';
import EditarProfessor from './Editar';

export default function Professores(props) {

  const [view, setView] = useState("Listar");
  const [professor, setProfessor] = useState();

  console.log(view, "View")

  useEffect(() => {
    setView("Listar")
  },[])

  function exibirCadastrarProfessor() {
    setView("Cadastrar");
  }

  function exibirListarProfessores() {
    setView("Listar");
  }

  function exibirEditarProfessor(professor) {
    setProfessor(professor);
    setView("Editar");
  }

  return (
    <Main title="Professores" >
      {view === "Listar" ? <ListarProfessores novoProfessor={() => exibirCadastrarProfessor()} 
      editarProfessor={exibirEditarProfessor} /> : null}
      {view === "Cadastrar" ? <CadastrarProfessor listarProfessores={() => exibirListarProfessores()} /> : null}
      {view === "Editar" ? <EditarProfessor listarProfessores={() => exibirListarProfessores()} professor={professor}/> : null}
    </Main>
  );
}