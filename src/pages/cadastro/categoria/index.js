import React from 'react';
import PageDefalt from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
function CadastroCategoria() {
    return (
        <PageDefalt>
            <h1>Cadastro de Categoria</h1>

            <Link to="/"> 
                Home
            </Link>
        </PageDefalt>
    );
}

export default CadastroCategoria;