import React from 'react';
import Logo from '../../Images/Logo.png';
import './Menu.css';
import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu (){
    return (
        <nav className="Menu">
            <a href="/">
            <img src={Logo} className=".Logo" alt="Tristan Flix"/>
            </a>
            <Button className="ButtonLink" href="/" children="Novo Vídeo"/>
        </nav>
    )
}

export default Menu