import styled from "styled-components";

export const ButtonCreate = styled.button`
  padding: 5px 10px;
  width: auto;
  border: none;
  border-radius: 5%;
  color: white;
  background-color: rgb(19, 88, 70);
  width: 150px;
  margin-left: 100%;
  transform: translateX(-180%);
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: rgba(19, 88, 70, 0.8);
  }
`;

export const TableInformation = styled.table`
  margin: 40px 10%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 8px;
  background-color: white;
`; 

export const TitlesRow = styled.tr`
  color: black;
  font-weight: 900;
`; 

export const TitlesCells = styled.th`
  padding: 10px;
`;

export const NameCell = styled.div`
  display: flex;
  align-items: center;
`;

export const Cells = styled.td`
padding: 10px;
`;

export const TextNameCell = styled.p`
  margin: 0 10px;
`;

export const TextTitleCells = styled.p`
  margin: 0 auto;
  width: fit-content;
  cursor: pointer;
`;