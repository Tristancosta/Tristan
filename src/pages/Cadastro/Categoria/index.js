import React from 'react';
import MasterPage from '../../../Components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <MasterPage>
            <h1>Página de cadstro de categoria</h1>
            <Link to="/">
                Ir para a Home
            </Link>
        </MasterPage>
    )
}

export default CadastroCategoria;