import React from 'react';
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use_auth';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) return children;
  return <Navigate to={"/login"} />
}

export default PrivateRoute;
