import React, { useState, useEffect } from 'react';
import Select from '../Forms/Select';

import { listarCursos, listarTurmasCurso } from '../Curso/cursoService';
import { salvarAluno } from '../Aluno/alunoService';

export default function CadastrarAluno(props) {

  const [cursos, setCursos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [nomeAluno, setNomeAluno] = useState();
  const [turmas, setTurmas] = useState([]);
  const [turmaSelecionada, setTurmaSelecionada] = useState('');
  
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
      console.log(props.aluno, "Aluno");
      setNomeAluno(props.aluno.nome);   
      setCursoSelecionado(props.aluno.turma.id_curso);   
      setTurmaSelecionada(props.aluno.turma.id);   
  },[])

  useEffect(() => { 
    console.log(cursoSelecionado, "Curso Selecionado");
    if(cursoSelecionado){
      
      const resp = listarTurmasCurso(cursoSelecionado);
      resp.then(resultado => {
        if(resultado.status === 200) {
          setTurmas(resultado.data || []);
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },[cursoSelecionado])


  function onChangeCurso(event) {
    setCursoSelecionado(event.target.value);
  }

  function onChangeTurma(event) {
    setTurmaSelecionada(event.target.value);
  }

  function onChangeNomeAluno(event) {
    setNomeAluno(event.target.value);
  }

  function editar(event) {
    event.preventDefault();

    const novoAluno = {
      id: props.aluno.id,
      nome: nomeAluno,
      data_matricula: props.aluno.data_matricula,
      id_turma: turmaSelecionada
    }

    salvarAluno(novoAluno)
      .then(resp => {
        props.listarAlunos()
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
    <>
    <h3>Editar aluno</h3>
    <form>
      <div class="form-group">
        <label for="nomeAluno">Nome do aluno</label>
        <input 
          type="email" 
          class="form-control" 
          id="nomeAluno" 
          onChange={onChangeNomeAluno}
          value={nomeAluno} />
      </div>
      <Select id="cursos" valor={cursoSelecionado} label="Curso" opcoes={opcoesCursos} onChange={onChangeCurso} />
      <Select id="turmas" valor={turmaSelecionada} label="Turma" opcoes={opcoesTurmas} onChange={onChangeTurma} />
      <button type="button" class="btn btn-secondary mr-2" onClick={() => props.listarAlunos()}>Cancelar</button>
      <button type="submit" class="btn btn-primary" onClick={editar}>Salvar</button>
    </form>
    </>
  );
}

