import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import {auth} from '../../firebase/firebaseUtils';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo'></Link>
            <div className='nav-bar'>
                <Link to='/shop' className='item'>SHOP</Link>
                <Link to='/contact' className='item'>CONTACT</Link>
                {
                    currentUser ?
                    <div className='item' onClick={()=>auth.signOut()}>LOGOUT</div>
                    :
                    <Link to='/login' className='item'>LOGIN</Link>
                }
            </div>
        </div>
    );
};

export default Header;