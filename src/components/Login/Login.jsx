import React, { useState } from 'react';
import './Login.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {loginWithGoogle} from '../../firebase/firebaseUtils';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        setEmail('');
        setPassword('');
    }
    const hangeChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        name === 'email' ? setEmail(value) : setPassword(value);
    }
    return (
        <div className='login-form'>
            <h2>I already has an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} required onChange={hangeChange} label='email' />
                <FormInput name='password' type='password' value={password} required onChange={hangeChange} label='password' />
                <div className='buttons'>
                    <CustomButton type='submit'>Login</CustomButton>
                    <CustomButton onClick={loginWithGoogle} customClass='login-with-google-btn'>Login With Google</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default Login;