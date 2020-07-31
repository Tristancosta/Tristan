import React, {useState} from 'react';
import MasterPage from '../../../Components/MasterPage';
import { Link } from 'react-router-dom';
import Field from '../../../Components/Field';

function CadastroCategoria(){

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleSubmit(args){
        args.preventDefault();
        setCategorias([
            ...categorias, values
        ]);
        setValues(valoresIniciais);
    }

    function handleChange(args){
        const { getAttribute, value } = args.target;
        
        setValue(
            args.target.name,
            value
            );
    }

    return (
        <MasterPage>
            <h1>Cadstro de categoria: {values.nome}</h1>

            <form onSubmit={handleSubmit}>
                <Field name={'nome'} type={"text"} label={"Nome"} value={values.nome} onChange={handleChange} />
                <Field name={'descricao'} type={"text"} label={"Descrição"} value={values.descricao} onChange={(handleChange)} />
                <Field name={'cor'} type={"color"} label={"Cor"} value={values.cor} onChange={handleChange} />

                <button>
                    Cadastrar
                </button>
            </form>

                <ul>
                    {categorias.map((categoria, index) => {
                        return (
                            <li key={`${categoria}${index}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>
            <Link to="/">
                Ir para a Home
            </Link>
        </MasterPage>
    )
}

export default CadastroCategoria;