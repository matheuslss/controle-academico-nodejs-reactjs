import axios from 'axios';

const base_url = 'http://localhost:3333';

export function listarAlunos() {
  return axios.get(`${base_url}/alunos`);
}

export function salvarAluno(aluno) {

  return axios[aluno.id ? "put" : "post"](`${base_url}/alunos`, aluno);
}

export function excluirAluno(id) {
  return axios.delete(`${base_url}/alunos/${id}`);
}