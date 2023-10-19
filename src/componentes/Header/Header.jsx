import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-titles'>
            <Link to='/'>Home</Link>
            <Link to='/orders'> Orders Review</Link>
            <Link to='/inventory'> inventory Review</Link>
            <Link to='/grendpa'> grendpa</Link>
        </nav>
    );
};

export default Header;