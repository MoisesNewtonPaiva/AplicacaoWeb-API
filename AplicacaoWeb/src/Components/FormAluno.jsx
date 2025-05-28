import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { postAluno } from '../Api/Alunos';
import { getAlunos, postAluno, deleteAluno, updateAluno } from '../Api/Alunos';

const [nome, setNome] = useState('');
const [idade, setIdade] = useState('');
const [curso, setCurso] = useState('');

function FormAluno() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !idade || !curso){
            alert("Preencha todos os campos!");
            return;
        }

        try {
            await postAluno({ nome, idade, curso });
            alert("Aluno cadastrado com sucesso!");
            setNome('');
            setIdade('');
            setCurso('');
        } catch (error) {
            alert("Erro ao cadastrar aluno.");
            console.error(error);
        }
    };
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'coloumn', gap: 2, width: 300}}>
            <TextField 
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <TextField 
                label="Idade"
                type="number"
                value={idade}
                onCahnge={(e) => setIdade(e.target.value)}
                required
            />
            <TextField
                label="Curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                required
            />
            <Button variant="contained" color="primary" type="submit">
                Cadastrar
            </Button>
        </Box>
    );
}

export default FormAluno;