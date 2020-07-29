import React from 'react';
import Logo from '../../Images/Logo.png';
import './Menu.css';
import ButtonLink from './ButtonLink';
import Button from '../Button';
import {Link} from 'react-router-dom'

function Menu (){
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className=".Logo" alt="Tristan Flix"/>
            </Link>
            
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video" children="Novo Vídeo"/>
        </nav>
    )
}

export default Menu