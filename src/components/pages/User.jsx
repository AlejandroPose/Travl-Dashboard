import React, { useEffect } from 'react'
import { getUniqueUser } from '../../redux/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FirstChild, LastChild, TextData, UserContainer } from '../../styles/user.style';

export const User = () => {

    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(getUniqueUser(userId));
    }, []);

    const userData = useSelector( state => state.users.uniqueUser ); 

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

  return (
    <UserContainer>
        <FirstChild>
            <img src={ userData.image } alt="user img" width='300px' />
            <h1>{ userData.name }</h1>
        </FirstChild>
        <div>
            <TextData>Job Description</TextData>
            <TextData>{ userData.job_description }</TextData>
        </div>
        <div>
            <TextData>Schedule</TextData>
            <TextData>{ userData.schedule && getSchedule( userData.schedule ) }</TextData>
        </div>
        <LastChild>
            <TextData>Contact</TextData>
            <TextData>{ userData.phone }</TextData>
        </LastChild>
    </UserContainer>
  );

};