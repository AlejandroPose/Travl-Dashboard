import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { Login } from '../pages/Login';
import { PrivateRoutes } from './PrivateRoutes';
import { DashboardRoutes } from './DashboardRoutes';
import { GeneralDisplay } from '../common/GeneralDisplay';

export const GeneralRoutes = () => {

  return (
    <Routes>
        <Route path="/login" element={ 
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        } />
        <Route path="/*" element={
          <PrivateRoutes>
            <GeneralDisplay>
              <DashboardRoutes />
            </GeneralDisplay>
          </PrivateRoutes>
        } />
    </Routes>
  );

};