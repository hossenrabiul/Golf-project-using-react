import React from 'react';
import Form from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
       <LoginForm route={'https://sporting-server-phi.vercel.app/api/token/'}></LoginForm>
    );
};

export default Login;