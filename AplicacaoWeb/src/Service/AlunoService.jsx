import axios from "axios";

const API_URL = "http://leoproti.com.br:8004/alunos";

const listar = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

const obter = async (id) => {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
}

const criar = async (aluno) => {
    const { data } = await axios.post(API_URL, aluno);
    return data;
}

const atualizar = async (id, aluno) => {
    await axios.delete(`${API_URL}/${id}`);
};

export default {
    listar, obter, criar, atualizar,
    excluir,
};