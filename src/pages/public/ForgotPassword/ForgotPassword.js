import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

const ForgotPassword = ({theme}) => {

    const { resetPassword } = useAuth();
    const emailRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your email for further instructions")
        } catch (e) {
            console.log(e);
            setError("Failed to reset password");
        }
        setLoading(false);
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email-group" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Reset Password
                    </Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to="/login">Login</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mb-2'>
            Need an account? <Link to="/signup">Sign Up</Link>
        </div>
    </>
  );
}

export default ForgotPassword;
