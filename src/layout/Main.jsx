import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../pages/Sheard/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../pages/Sheard/LeftSide/LeftSide';


import Navigate from '../pages/Sheard/Navigate/Navigate';
// import LeftSide from '../pages/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigate></Navigate>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftSide></LeftSide>
                    </Col>

                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>


                </Row>
            </Container>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Main;