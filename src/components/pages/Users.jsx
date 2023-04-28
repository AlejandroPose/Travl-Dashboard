import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import { Cells, NameCell, TableInformation, TextNameCell, TitlesCells, TitlesRow } from '../../styles/users.style';

export const Users = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  const usersData = useSelector( state => state.users.data ); 
  const date = new Date().getDay();

  const getStatus = ( array ) => {
    return array.map( user => {
      let status = 'Inactive';
      if ( user.schedule.includes( date ) ) {
        status = "Active";
      }
      return {...user, status};
    });
  };
  const newUsersData = getStatus(usersData);

  const getSchedule = ( scheduleArray ) => {
    let days = '';
    scheduleArray.map( day => {
      switch (day) {
        case 1:
          days = days + 'Monday ';
          break;
        case 2:
          days = days + 'Tuesday ';
          break;
        case 3:
          days = days + 'Wednesday ';
          break;
        case 4:
          days = days + 'Thursday ';
          break;
        case 5:
          days = days + 'Friday ';
          break;
        case 6:
          days = days + 'Saturday ';
          break;
        case 7:
          days = days + 'Sunday ';
          break;
        default:
          break;
      }
      return day;
    });
    days = days.replaceAll(' ', ', ');
    days = days.substr(0, days.length - 2);
    return days;
  };

  const navigate = useNavigate();
  const handleLinkUserID = (id) => {
    navigate(`/users/${id}`);
  };

  

  return (
    <>
    <TableInformation>
      <thead>
        <TitlesRow>
          <TitlesCells>Name</TitlesCells>
          <TitlesCells>Job Description</TitlesCells>
          <TitlesCells>Schedule</TitlesCells>
          <TitlesCells>Contact</TitlesCells>
          <TitlesCells>Status</TitlesCells>
        </TitlesRow>
      </thead>
      <tbody>
      { newUsersData.map( user => {
        return (
        <tr key={ user.id } onClick={ () => handleLinkUserID( user.id ) }>
          <Cells><NameCell><img src={ user.image } alt="user img" width='100px'/><TextNameCell>{ user.name }</TextNameCell></NameCell></Cells>
          <Cells>{ user.job_description }</Cells>
          <Cells>{ getSchedule( user.schedule ) }</Cells>
          <Cells>{ user.phone }</Cells>
          <Cells>{ user.status }</Cells>
        </tr>
        );
      }) }
      </tbody>
    </TableInformation>
    </>
  );

};