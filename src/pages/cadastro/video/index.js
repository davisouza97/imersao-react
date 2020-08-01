import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefalt from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import videosRepository from '../../../repository/videosRepository';
import categoriasRepository from '../../../repository/categoriasRepository';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handlerChange, values } = useForm({
    titulo: 'Titulo Padrão',
    url: 'https://www.youtube.com/watch?v=ZaYvwn9nBD4',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasResponse) => {
        setCategorias(categoriasResponse);
      });
  }, []);

  return (
    <PageDefalt>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((c) => c.titulo === values.categoria);

        if (categoriaEscolhida) {
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          }).then(() => {
            history.push('/');
          });
        } else {
          // eslint-disable-next-line no-alert
          alert('categoria Invalida');
        }
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handlerChange}
        />

        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handlerChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handlerChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefalt>
  );
}

export default CadastroVideo;
