import React, { useState, useEffect } from 'react';
import Main from '../template/Main/Main';

import { listarTurmasCurso, obterCurso } from '../Curso/cursoService';

export default function ListarTurmas(props) {

  const [turmas, setTurmas] = useState([]);
  const [curso, setCurso] = useState({});
  
  useEffect(() => { 
    const { id } = props.match.params; 
    listar(id);
    consultarCurso(id);
  },[])

  function consultarCurso(id){
    console.log(id, "ID")
    obterCurso(id)
      .then(resp => {
        if(resp.status === 200) {
          console.log(resp, "Resp")
          setCurso(resp.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  function listar(id) {
    listarTurmasCurso(id)
      .then(resp => {
        if(resp.status === 200) {
          setTurmas(resp.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  function editarTurma(turma) {
    props.editarTurma(turma);
  }

  // function removerTurma(id) {
  //   excluirTurma(id)
  //     .then(resp => {
  //       listar();
  //     });
  // }

  return (
    <Main title={curso.nome}>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID da Turma</th>
          <th scope="col">Ano de Início</th>
          <th scope="col">Semestre</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {turmas.map((turma, key) => (
          <tr key={key}>
          <th scope="row">{turma.id}</th>
          <td>{turma.ano}</td>
        <td>{turma.semestre}</td>
        <td>
          <button className="btn" onClick={() => editarTurma(turma)}>
            Editar
          </button>
          <button className="btn"
          // onClick={() => removerTurma(turma.id)}
          >
            Excluir
          </button>
        </td>
        </tr>
        ))}
      </tbody>
    </table>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalExemplo">
        Abrir modal de demonstração
      </button>
      <div className="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Título do modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary">Salvar mudanças</button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}