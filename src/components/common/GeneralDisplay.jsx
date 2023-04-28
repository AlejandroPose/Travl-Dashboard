import React from 'react'
import { SideBar } from './SideBar';
import { Header } from './Header';
import styled from 'styled-components';

export const GeneralDisplay = ({ children }) => {

    const GeneralDisplayContainer = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const MidContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;

  return (
    <GeneralDisplayContainer>
        <SideBar />
        <MidContainer>
            <Header />
            { children }
        </MidContainer>
    </GeneralDisplayContainer>
  );

};