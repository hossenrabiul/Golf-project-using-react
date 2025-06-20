import React from 'react';
import { Navigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
const Logout = () => {
    localStorage.removeItem(ACCESS_TOKEN, REFRESH_TOKEN)
    return (
        <Navigate to={'/'}></Navigate>
    );
};

export default Logout;