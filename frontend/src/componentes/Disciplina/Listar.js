import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../template/Main/Main';

import { obterCurso } from '../Curso/cursoService';
import { novaDisciplina, excluirDisciplina, listarDisciplinasCurso } from './disciplinaService';

export default function ListarDisciplinas(props) {

  const [disciplinas, setDisciplinas] = useState([]);
  const [curso, setCurso] = useState({});
  const [nomeDisciplina, setNomeDisciplina] = useState();

  function obterCursoID() {
    const { id } = props.match.params;
    return id;
  };

  useEffect(() => {   
    listar(obterCursoID());
    consultarCurso(obterCursoID());
  },[])

  function onChangeNomeDisciplina(event) {
    setNomeDisciplina(event.target.value);
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
    listarDisciplinasCurso(id)
      .then(resp => {
        if(resp.status === 200) {
          setDisciplinas(resp.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  function cadastrarDisciplina() {
    const disciplina = {
      id_curso: props.match.params.id,
      nome: nomeDisciplina
    }

    novaDisciplina(disciplina)
    .then(resp => {
      listar(obterCursoID())
    })
    .catch(error => {
      console.log(error)
    })
  }

  function removerDisciplina(id) {
    excluirDisciplina(id)
      .then(resp => {
        listar(obterCursoID());
      });
  }

  return (
    <Main title={curso.nome}>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID da Disciplina</th>
          <th scope="col">Nome</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        {disciplinas.map((disciplina, key) => (
          <tr key={key}>
          <th scope="row">{disciplina.id}</th>
          <td>{disciplina.nome}</td>
        <td>
          <button className="btn"
          onClick={() => removerDisciplina(disciplina.id)}
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
      Cadastrar nova disciplina
    </button>
    <div className="modal fade" id="modalExemplo" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Nova Disciplina</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="semestre">Nome</label>
              <input 
                type="text" 
                className="form-control" 
                id="semestre" 
                onChange={onChangeNomeDisciplina}
                value={nomeDisciplina || ""} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal"
              onClick={cadastrarDisciplina}
            >Salvar mudanças</button>
          </div>
        </div>
      </div>
    </div>
    </Main>
  );
}