import React, { useEffect, useState } from 'react';
import { getAlunos, deleteAluno } from '../Api/Alunos';

const [alunos, setAlunos] = useState([]);

useEffect(() => {
    carregarAlunos();
}, []);

const carregarAlunos = async () => {
    try {
        const resposta = await getAlunos();
        setAlunos(resposta.data);
    } catch (error) {
        console.error("Erro ao carregar alunos:", error);
    }
};

const handleDelete = async (id) => {
   if(!confirm("Deseja realmente excluir este aluno?")) return;

    try {
        await deleteAluno(id);
        carregarAlunos();
    } catch (error) {
        console.error("Erro ao excluir aluno:", error);
        alert("Erro ao ecluir aluno");
    }
};


function ListaAlunos() {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Idade</TableCell>
                    <TableCell>Curso</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {alunos.map((aluno) => (
                    <TableRow key={aluno.id}>
                        <TableCell>{aluno.nome}</TableCell>
                        <TableCell>{aluno.idade}</TableCell>
                        <TableCell>{aluno.curso}</TableCell>
                        <TableCell>
                            <IconButton onClick={() => handleDelete(aluno.id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


export default ListaAlunos;