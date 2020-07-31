import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefalt from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';

function CadastroCategoria() {
  const categoriaDefalt = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(categoriaDefalt);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handlerChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = 'http://davi-flix.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const categoriasReposnse = await response.json();
      console.log(categoriasReposnse);
      setCategorias([...categoriasReposnse]);
    });
  }, []);

  return (
    <PageDefalt>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handlerSubmit(event) {
        event.preventDefault();
        setCategorias([...categorias, values]);
        setValues(categoriaDefalt);
      }}
      >

        <FormField
          type="text"
          label="Nome"
          name="nome"
          value={values.nome}
          onChange={handlerChange}
        />

        <FormField
          type="textarea"
          label="Descrição"
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />

        <FormField
          type="color"
          label="Cor"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      { categorias.length === 0 && (
      <div>
        Carregando...
      </div>
      )}

      {categorias.map((categoria) => (
        <li key={`${categoria.titulo}`}>
          {categoria.titulo}
        </li>
      ))}

      <Link to="/">
        Home
      </Link>
    </PageDefalt>
  );
}

export default CadastroCategoria;
