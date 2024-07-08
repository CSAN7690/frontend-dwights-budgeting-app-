import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/the-office-logo.png';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <img src={logo} alt="The Office Logo" className="logo" />
                <h1>Budget App</h1>
            </div>
            <Link to="/transactions/new" className="new-transaction-button">New Transaction</Link>
        </nav>
    );
};

export default NavBar;