import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import { useAuthStatus } from '../../lib/useAuthStatus';


const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus();

    if (checkingStatus) {
        return <Spinner animation="border" />
    }

    return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute;