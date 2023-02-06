import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const RegistrationSuccess = () => {
  return (
    <>
      <div style={{display: 'flex',  
                  justifyContent:'center', 
                  alignItems:'center', 
                  height: '100vh'}}>
          <span className='square border mb-3'>Registration successful. Confirmation letter has been sent to your email adress</span>
      </div>
    </>
  );
};

export default RegistrationSuccess;