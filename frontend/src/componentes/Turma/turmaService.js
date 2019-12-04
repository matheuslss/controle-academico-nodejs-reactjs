import axios from 'axios';

const base_url = 'http://localhost:3333';

export function novaTurma(turma) {
  return axios[turma.id ? "put" : "post"](`${base_url}/turmas`, turma);
}

export function excluirTurma(id) {
  return axios.delete(`${base_url}/turmas/${id}`);
}