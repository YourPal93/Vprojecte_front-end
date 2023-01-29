import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Headbar.css';


const Headbar = () => {

    return (
        <>
            <Navbar className="headbar" expand="lg">
                <Container>
                    <Navbar.Brand href="/feed" className="brand">Vprojecte</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Headbar;