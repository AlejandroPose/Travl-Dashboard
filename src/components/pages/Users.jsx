import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateState } from '../../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import { Cells, NameCell, TableInformation, TextNameCell, TextTitleCells, TitlesCells, TitlesRow } from '../../styles/users.style';

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
        case 0:
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

  const handleSortTable = (filter) => {
    let newArray = newUsersData.map( it => {
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
          if (a.job_description > b.job_description) {
            return 1;
          }
          if (a.job_description < b.job_description) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "3":
        newArray = newArray.sort(function(a,b) {
          if (a.schedule > b.schedule) {
            return 1;
          }
          if (a.schedule < b.schedule) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "4":
        newArray = newArray.sort(function(a,b) {
          if (a.phone > b.phone) {
            return 1;
          }
          if (a.phone < b.phone) {
            return -1;
          }
          return 0;
        });
        dispatch( updateState(newArray) );
        break;
      case "5":
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
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("2") }>Job Description</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("3") }>Schedule</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("4") }>Contact</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("5") }>Status</TextTitleCells></TitlesCells>
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