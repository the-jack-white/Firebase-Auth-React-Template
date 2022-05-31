import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


const Dashboard = () => {
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleLogout = async () => {
        setError('');
        try {
            await logout();
            navigate("/login");
        } catch (e) {
            console.log(e)
            setError("Failed to Log Out")
        }
    }

    console.log(currentUser)

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mb-2'>
            <Button variant='link' onClick={handleLogout}>Log Out</Button>
        </div>
    </>
  )
}

export default Dashboard;