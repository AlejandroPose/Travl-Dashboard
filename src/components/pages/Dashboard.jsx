import React from 'react'
import styled from 'styled-components';

export const Dashboard = () => {

  const DashboardContainer = styled.div`
    height: 90%;
    p {
      margin: 0;
    }
  `;

  return (
    <DashboardContainer>
      <p>Dashboard</p>
    </DashboardContainer>
  );

};