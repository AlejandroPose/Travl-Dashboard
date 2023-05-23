import styled from "styled-components";

export const SideBarContainer = styled.div`
    width: 20%;
    min-width: 200px;
    max-width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
  `;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 10%;
    gap: 20px;
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
    }
  `;

export const ListContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    li {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
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
    box-shadow: 0px 0px 5px black;
    margin-bottom: 20px;
    img {
      width: 50%;
      height: 50%;
      margin-top: 10px;
      border-radius: 8%;
      box-shadow: 0px 0px 5px black;
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
    background-color: ${(props) => props.backgroundColor};
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
`;