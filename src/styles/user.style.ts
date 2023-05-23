import styled from "styled-components";

export const UserContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin: 40px 10%;
        box-shadow: 0px 0px 10px #000000;
    `;

export const FirstChild = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        h1 {
            margin-bottom: 0;
        }
    `;

export const TextData = styled.p`
        text-align: center;
    `;

export const LastChild = styled.div`
        margin-bottom: 20px;
    `;