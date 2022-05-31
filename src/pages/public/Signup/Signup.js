import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

const Signup = ({theme}) => {

    const { signup } = useAuth();
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError('');
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch (e) {
            console.log(e);
            setError("Failed to create an account");
        }
        setLoading(false);
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email-group" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password-group" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm-group" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mb-2'>
            Already have an account? <Link to="/login">Log In</Link>
        </div>
    </>
  );
}

export default Signup;
