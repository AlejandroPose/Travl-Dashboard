import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    min-height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #00000005;
    transition: 0.5s all;
  `;

export const LeftContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
    img {
      cursor: pointer;
    }
  `;

export const ActualPageText = styled.h1`
    text-transform: capitalize;
    margin: 0;
  `;

export const RightContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    margin-right: 20px;
    img {
      cursor: pointer;
    }
  `;

export const LogoutImg = styled.img`
    cursor: pointer;
  `;