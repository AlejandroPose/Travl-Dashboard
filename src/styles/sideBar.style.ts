import styled from 'styled-components';

export const SideBarContainer = styled.div`
    width: 20%;
    min-width: 200px;
    max-width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    transition: 0.5s all;
  `;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 10%;
    gap: 20px;
    font-size: 15px;
  `;

export const TextLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      margin: 0;
    }
    h6 {
      margin: 0;
      color: #888888;
      font-weight: 200;
    }
  `;

export const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    li {
      width: 100%;
      height: 50px;
      div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        margin-right: 10px;
      }
      a {
        text-decoration: none;
        color: black;
      }
      a:hover {
        color: #E23428;
      }
    }
  `;

export const UserInfoContainer = styled.div`
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0px 0px 5px #8a8a8a;
    margin-bottom: 20px;
    border-radius: 8px;
    img {
      width: 50%;
      height: 50%;
      margin-top: 10px;
      border-radius: 8%;
      box-shadow: 0px 0px 5px #8a8a8a;
    }
    p {
      margin: 0;
    }
    button {
      margin-bottom: 10px;
    }
  `;

export const ButtonEditProfile = styled.button`
    border: none;
    background-color: #dddddd;
    color: black;
    padding: 10px;
    width: 60%;
    border-radius: 5%;
    transition: all 0.5s;
    :hover {
      cursor: pointer;
      background-color: black;
      color: #dddddd;
    }
`;

export const MadeByInformation = styled.div`
  margin: 0 10%;
  font-size: 15px;
  p:nth-child(2) {
    margin-top: -15px;
  }
  p:nth-child(2), p:nth-child(3) {
    color: #aaaaaa;
  }
`;

export const PopUp = styled.div`
  background-color: #cecece;
  width: 420px;
  padding: 30px 40px;
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  border-radius: 8px;
  display: none; 
  text-align: center;
  button {
    display: block;
    margin:  0 0 0 auto;
    background-color: transparent;
    font-size: 30px;
    color: #ffffff;
    background: #E23428;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  h2 {
    margin-top: -20px;
  }
`;

export const FormPopUp = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
input {
  border: none;
  background-color: transparent;
  border-bottom: 2px solid darkgray;
}
`;

export const SubmitFormPopUp = styled.input`
  background-color: #E23428 !important;
  border: none !important;
  color: white;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 8px;
  font-weight: 500;
`;