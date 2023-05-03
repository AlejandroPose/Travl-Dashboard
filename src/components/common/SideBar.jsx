import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { ButtonEditProfile, ListContainer, LogoContainer, MadeByInformation, SideBarContainer, TextLogoContainer, UserInfoContainer } from '../../styles/sideBar.style';

export const SideBar = () => {

  const { user } = useContext( AuthContext );

  const handleClickEditProfile = () => {
    console.log('Good Luck');
  }

  return (
    <SideBarContainer>
      <LogoContainer>
        <img src="imgs/logoIcon.jpg" alt="Hotel logo img" />
        <TextLogoContainer>
          <h1><b>travl</b></h1>
          <h6>Hotel Admin Dashboard</h6>
        </TextLogoContainer>
      </LogoContainer>
      <nav>
        <ListContainer>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/rooms'>Rooms</NavLink>
          </li>
          <li>Bookings</li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li>Contact</li>
        </ListContainer>
      </nav>
      <UserInfoContainer>
        <img src="imgs/rodajaPepino.jpg" alt="User img" />
        <p>{ user.name }</p>
        <p>{ user.email }</p>
        <ButtonEditProfile onClick={ () => handleClickEditProfile() }>Edit Profile</ButtonEditProfile>
      </UserInfoContainer>
      <MadeByInformation>
        <p>Travl Hotel Admin Dashboard</p>
        <p>© 2023 All Rights Reserved</p>
        <p>Made with ♥ by Alejandro Pose Silveira</p>
      </MadeByInformation>
    </SideBarContainer>
  );

};