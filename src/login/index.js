import React, { useState } from 'react';
import backEndRequest from '../services/fetchService';
import { useLocalState } from '../utils/userLocalStorage';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [jwt, setJwt] = useLocalState("", "jwt");

    function sendLoginRequest() {
        const reqBody = {
            "username": username, 
            "password": password,
        };

        fetch('api/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post', 
            body: JSON.stringify(reqBody),
        })
        .then((response) => {
            if (response.status === 200)
                return Promise.all([response.json(), response.headers])
            else
                return Promise.reject('Invalid login attempt')
        })
        .then(([body, headers]) => {
            setJwt(headers.get("authorization"));
            window.location.href = "my_page";
        })
        .catch((message) => {
            alert(message);
        });
    }

    function signUp() {
        window.location.href = 'registration'
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col
                        md="3"
                        className="d-grid"
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="email"
                            id="username"
                            placeholder="example@mail.com"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password"
                            id="password"
                            placeholder="type your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            id="submit"
                            type="button"
                            size="sm"
                            onClick={() => sendLoginRequest()}
                        >
                            Sign in
                        </Button>
                        <Button
                            className="mt-3"
                            id="submit"
                            type="button"
                            size="sm"
                            onClick={() => signUp()}
                        >
                            Sign up
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;