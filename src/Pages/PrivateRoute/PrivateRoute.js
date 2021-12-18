import React from 'react';
import { CircularProgress } from '@mui/material';
import { Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation()
    if (!isLoading) {
        return <CircularProgress />
    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivateRoute;