import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FirstChild, LastChild, TextData, UserContainer } from '../../styles/user.style';
import { getUniqueBooking } from '../../redux/bookingsSlice';

export const Booking = () => {

    const dispatch = useDispatch();
    const { bookingId } = useParams();

    useEffect(() => {
        dispatch(getUniqueBooking(bookingId));
    }, []);

    const bookingData = useSelector( state => state.bookings.uniqueBooking ); 

    const getStatus = ( object ) => {
        const today = new Date().getTime();
        const firstDay = new Date(object.checkIn).getTime();
        const lastDay = new Date(object.checkOut).getTime();
        let status = '';
        if (today < firstDay) {
          status = "Check In";
        } else if (firstDay < today && today < lastDay) {
          status = "In Progress";
        } else {
          status = "Check Out";
        }
        return status;
    };

    if (!bookingData) {
        return "Loading";
    }

    return (
        <UserContainer>
            <FirstChild>
                <img src={ bookingData.image } alt="user img" width='300px' />
                <h1>{ bookingData.guest }</h1>
            </FirstChild>
            <div>
                <TextData>Order Date</TextData>
                <TextData>{ bookingData.orderDate }</TextData>
            </div>
            <div>
                <TextData>Check In</TextData>
                <TextData>{ bookingData.checkIn }</TextData>
            </div>
            <div>
                <TextData>Check Out</TextData>
                <TextData>{ bookingData.checkOut }</TextData>
            </div>
            <div>
                <TextData>Special Request</TextData>
                <TextData>{ bookingData.specialRequest }</TextData>
            </div>
            <LastChild>
                <TextData>Status</TextData>
                <TextData>{ getStatus(bookingData) }</TextData>
            </LastChild>
        </UserContainer>
    );

};