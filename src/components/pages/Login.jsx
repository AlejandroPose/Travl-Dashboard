import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import styled from 'styled-components';

export const Login = () => {

  const { login } = useContext( AuthContext );
  const [loginFailed, setLoginFailed] = useState( false );

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const name = e.target[0].value.toLocaleLowerCase();
    const password = e.target[1].value.toLocaleLowerCase();
    if ( name === 'aldros' && password === '0000' ) {
      login( 'Aldros Posirah', 'aldros@gmail.com' );
    } else {
      setLoginFailed( true );
    }
  };

  const AllContainer = styled.div`
    margin: 40px auto;
    box-shadow: 0px 0px 10px #000000;
    padding: 20px;
    width: fit-content;
  `;
  
  const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  `;

  const TextLogoContainer = styled.div`
    h1 {
      margin: 0;
    }
    h6 {
      margin: 0;
    }
  `;

  const InformationLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
  `;

  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 10px;
    }
  `;

  const FirstPartForm = styled.div`
    display: flex;
    margin-bottom: 10px;
    label {
      width: 100px;
    }
  `;

  const SecondPartForm = styled.div`
    display: flex;
    label {
      width: 100px;
    }
  `;

  const ButtonSubmit = styled.input`
    border: none;
    background-color: #dddddd;
    margin-top: 20px;
    padding: 10px 50px;
    font-weight: 900;
    cursor: pointer;
    border-radius: 5%;
    transition: all 0.3s;
    :hover {
      background-color: black;
      color: #dddddd;
    }
  `;
    
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