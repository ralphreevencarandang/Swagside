import React from 'react'
import { useAuthStore } from '../store/authStore'
import { Navigate } from 'react-router';
const ProtectedAdminRoute = ({children}) => {
    const {isAdminLoggedIn} = useAuthStore();
  return isAdminLoggedIn ? children : <Navigate to={'/adminLogin'} replace/>
}

export default ProtectedAdminRoute
