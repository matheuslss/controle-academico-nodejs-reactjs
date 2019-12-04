import React, { useState } from 'react';

import { salvarCurso } from '../Curso/cursoService';

export default function CadastrarCurso(props) {

  const [nomeCurso, setNomeCurso] = useState();

  function onChangeNomeCurso(event) {
    setNomeCurso(event.target.value);
  }

  function cadastrar(event) {
    event.preventDefault();

    const novoCurso = {
      nome: nomeCurso,
    }

    salvarCurso(novoCurso)
      .then(resp => {
        props.listarCursos()
      })
      .catch(error => {
        console.log(error)
      })
    }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="nomeCurso">Nome do Curso</label>
        <input 
          type="email" 
          className="form-control" 
          id="nomeCurso" 
          onChange={onChangeNomeCurso}
          value={nomeCurso} 
          />
      </div>
      <button type="button" className="btn btn-secondary mr-2" onClick={() => props.listarCursos()}>Cancelar</button>
      <button type="submit" className="btn btn-primary" onClick={cadastrar}>Cadastrar</button>
    </form>
  );
}
