import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { AllContainer, ButtonSubmit, FirstPartForm, FormContainer, InformationLogin, SecondPartForm } from '../../styles/login.style';
import { LogoContainer, TextLogoContainer } from '../../styles/sideBar.style';

export const Login = () => {

  const { login } = useContext( AuthContext );
  const [loginFailed, setLoginFailed] = useState( false );

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const name: string = e.target[0].value.toLocaleLowerCase();
    const password: string = e.target[1].value.toLocaleLowerCase();
    if ( name === 'aldros' && password === '0000' ) {
      login( 'Aldros Posirah', 'aldros@gmail.com' );
    } else {
      setLoginFailed( true );
    }
  };
    
  return (
    <AllContainer>
      <LogoContainer>
        <img src="imgs/logoIcon.jpg" alt="Hotel logo img" />
        <TextLogoContainer>
          <h1><b>travl</b></h1>
          <h6>Hotel Admin Dashboard</h6>
        </TextLogoContainer>
      </LogoContainer>
      <InformationLogin>
        <p>Name: aldros</p>
        <p>Password: 0000</p>
      </InformationLogin>
      <FormContainer onSubmit={ (event) => handleSubmitLogin(event) }>
        <FirstPartForm>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' />
        </FirstPartForm>
        <SecondPartForm>
          <label htmlFor="password">Password: </label>
          <input type="password" name='password' />
        </SecondPartForm>
        <ButtonSubmit type="submit" value="Login" name='submit' />
      </FormContainer>
      { loginFailed && <><p>Error: name, password or both are incorrect</p></> }
    </AllContainer>
  );

};