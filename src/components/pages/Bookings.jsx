import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Cells, NameCell, TableInformation, TextNameCell, TextTitleCells, TitlesCells, TitlesRow } from '../../styles/users.style';
import { getBookings, updateState } from '../../redux/bookingsSlice';
import { CreateButton } from '../../styles/bookings.style';
import { Imagen } from '../common/Imagen';

export const Bookings = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const bookingsData = useSelector( state => state.bookings.data ); 

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

  const navigate = useNavigate();
  const handleLinkUserID = (id) => {
    navigate(`/bookings/${id}`);
  };

  const handleSortTable = (filter) => {
    let newArray = bookingsData.map( it => {
      return it;
    });
    switch (filter) {
      case "1":
        newArray = newArray.sort(function(a,b) {
          if (a.guest > b.guest) {
            return 1;
          }
          if (a.guest < b.guest) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "2":
        newArray = newArray.sort(function(a,b) {
          if (a.orderDate > b.orderDate) {
            return 1;
          }
          if (a.orderDate < b.orderDate) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "3":
        newArray = newArray.sort(function(a,b) {
          if (a.checkIn > b.checkIn) {
            return 1;
          }
          if (a.checkIn < b.checkIn) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "4":
        newArray = newArray.sort(function(a,b) {
          if (a.checkOut > b.checkOut) {
            return 1;
          }
          if (a.checkOut < b.checkOut) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
        case "5":
            newArray = newArray.sort(function(a,b) {
                if (a.specialRequest > b.specialRequest) {
                    return 1;
                }
                if (a.specialRequest < b.specialRequest) {
                    return -1;
                }
                return 0;
            });
            dispatch( updateState(newArray) );
            break;
        case "6":
            newArray = newArray.sort(function(a,b) {
                if (a.roomType > b.roomType) {
                return 1;
                }
                if (a.roomType < b.roomType) {
                return -1;
                }
                return 0;
            });
            dispatch( updateState(newArray) );
            break;
        case "7":
            newArray = newArray.sort(function(a,b) {
                if (a.status > b.status) {
                return 1;
                }
                if (a.status < b.status) {
                return -1;
                }
                return 0;
            });
            dispatch( updateState(newArray) );
            break;
        default:
            console.log('error');
            break;
    }
  };

  const createNewBooking = () => {
    console.log("Nice try");
  };

  return (
    <>
    <CreateButton onClick={ () => createNewBooking() }>+ New Booking</CreateButton>
    <TableInformation>
      <thead>
        <TitlesRow>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("1") }>Guest</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("2") }>Order Date</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("3") }>Check In</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("4") }>Check Out</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("5") }>Special Request</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("6") }>Room Type</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("7") }>Status</TextTitleCells></TitlesCells>
        </TitlesRow>
      </thead>
      <tbody>
      { bookingsData.map( booking => {
        return (
        <tr key={ booking.id } onClick={ () => handleLinkUserID( booking.id ) }>
          <Cells><NameCell><Imagen url={booking.image} width='100px'/><TextNameCell>{ booking.guest }</TextNameCell></NameCell></Cells>
          <Cells>{ booking.orderDate }</Cells>
          <Cells>{ booking.checkIn }</Cells>
          <Cells>{ booking.checkOut }</Cells>
          <Cells>{ booking.specialRequest }</Cells>
          <Cells>{ booking.roomType }</Cells>
          <Cells>{ getStatus(booking) }</Cells>
        </tr>
        );
      }) }
      </tbody>
    </TableInformation>
    </>
  );

};