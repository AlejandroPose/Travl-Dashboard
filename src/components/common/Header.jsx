import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { useLocation } from 'react-router-dom';
import { ActualPageText, HeaderContainer, LeftContentContainer, LogoutImg, RightContentContainer } from '../../styles/header.style';

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
    bookkings: { 
      title: "Bookings",
    },
    contact: { 
      title: "Contact",
    },
  };

  const handleClickLogout = () => {
    logout();
  };

  return (
    <HeaderContainer>
      <LeftContentContainer>
        <img src="/imgs/menu.png" alt="Menu icon" width='40px'/>
        <ActualPageText>{ routes[actualPage[1]]?.title || 'Error 404' }</ActualPageText>
      </LeftContentContainer>
      <RightContentContainer>
        <img src="/imgs/card.png" alt="Message Icon" width='30px'/>
        <img src="/imgs/alert.png" alt="Alert Icon" width='25px'/>
        <LogoutImg src="/imgs/logout.png" alt="Logout Icon" width='25px' onClick={ () => handleClickLogout() } />
      </RightContentContainer>
    </HeaderContainer>
  );

};