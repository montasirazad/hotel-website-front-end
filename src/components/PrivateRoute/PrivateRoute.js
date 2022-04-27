import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation()
    return (
        <div>
            {
                user.email ? children : <Navigate to='/login' state={{ from: location }} />
            }
        </div>
    );
};

export default PrivateRoute;