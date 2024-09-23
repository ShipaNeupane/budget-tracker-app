import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from "../../assets/logo.png"
import profile from "../../assets/profilePic.jpg"

const NavigationBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navigation-bar">
            <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
            
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/transaction">Transactions</Link></li>
                <li>Goals</li>
                <li>Investments</li>
            </ul>
            
            <div className="icons">
                <img src={profile} alt="Profile" className="profile-pic"
                onClick={toggleMenu} />
            </div>

            <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/transaction" onClick={() => setMenuOpen(false)}>Transactions</Link></li>
                    <li>Goals</li>
                    <li>Investments</li>
            </ul>

        </nav>
    );
};

export default NavigationBar;
