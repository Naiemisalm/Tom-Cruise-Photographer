import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.int'


const Register = () => {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
        if (user) {
            navigate('/home')
        }
    }

    return (
        <div>
            <Form onSubmit={handleRegister} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already have an account <span style={{ cursor: "pointer" }} className='text-danger' onClick={navigateRegister}>Login</span></p>
        </div>
    );
};

export default Register;