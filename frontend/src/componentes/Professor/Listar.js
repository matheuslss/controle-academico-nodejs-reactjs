import React, { useState, useEffect } from 'react';

import { listarProfessores, excluirProfessor } from './professorService';

export default function ListarProfessores(props) {

  const [professores, setProfessores] = useState([]);

  
  useEffect(() => { 
    listar();
  },[])
  
  function listar() {
    listarProfessores()
      .then(resp => {
        if(resp.status === 200) {
          setProfessores(resp.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  function editarProfessor(professor) {
    props.editarProfessor(professor);
  }

  function removerProfessor(id) {
    excluirProfessor(id)
      .then(resp => {
        listar();
      });
  }

  return (
    <>
    <h3>Lista de Professores</h3>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Matrícula</th>
          <th scope="col">Nome</th>
          <th scope="col">Área de Atuação</th>
          <th scope="col">Titulação</th>
          <th scope="col">Disciplina</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {professores.map((professor, key) => (
          <tr key={key}>
          <th scope="row">{professor.id}</th>
          <td>{professor.nome}</td>
          <td>{professor.area_atuacao}</td>
          <td>{professor.titulacao}</td>
          <td>{professor.disciplina.nome}</td>
          <td>
            <button className="btn" onClick={() => editarProfessor(professor)}>
              Editar
            </button>
            <button className="btn" onClick={() => removerProfessor(professor.id)}>
              Excluir
            </button>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="btn btn-primary" onClick={props.novoProfessor}>
      Cadastrar Professor
    </button>
    </>
  );
}