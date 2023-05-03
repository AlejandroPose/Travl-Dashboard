import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Cells, NameCell, TableInformation, TextNameCell, TextTitleCells, TitlesCells, TitlesRow } from '../../styles/users.style';
import { getRooms, updateState } from '../../redux/roomsSlice';

export const Rooms = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, []);
  
  const roomsData = useSelector( state => state.rooms.data ); 

  const navigate = useNavigate();
  const handleLinkUserID = (id) => {
    navigate(`/rooms/${id}`);
  };

  const getPrice = (price, offer, discount) => {
    let total = price;
    if (offer) {
        total = total - (total * discount);
    }
    return total;
  };

  const getDiscounts = ( array ) => {
    return array.map( room => {
        let totalPrice = getPrice( room.price, room.offer, room.discount );
        return { ...room, totalPrice };
    });
  };

  const newRoomsData = getDiscounts( roomsData );

  const handleSortTable = (filter) => {
    let newArray = newRoomsData.map( it => {
      return it;
    });
    switch (filter) {
      case "1":
        newArray = newArray.sort(function(a,b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "2":
        newArray = newArray.sort(function(a,b) {
          if (a.bed_type > b.bed_type) {
            return 1;
          }
          if (a.bed_type < b.bed_type) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "3":
        newArray = newArray.sort(function(a,b) {
          if (a.room_floor > b.room_floor) {
            return 1;
          }
          if (a.room_floor < b.room_floor) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "4":
        newArray = newArray.sort(function(a,b) {
          if (a.facilities > b.facilities) {
            return 1;
          }
          if (a.facilities < b.facilities) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
        case "5":
            newArray = newArray.sort(function(a,b) {
                if (a.totalPrice < b.totalPrice) {
                    return 1;
                }
                if (a.totalPrice > b.totalPrice) {
                    return -1;
                }
                return 0;
            });
            dispatch( updateState(newArray) );
            break;
        case "6":
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

  return (
    <>
    <TableInformation>
      <thead>
        <TitlesRow>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("1") }>Name</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("2") }>Bed Type</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("3") }>Room Floor</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("4") }>Facilities</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("5") }>Rate</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("6") }>Status</TextTitleCells></TitlesCells>
        </TitlesRow>
      </thead>
      <tbody>
      { newRoomsData.map( room => {
        return (
        <tr key={ room.id } onClick={ () => handleLinkUserID( room.id ) }>
          <Cells><NameCell><img src={ room.image } alt="user img" width='100px'/><TextNameCell>{ room.name }</TextNameCell></NameCell></Cells>
          <Cells>{ room.bed_type }</Cells>
          <Cells>{ room.room_floor }</Cells>
          <Cells>{ room.facilities }</Cells>
          <Cells>{ getPrice(room.price, room.offer, room.discount) }</Cells>
          <Cells>{ room.status }</Cells>
        </tr>
        );
      }) }
      </tbody>
    </TableInformation>
    </>
  );

};