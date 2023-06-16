import { SideBar } from './SideBar';
import { Header } from './Header';
import styled from 'styled-components';

const GeneralDisplayContainer = styled.div`
        display: flex;
        flex-direction: row;
    `;

    const MidContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;

export const GeneralDisplay = ({ children }) => {

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