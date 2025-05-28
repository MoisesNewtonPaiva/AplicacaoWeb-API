import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getAlunos = () => {
    return axios.get(API_URL);
}

export const postAluno = (aluno) => {
    return axios.post(API_URL, aluno);
}

export const deleteAluno = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const updateAluno = (id, aluno) => {
    return axios.put(`${API_URL}/${id}`, aluno);
};