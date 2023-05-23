import styled from "styled-components";

export const AllContainer = styled.div`
    margin: 40px auto;
    box-shadow: 0px 0px 10px #000000;
    padding: 20px;
    width: fit-content;
  `;
  
  export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  `;

  export const TextLogoContainer = styled.div`
    h1 {
      margin: 0;
    }
    h6 {
      margin: 0;
    }
  `;

  export const InformationLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
  `;

  export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 10px;
    }
  `;

  export const FirstPartForm = styled.div`
    display: flex;
    margin-bottom: 10px;
    label {
      width: 100px;
    }
  `;

  export const SecondPartForm = styled.div`
    display: flex;
    label {
      width: 100px;
    }
  `;

  export const ButtonSubmit = styled.input`
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