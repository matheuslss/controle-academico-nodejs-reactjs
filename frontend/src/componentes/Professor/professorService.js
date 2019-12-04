import axios from 'axios';

const base_url = 'http://localhost:3333';

export function listarProfessores() {
  return axios.get(`${base_url}/professores`);
}

export function salvarProfessor(professor) {

  return axios[professor.id ? "put" : "post"](`${base_url}/professores`, professor);
}

export function excluirProfessor(id) {
  return axios.delete(`${base_url}/professores/${id}`);
}