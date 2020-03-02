import React from 'react';
import { NavLink } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';
function Footer() {
    return (
        <div id="div3">
            <Container fluid={true}>
                <Row>
                    <Col md={4}>
                        <h1>Footer Component</h1>
                    </Col>
                    <Col md={8}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about" activeClassName="a-active">About</NavLink>
                        <NavLink to="/contact" activeClassName="a-active" >Contact</NavLink>
                        <NavLink to="/profile" activeClassName="a-active">Profile</NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;