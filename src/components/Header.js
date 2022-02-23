import React from 'react'
import '../assets/css/Header.css'
import logo from '../assets/images/logoBottomMegatronix.png';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <header className="App-header">
                <Link to="/" exact="true">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <span className="Title-header">Dashboard megatronix</span>
            </header>
        </div>
    )
}

export default Header;
