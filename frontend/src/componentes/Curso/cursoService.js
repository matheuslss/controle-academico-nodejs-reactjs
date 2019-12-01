import axios from 'axios';

const base_url = 'http://localhost:3333';

export function listarCursos() {
  return axios.get(`${base_url}/cursos`);
}
export function listarTurmasCurso(id) {
  return axios.get(`${base_url}/cursos/${id}/turmas`)
}

export function salvarCurso(curso) {
  return axios[curso.id ? "put" : "post"](`${base_url}/cursos`, curso);
}

export function excluirCurso(id) {
  return axios.get(`${base_url}/cursos/${id}`);
}