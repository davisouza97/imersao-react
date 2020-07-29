import React from 'react';
import Logo from "../../assets/img/logo.png";
//import ButtonLink from "./components/ButtonLInk";
import "./menu.css";
import Button from '../button';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="davilflix logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button> 
        </nav>
    );
}

export default Menu;