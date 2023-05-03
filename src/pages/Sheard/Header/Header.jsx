import moment from 'moment/moment';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/">HOME</Nav.Link>
                            <Nav.Link to="/shop">SHOP</Nav.Link>
                            <NavDropdown title="All RECIPES" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} to="about">About</Nav.Link> 
                            <Nav.Link eventKey={2} to="contact">Contact</Nav.Link> 
                            <Nav.Link eventKey={2} to="register">Register</Nav.Link> 
                            <Nav.Link eventKey={2} to="login">Login</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;