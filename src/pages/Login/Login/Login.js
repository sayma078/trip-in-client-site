import React from 'react';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Login = () => {
    return (
        <div className="mt-5">
            <h2 >Sign for Book</h2>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;