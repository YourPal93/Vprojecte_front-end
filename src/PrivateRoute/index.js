import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalState } from '../utils/userLocalStorage';

const PrivateRoute = ({ children }) => {
    const [jwt, setJwt] = useLocalState("", "jwt");
    return jwt ? children : <Navigate to="/login" />
};

export default PrivateRoute;