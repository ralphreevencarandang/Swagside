import React from 'react'
import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router';

const ProtecteUserdRoute = ({children}) => {

    const setIsUserLoggedIn = useAuthStore((state)=> state.isUserLoggedIn)

    return setIsUserLoggedIn ? children : <Navigate to="/sign-in" replace />;

  
}

export default ProtecteUserdRoute
