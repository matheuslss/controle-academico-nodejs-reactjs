import React, { useState, useEffect } from 'react';
import Select from '../Forms/Select';

import { listarCursos, listarTurmasCurso } from '../Curso/cursoService';
import { salvarProfessor} from '../Professor/professorService';

export default function CadastrarAluno(props) {

  const [cursos, setCursos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState();
  const [turmas, setTurmas] = useState([]);
  const [turmaSelecionada, setTurmaSelecionada] = useState();
  const [nomeProfessor, setNomeProfessor] = useState();
  const [atuacaoProfessor, setAtuacaoProfessor] = useState();
  const [titulacaoProfessor, setTitulacaoProfessor] = useState();
  
  useEffect(() => { 
    listarCursos()
      .then(resp => {
        if(resp.status === 200) {
          setCursos(resp.data);
        }
      })
      .catch(error => {
        console.log(error)
      })   
  },[])

  useEffect(() => { 
        const resp = listarTurmasCurso(cursoSelecionado);
        console.log(resp, "TURMAS")

        resp.then(resultado => {
          if(resultado.status === 200) {
            setTurmas(resultado.data || []);
          }
        }).catch(error => {
          console.log(error)
        })
    
  },[cursoSelecionado])

  function onChangeCurso(event) {
    setCursoSelecionado(event.target.value);
  }

  function onChangeTurma(event) {
    setTurmaSelecionada(event.target.value);
  }

  function onChangeNomeProfessor(event) {
    setNomeProfessor(event.target.value);
  }

  function onChangeAtuacaoProfessor(event) {
    setAtuacaoProfessor(event.target.value);
  }

  function onChangeTitulacaoProfessor(event) {
    setTitulacaoProfessor(event.target.value);
  }

  function cadastrar(event) {
    event.preventDefault();

    const novoProfessor = {
      nome: nomeProfessor,
      data_matricula: new Date().toISOString(),
      id_turma: turmaSelecionada
    }

    salvarProfessor(novoProfessor)
      .then(resp => {
        props.listarProfessores()
      })
      .catch(error => {
        console.log(error)
      })
    }

  const opcoesCursos = cursos.map(curso => (
    {
      label: curso.nome,
      valor: curso.id
    }
  ))

  const opcoesTurmas = turmas.map(turma => (
    {
      label: `${turma.ano}.${turma.semestre}`,
      valor: turma.id
    }
  ))

  return (
    <form>
      <div className="form-group">
        <label htmlFor="nomeAluno">Nome do Professor</label>
        <input 
          type="text" 
          className="form-control" 
          id="nomeProfessor" 
          onChange={onChangeNomeProfessor}
          value={nomeProfessor} />
      </div>
      <div className="form-group">
        <label htmlFor="atuacaoProfessor">Área de Atuação</label>
        <input 
          type="text" 
          className="form-control" 
          id="atuacaoProfessor" 
          onChange={onChangeAtuacaoProfessor}
          value={atuacaoProfessor} 
          />
      </div>
      <div className="form-group">
        <label htmlFor="titulacaoProfessor">Titulação</label>
        <input 
          type="text" 
          className="form-control" 
          id="titulacaoProfessor" 
          onChange={onChangeTitulacaoProfessor}
          value={titulacaoProfessor}
          />
      </div>
      <Select id="cursos" valor={cursoSelecionado} label="Curso" opcoes={opcoesCursos} onChange={onChangeCurso} />
      <Select id="turmas" valor={turmaSelecionada} label="Turma" opcoes={opcoesTurmas} onChange={onChangeTurma} />
      <button type="button" className="btn btn-secondary mr-2" onClick={() => props.listarProfessores()}>Cancelar</button>
      <button type="submit" className="btn btn-primary" onClick={cadastrar}>Cadastrar</button>
    </form>
  );
}
