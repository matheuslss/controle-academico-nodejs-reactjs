import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { listarCursos, listarTurmasCurso, excluirCurso } from './cursoService';

console.log(listarCursos);

export default function Listarcursos(props) {

  const [cursos, setCursos] = useState([]);

  
  useEffect(() => { 
    listar();
  },[])
  
  function listar() {
    listarCursos()
      .then(resp => {
        if(resp.status === 200) {
          setCursos(resp.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
    
      console.log(cursos, "Teste")
  }
  function editarCurso(curso) {
    props.editarCurso(curso);
  }

  function removerCurso(id) {
    excluirCurso(id)
      .then(resp => {
        listar();
      });
  }

  return (
    <>
    <h3>Lista de Cursos</h3>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID do Curso</th>
          <th scope="col">Nome</th>
          <th scope="col">Ações</th>

        </tr>
      </thead>
      <tbody>
        {cursos.map((curso, key) => (
          <tr key={key}>
          <th scope="row">{curso.id}</th>
          <td>{curso.nome}</td>
          <td>
            <Link to={`/cursos/${curso.id}/turmas`}>
              <button className="btn">
                Listar Turmas  
              </button> 
            </Link>
            <button className="btn" onClick={() => editarCurso(curso)}>
              Editar
            </button>
            <button className="btn" onClick={() => removerCurso(curso.id)}>
              Excluir
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    <button className="btn btn-primary" onClick={props.novoCurso}>
      Cadastrar Curso
    </button>
    </>
  );
}