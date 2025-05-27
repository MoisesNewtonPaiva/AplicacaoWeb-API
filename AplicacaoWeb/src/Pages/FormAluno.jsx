import { useEffect, useState } from "react";
import {usaNavigate, useParams } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import produtoService from "../"

export default function FormAlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({nome: "", turma: ""});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            setLoading(true);
            alunoService.obter(id).then((data) => {
                setAluno({nome: data.nome, turma: data.turma });
                setLoading(false);
            });
        }
    })


}