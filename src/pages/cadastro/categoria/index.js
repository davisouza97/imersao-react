import React, { useState } from 'react';
import PageDefalt from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
function CadastroCategoria() {

    const categoria = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(categoria)


    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handlerChange(event) {
        console.log(event);
        const { name, value } = event.target;
        setValue(name, value);
    }

    return (
        <PageDefalt>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handlerSubmit(event) {
                event.preventDefault();
                setCategorias([...categorias, values]);
                setValues(categoria);
            }}>

                <FormField
                    type="text"
                    label="Nome"
                    name="nome"
                    value={values.nome}
                    onChange={handlerChange}
                />

                <FormField
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
                {/* {
                <div>
                    <label>
                        Descrição:
                    <textarea
                            name="descricao"
                            value={values.descricao}
                            onChange={handlerChange} />
                    </label>
                </div>} */}
                {/* <div>
                    <label>
                        Cor:
                    <input
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handlerChange} />
                    </label>
                </div> */}

                <button>
                    Cadastrar
            </button>
            </form>

            {categorias.map((categoria, index) => {
                return (
                    <li key={`${categoria}${index}`}>
                        {categoria.nome}
                    </li>
                )
            })}

            <Link to="/">
                Home
            </Link>
        </PageDefalt>
    );
}

export default CadastroCategoria;