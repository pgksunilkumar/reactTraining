import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import {Container, Row, Col } from 'react-bootstrap';

export function Header() {
    return (
        <div id="div1">
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col md={4}>
                            <h1>Header Component</h1>
                        </Col>
                        <Col md={8}>
                            {/* <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/profile">Profile</Link> */}
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about" activeClassName="a-active">About</NavLink>
                            <NavLink to="/contact" activeClassName="a-active" >Contact</NavLink>
                            <NavLink to="/profile" activeClassName="a-active">Profile</NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

//export default Header;
