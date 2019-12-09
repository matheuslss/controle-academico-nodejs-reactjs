import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../template/Main/Main';

import { listarTurmasCurso, obterCurso } from '../Curso/cursoService';
import { novaTurma, excluirTurma } from './turmaService';

export default function ListarTurmas(props) {

  const [turmas, setTurmas] = useState([]);
  const [curso, setCurso] = useState({});
  const [anoTurma, setAnoTurma] = useState();
  const [semestreTurma, setSemestreTurma] = useState();

  function obterCursoID() {
    const { id } = props.match.params;
    return id;
  };

  useEffect(() => {   
    listar(obterCursoID());
    consultarCurso(obterCursoID());
  },[])

  function onChangeAno(event) {
    setAnoTurma(event.target.value);
  }

  function onChangeSemestre(event) {
    setSemestreTurma(event.target.value);
  }

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

  function cadastrarTurma() {
    const turma = {
      id_curso: props.match.params.id,
      semestre: semestreTurma,
      ano: anoTurma
    }

    novaTurma(turma)
    .then(resp => {
      listar(obterCursoID())
    })
    .catch(error => {
      console.log(error)
    })

    setAnoTurma('');
    setSemestreTurma('');
  }

  function removerTurma(id) {
    excluirTurma(id)
      .then(resp => {
        listar(obterCursoID());
      });
  }

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
          <button className="btn"
          onClick={() => removerTurma(turma.id)}
          >
            Excluir
          </button>
        </td>
        </tr>
        ))}
      </tbody>
    </table>
      <Link to={"/cursos"}>
    <button type="button" className="btn btn-secondary mr-2">
        Voltar
    </button>
      </Link>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalExemplo">
      Cadastrar nova turma
    </button>
    <div className="modal fade" id="modalExemplo" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Nova turma</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="semestre">Semestre</label>
              <input 
                type="text" 
                className="form-control" 
                id="semestre" 
                onChange={onChangeSemestre}
                value={semestreTurma || ""} />
            </div>
            <div className="form-group">
              <label htmlFor="ano">Ano</label>
              <input 
                type="text" 
                className="form-control" 
                id="ano" 
                onChange={onChangeAno}
                value={anoTurma || ""} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal"
              onClick={cadastrarTurma}
            >Salvar mudanças</button>
          </div>
        </div>
      </div>
    </div>
    </Main>
  );
}