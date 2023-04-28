import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Error404 } from '../common/Error404';
import { Users } from '../pages/Users';
import { User } from '../pages/User';

export const DashboardRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={ <Navigate to='/dashboard' /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/*" element={ <Error404 /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/users/:userId" element={ <User /> } />
        {/* <Route path="/rooms" element={ <Rooms /> } />
        <Route path="/rooms/:roomId" element={ <Room /> } />
        <Route path="/bookings" element={ <Bookings /> } />
        <Route path="/bookings/:bookingId" element={ <Booking /> } />
        <Route path="/contact" element={ <Contact /> } /> */}
    </Routes>
  );

};