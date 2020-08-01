import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MasterPage from '../../../Components/MasterPage';
import Field from '../../../Components/Field';
import Button from '../../../Components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleSubmit(args) {
    args.preventDefault();
    setCategorias([
      ...categorias, values,
    ]);
    setValues(valoresIniciais);
  }

  function handleChange(args) {
    const { value } = args.target;

    setValue(
      args.target.name,
      value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://tristanflix.herokuapp.com/categorias';
    fetch(URL).then(async (respsotaDoServidor) => {
      const resposta = await respsotaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <MasterPage>
      <h1>
        Cadstro de categoria:
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <Field name="titulo" type="text" label="Nome" value={values.titulo} onChange={handleChange} />
        <Field name="descricao" type="text" label="Descrição" value={values.descricao} onChange={(handleChange)} />
        <Field name="cor" type="color" label="Cor" value={values.cor} onChange={handleChange} />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para a Home
      </Link>
    </MasterPage>
  );
}

export default CadastroCategoria;
