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
    margin: 40px;
    text-align: center;
    box-shadow: 0px 0px 10px #000000;
    padding: 20px;
  `;

  const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 50px;
    align-items: center;
    label {
      text-align: left;
      margin-bottom: 10px;
    }
  `;

  const ButtonSubmit = styled.input`
    border: none;
    background-color: #dddddd;
    margin-top: 20px;
    padding: 10px 50px;
    font-weight: 900;
    cursor: pointer;
  `;

  const SecondLabel = styled.label`
    margin-top: 10px;
  `;
    
  return (
    <AllContainer>
    <p>Name: aldros</p>
    <p>Password: 0000</p>
    <FormContainer onSubmit={ (event) => handleSubmitLogin(event) }>
      <label htmlFor="name">Name: </label>
      <input type="text" name='name' />
      <SecondLabel htmlFor="password">Password: </SecondLabel>
      <input type="password" />
      <ButtonSubmit type="submit" value="Login" />
    </FormContainer>
    { loginFailed && <><p>Error: name, password or both are incorrect</p></> }
    </AllContainer>
  );

};