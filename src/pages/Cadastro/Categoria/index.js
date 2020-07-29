import React from 'react';
import MasterPage from '../../../Components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <MasterPage>
            <h1>Cadstro de categoria</h1>

            <form>

                <label>
                    Nome da Categoria:
                <input type="text"/>
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para a Home
            </Link>
        </MasterPage>
    )
}

export default CadastroCategoria;