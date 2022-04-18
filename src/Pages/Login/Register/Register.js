import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.int'
import SocailLogin from '../SocailLogin/SocailLogin';


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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}  </p>
      }

    const [updateProfile, updating] = useUpdateProfile(auth);

    if(user){
        console.log(updating)

    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')

        if (user) {
            navigate('/home')
        }
    }

    return (
        <div>
            <h3 className='text-center' >Create an account!!</h3>
            <Form onSubmit={handleRegister} className='container w-50 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>{errorElement}</p>
            <p className='text-center'>Already have an account <span style={{ cursor: "pointer" }} className='text-danger' onClick={navigateRegister}>Login</span></p>
            <div>
                <SocailLogin></SocailLogin>
            </div>
        </div>
    );
};

export default Register;