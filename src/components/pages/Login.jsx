import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';

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
    
  return (
    <>
    <p>Name: aldros</p>
    <p>Password: 0000</p>
    <form onSubmit={ (event) => handleSubmitLogin(event) }>
      <label htmlFor="name">Name: </label><input type="text" name='name' />
      <label htmlFor="password">Password</label><input type="password" />
      <input type="submit" value="Login" />
    </form>
    { loginFailed && <><p>Error: name, password or both are incorrect</p></> }
    </>
  );

};