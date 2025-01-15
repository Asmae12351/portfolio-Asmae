import React from 'react'
import { useState } from 'react';
import './Header.css'

const Header=()=> {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <span>ASMAE EL HADDOUCHI</span>

            {/* Burger Button */}
            <button
                id="burger"
                className={`burger ${menuOpen ? "show-x" : ""}`}
                onClick={toggleMenu}
            >
                <div className="bar"></div>
                <br/>
                <div className="bar"></div>
                
            </button>

            {/* Menu Links */}
            <ul className={`${menuOpen ? "show" : ""}`}>
                <li className="li"><a href="#home">Home</a></li>
                <li className="li"><a href="#about">About Me</a></li>
                <li className="li"><a href="#skills">Skills and Certificates</a></li>
                <li className="li"><a href="#projects">Projects</a></li>
                <li className="li"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
  
}
export default Header;
