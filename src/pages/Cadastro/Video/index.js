import React from 'react';
import MasterPage from '../../../Components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
        <MasterPage>
            <h1>Página de cadstro de vídeo</h1>
            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </MasterPage>
    )
}

export default CadastroVideo;