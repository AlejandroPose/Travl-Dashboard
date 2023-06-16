import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { useLocation } from 'react-router-dom';
import { ActualPageText, HeaderContainer, LeftContentContainer, LogoutImg, RightContentContainer } from '../../styles/header.style';
import { Imagen } from './Imagen';

export const Header = () => {

  const { logout } = useContext( AuthContext );
  const path = useLocation();

  const actualPage = path.pathname.split('/');

  const routes = {
    dashboard: { 
      title: "Dashboard",
    },
    users: { 
      title: "Users",
    },
    rooms: { 
      title: "Rooms",
    },
    bookings: { 
      title: "Bookings",
    },
    contact: { 
      title: "Contact",
    },
  };

  const handleClickLogout = () => {
    logout();
  };

  const handleSideBarWrap = () => {
    if (document.getElementById('sideBarCont').style.display !== 'none') {
      document.getElementById('sideBarCont').style.display = 'none';
    } else {
      document.getElementById('sideBarCont').style.display = 'flex';
    }
  };

  return (
    <HeaderContainer>
      <LeftContentContainer id='leftCont'>
        <Imagen onClick={ () => handleSideBarWrap() } url="imgs/menu.png" width='40px'/>
        <ActualPageText>{ routes[actualPage[1]]?.title || 'Error 404' }</ActualPageText>
      </LeftContentContainer>
      <RightContentContainer>
        <Imagen url="imgs/card.png" width='30px'/>
        <Imagen url="imgs/alert.png" width='25px'/>
        <LogoutImg data-testid='imageLogout' src={`${process.env.PUBLIC_URL}/imgs/logout.png`} alt="Logout Icon" width='25px' onClick={ () => handleClickLogout() } />
      </RightContentContainer>
    </HeaderContainer>
  );

};