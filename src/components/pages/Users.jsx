import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, postUser, putUser, updateState } from '../../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import { ButtonCreate, Cells, NameCell, TableInformation, TextNameCell, TextTitleCells, TitlesCells, TitlesRow } from '../../styles/users.style';
import { Imagen } from '../common/Imagen';
import { FormPopUp, PopUp, SubmitFormPopUp } from '../../styles/sideBar.style';

export const Users = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const openCreatePopUp = () => {
    document.getElementById('createPopUp').style.display = 'block';
  };

  const closeCreatePopUp = () => {
    document.getElementById('createPopUp').style.display = 'none';
  };

  const submitCreatePopUp = (e) => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      job_description: e.target[1].value,
      phone: e.target[2].value,
      schedule: e.target[3].value,
      image: e.target[4].value,
      email: e.target[5].value,
      password: e.target[6].value,
    }
    dispatch(postUser(user));
    document.getElementById('createPopUp').style.display = 'none';
  }

  const openEditPopUp = (e, _id) => {
    document.getElementById('editPopUp').style.display = 'block';
  };

  const closeEditPopUp = () => {
    document.getElementById('editPopUp').style.display = 'none';
  };

  const submitEditPopUp = (e, _id) => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      job_description: e.target[1].value,
      phone: e.target[2].value,
      schedule: e.target[3].value,
      image: e.target[4].value,
      email: e.target[5].value,
      password: e.target[6].value,
    }
    //dispatch(putUser(_id, user));
    document.getElementById('editPopUp').style.display = 'none';
  }

  return (
    <>
    <ButtonCreate onClick={ (event) => openCreatePopUp(event) }>+ New User</ButtonCreate>
    <TableInformation>
      <thead>
        <TitlesRow>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("1") }>Name</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("2") }>Job Description</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("3") }>Schedule</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("4") }>Contact</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells onClick={ () => handleSortTable("5") }>Status</TextTitleCells></TitlesCells>
          <TitlesCells><TextTitleCells>Edit</TextTitleCells></TitlesCells>
        </TitlesRow>
      </thead>
      <tbody>
      { newUsersData.map( user => {
        return (
        <tr key={ user.id } onClick={ () => handleLinkUserID( user._id ) }>
          <Cells><NameCell><Imagen url={user.image} width='100px'/><TextNameCell>{ user.name }</TextNameCell></NameCell></Cells>
          <Cells>{ user.job_description }</Cells>
          <Cells>{ user.schedule }</Cells>
          <Cells>{ user.phone }</Cells>
          <Cells>{ user.status }</Cells>
          <Cells><button onClick={ (event) => openEditPopUp(event, user._id) }>...</button></Cells>
        </tr>
        );
      }) }
      </tbody>
    </TableInformation>
    <PopUp id='createPopUp'>
        <button id="closeUser" onClick={ () => closeCreatePopUp() }>&times;</button>
        <h2>Create User</h2>
        <FormPopUp action="" onSubmit={ (event) => submitCreatePopUp(event) }>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name'/>
          <label htmlFor="job_description">Job_description:</label>
          <input type="text" name='job_description'/>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name='phone'/>
          <label htmlFor="schedule">Schedule:</label>
          <input type="text" name='schedule'/>
          <label htmlFor="image">Image:</label>
          <input type="text" name='image'/>
          <label htmlFor="email">Email:</label>
          <input type="text" name='email'/>
          <label htmlFor="password">Password:</label>
          <input type="text" name='password'/>
          <SubmitFormPopUp type="submit" value='Create'/>
        </FormPopUp>
      </PopUp>
      <PopUp id='editPopUp'>
        <button id="closeUserEdit" onClick={ () => closeEditPopUp() }>&times;</button>
        <h2>Edit User</h2>
        <FormPopUp action="" onSubmit={ (event) => submitEditPopUp(event) }>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name'/>
          <label htmlFor="job_description">Job_description:</label>
          <input type="text" name='job_description'/>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name='phone'/>
          <label htmlFor="schedule">Schedule:</label>
          <input type="text" name='schedule'/>
          <label htmlFor="image">Image:</label>
          <input type="text" name='image'/>
          <label htmlFor="email">Email:</label>
          <input type="text" name='email'/>
          <label htmlFor="password">Password:</label>
          <input type="text" name='password'/>
          <SubmitFormPopUp type="submit" value='Edit'/>
        </FormPopUp>
      </PopUp>
    </>
  );

};