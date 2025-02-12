import React from "react";
import './Header.css';
import smallRight from '../../../assets/icons/small-right.png';
import smallLeft from '../../../assets/icons/small-left.png';
import search from '../../../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header-nav">
            <div className="navigation">
                <button className="seta-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="seta-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>

            <div className="header-search">
                <img src={search} alt="Ícone de busca" />
                <input type="text" id="search-input" maxLength="100" placeholder="O que você quer ouvir?" />
            </div>

            <div className="header-login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;
