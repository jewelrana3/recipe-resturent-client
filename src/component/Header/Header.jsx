import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <nav>
            <Container className='d-flex justify-content-around'>
            <div>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/food'>Food</Link>
            </div>
            <h2>Culinier</h2>
            <div>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            </div>
            </Container>
        </nav>
    );
};

export default Header;