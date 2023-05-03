import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FirstChild, LastChild, TextData, UserContainer } from '../../styles/user.style';
import { getUniqueRoom } from '../../redux/roomsSlice';

export const Room = () => {

    const dispatch = useDispatch();
    const { roomId } = useParams();

    useEffect(() => {
        dispatch(getUniqueRoom(roomId));
    }, []);

    const roomData = useSelector( state => state.rooms.uniqueRoom ); 

    const getPrice = (price, offer, discount) => {
        let total = price;
        if (offer) {
            total = total - (total * discount);
        }
        return total;
      };
    
      const getDiscounts = ( object ) => {
        let totalPrice = getPrice( object.price, object.offer, object.discount );
        return { ...object, totalPrice };
      };
    
      const newRoomData = getDiscounts( roomData );

  return (
    <UserContainer>
        <FirstChild>
            <img src={ newRoomData.image } alt="user img" width='300px' />
            <h1>{ newRoomData.name }</h1>
        </FirstChild>
        <div>
            <TextData>Bed Type</TextData>
            <TextData>{ newRoomData.bed_type }</TextData>
        </div>
        <div>
            <TextData>Room Floor</TextData>
            <TextData>{ newRoomData.room_floor }</TextData>
        </div>
        <div>
            <TextData>Facilities</TextData>
            <TextData>{ newRoomData.facilities }</TextData>
        </div>
        <LastChild>
            <TextData>Rate</TextData>
            <TextData>{ newRoomData.totalPrice }</TextData>
        </LastChild>
    </UserContainer>
  );

};