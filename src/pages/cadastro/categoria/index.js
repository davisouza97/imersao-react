import React from 'react';
import PageDefalt from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
function CadastroCategoria() {
    return (
        <PageDefalt>
            <h1>Cadastro de Categoria</h1>


        <form>
            <label>
            Nome da Categoria:
            <input type="text" />
            </label>
            <button>
                Cadastrar
            </button>
        </form>

            <Link to="/">
                Home
            </Link>
        </PageDefalt>
    );
}

export default CadastroCategoria;