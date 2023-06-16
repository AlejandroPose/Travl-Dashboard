import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}

export const PublicRoutes = ({ children }: Props) => {

    const { logged } = useContext( AuthContext );

    return (!logged)
      ? <>{children}</>
      : <Navigate to='/dashboard' />
};