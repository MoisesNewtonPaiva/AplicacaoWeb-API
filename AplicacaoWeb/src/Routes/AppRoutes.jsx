import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FormAlunos from '../Pages/FormAluno';
import ListaAlunos from '../Pages/ListaAlunos';
import FormPage from './pages/FormPages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListaAlunos />} />
                <Route path="/Form" element={<FormAlunos />}/>
                <Route path="/editar/:id" element={<FormAlunos />}/>
            </Routes>
        </Router>
    );
}

export default App;
