import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { HiUser } from "react-icons/hi";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navigate = () => {
    const { user } = useContext(AuthContext)
    return (
       <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto link">
                        <Link to="/res/0">HOME</Link>
                        <Link to="/shop">SHOP</Link>
                       {user && <Link to="#deets">
                            <HiUser style={{ fontSize: '2rem' }}></HiUser>
                        </Link>}
                    </Nav>
                    <Nav className='link'>
                        <Link to="/about">About</Link>
                        <Link to="contact">Contact</Link>
                        <Link to="/register">Register</Link>
                        {user ? 
                        <button>LogOut</button>:
                        <Link to="/login">Login</Link>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       </Container>
    );
};

export default Navigate;