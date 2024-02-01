import React from "react";
import './Header.css';
import smallRightIcon from '../assets/icons/small-right.png';
import smallLeftIcon from '../assets/icons/small-left.png';
import searchIcon from '../assets/icons/search.png';

const Header = () => {
    return(
        <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeftIcon} alt="" />
                    </button>
                    <button className="arrow-right">
                        <img src={smallRightIcon} alt="" />
                    </button>
                </div>
                <div className="header__search">
                    <img src={searchIcon} alt="" />
                    <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
                </div>
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
    );
};

export default Header;