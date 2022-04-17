import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.int'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()


    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

   
    const hadleToLogin = event => {
        event.preventDefault();
        const email = event.target.value
        const password = event.target.value
        signInWithEmailAndPassword(email, password)

        if (user) {
            navigate(from, { replace: true });
         }

    }


    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <div>
            <h3 className='text-primary text-center '>Please Login</h3>
            <Form onSubmit={hadleToLogin} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center'> Don't have an account <span className='text-danger' style={{ cursor: 'pointer' }} onClick={navigateRegister}>Sign Up</span></p>
        </div>
    );
};

export default Login;