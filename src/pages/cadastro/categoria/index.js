import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefalt from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const categoriaDefalt = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { handlerChange, values, clearForm } = useForm(categoriaDefalt);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'http://davi-flix.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const categoriasReposnse = await response.json();
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
        clearForm();
      }}
      >

        <FormField
          type="text"
          label="Titulo"
          name="titulo"
          value={values.titulo}
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
