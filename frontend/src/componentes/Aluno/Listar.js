import React, { useState, useEffect } from 'react';

import { listarAlunos, excluirAluno } from './alunoService';

console.log(listarAlunos);

export default function ListarAlunos(props) {

  const [alunos, setAlunos] = useState([]);

  
  useEffect(() => { 
    listar();
  },[])
  
  function listar() {
    listarAlunos()
      .then(resp => {
        if(resp.status === 200) {
          setAlunos(resp.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  function editarAluno(aluno) {
    props.editarAluno(aluno);
  }

  function removerAluno(id) {
    excluirAluno(id)
      .then(resp => {
        listar();
      });
  }

  return (
    <>
    <h3>Lista de Alunos</h3>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Matrícula</th>
          <th scope="col">Nome</th>
          <th scope="col">Turma</th>
          <th scope="col">Curso</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno, key) => (
          <tr key={key}>
          <th scope="row">{aluno.id}</th>
          <td>{aluno.nome}</td>
          <td>{`${aluno.turma.ano}.${aluno.turma.semestre}`}</td>
        <td>{aluno.turma.curso.nome}</td>
        <td>
          <button className="btn" onClick={() => editarAluno(aluno)}>
            Editar
          </button>
          <button className="btn" onClick={() => removerAluno(aluno.id)}>
            Excluir
          </button>
        </td>
        </tr>
        ))}
      </tbody>
    </table>
    <button className="btn btn-primary" onClick={props.novoAluno}>
      Cadastrar Aluno
    </button>
    </>
  );
}