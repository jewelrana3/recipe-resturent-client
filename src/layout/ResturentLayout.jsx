import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../pages/Sheard/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../pages/Sheard/LeftSide/LeftSide';

const ResturentLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    
                    <Col lg={12}>
                        <Outlet></Outlet>
                    </Col>



                </Row>
            </Container>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default ResturentLayout;