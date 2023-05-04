import moment from 'moment/moment';
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


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
          
        </Container>
    );
};

export default Header;