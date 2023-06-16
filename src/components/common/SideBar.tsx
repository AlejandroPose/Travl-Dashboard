import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { Imagen } from './Imagen';
import { ButtonEditProfile, FormPopUp, ListContainer, LogoContainer, MadeByInformation, PopUp, SideBarContainer, SubmitFormPopUp, TextLogoContainer, UserInfoContainer } from '../../styles/sideBar.style';

export const SideBar = () => {

  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('user')).name);

  const { user } = useContext( AuthContext );

  const handleClickEditProfile = () => {
    document.getElementById('popUp').style.display = 'block';
  };

  const handleClosePopUp = () => {
    document.getElementById('popUp').style.display = 'none';
  };

  const handleSubmitEditProfile = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const name = e.target[0].value;
    user.name = name;
    localStorage.setItem( 'user', JSON.stringify( user ) );
    document.getElementById('popUp').style.display = 'none';
    setUserName(name);
    //alert('Nombre de usuario cambiado perfectamente');
  };

  return (
    <SideBarContainer id='sideBarCont'>
      <LogoContainer>
        <Imagen url="imgs/logoIcon.jpg"width={undefined}/>
        <TextLogoContainer>
          <h1><b>travl</b></h1>
          <h6>Hotel Admin Dashboard</h6>
        </TextLogoContainer>
      </LogoContainer>
      <nav>
        <ListContainer>
          <li>
            <div>
              <Imagen url='imgs/literatura.png' width='20px'/>
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </div>
          </li>
          <li>
            <div>
              <Imagen url='imgs/llave.png' width='20px'/>
              <NavLink to='/rooms'>Rooms</NavLink>
            </div>
          </li>
          <li>
            <div>
              <Imagen url='imgs/calendario.png' width='20px'/>
              <NavLink to='/bookings'>Bookings</NavLink>
            </div>
          </li>
          <li>
            <div>
              <Imagen url='imgs/perfil.png' width='20px'/>
              <NavLink to='/users'>Users</NavLink>
            </div>
          </li>
          <li>
            <div>
              <Imagen url='imgs/charlar.png' width='20px'/>
              <NavLink to='/contact'>Contact</NavLink>
            </div>
          </li>
        </ListContainer>
      </nav>
      <UserInfoContainer>
        <Imagen url="imgs/rodajaPepino.jpg" width={undefined}/>
        <p>{ userName }</p>
        <p>{ user.email }</p>
        <ButtonEditProfile onClick={ () => handleClickEditProfile() }>Edit Profile</ButtonEditProfile>
      </UserInfoContainer>
      <MadeByInformation>
        <p>Travl Hotel Admin Dashboard</p>
        <p>© 2023 All Rights Reserved</p>
        <p>Made with ♥ by Alejandro Pose Silveira</p>
      </MadeByInformation>
      <PopUp id='popUp'>
        <button id="close" onClick={ () => handleClosePopUp() }>&times;</button>
        <h2>Edit Profile</h2>
        <FormPopUp action="" onSubmit={ (event) => handleSubmitEditProfile(event) }>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name'/>
          <SubmitFormPopUp type="submit" value='Change'/>
        </FormPopUp>
      </PopUp>
    </SideBarContainer>
  );

};