import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ajax from '../services/fetchService';

const RegistrationForm = () => {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const [birthdate, setBirthdate] = useState();
  const navigate = useNavigate();

  function sendRegistrationForm() {
    const reqBody = {
      'name': name,
      'password': password,
      'login': login,
      'email': email,
      'birthdate': birthdate
    }

    ajax('/api/register', 'post', null, reqBody)
    .then((response) => {
       navigate('/registration/success', {replace: true });
    }).catch((message) => {
      alert(message);
    });
  }
  return (
    <>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col
                        md='3'
                        className='d-grid'
                    >
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type='email'
                            id='name'
                            placeholder='First and last name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type='password'
                            id='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Login</Form.Label>
                            <Form.Control 
                            type='email'
                            id='login'
                            placeholder='Login'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type='email'
                            id='email'
                            placeholder='example@mail.ru'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='birthdate'>
                        <Form.Control
                          type='date'
                          name='birthdate'
                          placeholder='Date of birth'
                          value={birthdate}
                          onChange={(e) => setBirthdate(e.target.value)}
                        />
                        </Form.Group>
                        <Button
                            id='submit'
                            type='button'
                            size='sm'
                            onClick={() => sendRegistrationForm()}
                        >
                            Sign up
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
  );
};

export default RegistrationForm;