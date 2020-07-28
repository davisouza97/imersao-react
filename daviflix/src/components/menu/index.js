import React from 'react';
import Logo from "../../assets/img/logo.png";
//import ButtonLink from "./components/ButtonLInk";
import "./menu.css";
import Button from '../button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="davilflix logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button> 
        </nav>
    );
}

export default Menu;