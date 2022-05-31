import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

const Login = ({theme}) => {

    const { login } = useAuth();
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch (e) {
            console.log(e);
            setError("Failed to log into an account");
        }
        setLoading(false);
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
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
                    <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mb-2'>
            Need an account? <Link to="/signup">Sign Up</Link>
        </div>
    </>
  );
}

export default Login;
