import moment from 'moment/moment';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <h2>The Recepi Collet</h2>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex mb-4'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger ms-2' spreed={100}>
                    Most restaurant marketing is targeted at getting new diners–missing the opportunity.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto link">
                        <Link to="/">HOME</Link>
                        <Link to="/shop">SHOP</Link>
                        <Link to="#deets">Profile</Link>
                    </Nav>
                    <Nav className='link'>
                        <Link to="/about">About</Link>
                        <Link to="contact">Contact</Link>
                        
                        <Link to="register">Register</Link>
                        <Link to="/login">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;