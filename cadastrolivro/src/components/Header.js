import React from 'react';
import { NavLink } from 'react-router-dom';
import imagemlogo from '../logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <img className="logo" src={imagemlogo}/>
            <h1 className="titulo">CADASTRO DE LIVRO</h1>
            <hr />
                <div>
                    <NavLink className="navg" to="/">
                    <FontAwesomeIcon icon={faBook}/> ADICIONAR LIVRO
                    </NavLink>
                    <a className="traço"></a>
                    <NavLink className="navg" to="/list">
                    <FontAwesomeIcon icon={faList}/> LISTA DE LIVROS
                    </NavLink>
                </div>
        </header>
    );
};

export default Header;