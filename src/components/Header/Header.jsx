import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo'>Logo</Link>
            <div className='nav-bar'>
                <Link to='/shop' className='item'>SHOP</Link>
                <Link to='/contact' className='item'>CONTACT</Link>
            </div>
        </div>
    );
};

export default Header;