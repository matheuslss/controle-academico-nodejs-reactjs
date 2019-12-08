import axios from 'axios';

const base_url = 'http://localhost:3333';

export function novaDisciplina(disciplina) {
  return axios[disciplina.id ? "put" : "post"](`${base_url}/disciplinas`, disciplina);
}

export function excluirDisciplina(id) {
  return axios.delete(`${base_url}/disciplinas/${id}`);
}

export function listarDisciplinasCurso(id) {
  return axios.get(`${base_url}/cursos/${id}/disciplinas`)
}