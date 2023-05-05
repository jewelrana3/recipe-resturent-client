import moment from 'moment/moment';
import React, { useContext } from 'react';

import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';



import './Header.css'
import Footer from '../Footer/Footer';
import { AuthContext } from '../../../provider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext)
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
            {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto link">
                        <Link to="/res/0">Home</Link>
                        <Link to="contact">Contact</Link>
                      
                    </Nav>
                    <Nav className='link'>
                        
                        
                        <Link to="/register">Register</Link>
                        {user ? 
                           <Button onClick={handleLogout} variant="secondary">LogOut</Button>:
                        <Link to="/login">Login</Link>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
          
        </Container>
    );
};

export default Header;