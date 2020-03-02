import React from 'react';
import { Button, Card, Col, Container, Row, Jumbotron } from 'react-bootstrap';
export function Home() {
    return (
        <div id="div2">
            <h1>HOME</h1>
            <Container>
            {/* <Button variant = "flat"
                size = "xxl" >flat button </Button> */}
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary" href="/about">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row style={{marginTop: 30}}>
                   <Col>
                   <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                   </Col>
                </Row>
            </Container>
        </div>
    );
}