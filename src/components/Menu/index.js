import React from "react";
import Logo from "../../assets/img/logo.png";
import Button from "../Button";

import "./Menu.css";

export default function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Tr3zix Logo" />
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}
