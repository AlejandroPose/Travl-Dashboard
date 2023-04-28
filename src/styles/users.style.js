import styled from "styled-components";

export const TableInformation = styled.table`
    margin: 40px 10%;
    border-collapse: collapse;
    text-align: center;
  `; 

export const TitlesRow = styled.tr`
    background-color: #dddddd;
    color: black;
    font-weight: 900;
  `; 

export const NameCell = styled.div`
    display: flex;
    align-items: center;
  `;

export const Cells = styled.td`
    border: 2px solid #dddddd;
  `;

export const TitlesCells = styled.th`
    border: 2px solid #dddddd;
  `;

export const TextNameCell = styled.p`
    margin: 0 10px;
  `;