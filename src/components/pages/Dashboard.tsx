import { DashboardContainer } from '../../styles/dashboard.style';
import styled from "styled-components";

export const TotalBookings = styled.div`
display: flex;
align-items: center;
img {
  width: 50px;
  height: 50px;
}
`;

export const Dashboard = () => {

  return (
    <DashboardContainer>
      <TotalBookings>
        <img src="imgs/habitacion.png" alt="" />
        <div>
          <h2>8500</h2>
          <p>Total Bookings</p>
        </div>
      </TotalBookings>
      <div>
        <img src="imgs/habitacion.png" alt="" />
        <div>
          <h2>8500</h2>
          <p>Total Bookings</p>
        </div>
      </div>
      <div>
        <img src="imgs/habitacion.png" alt="" />
        <div>
          <h2>8500</h2>
          <p>Total Bookings</p>
        </div>
      </div>
      <div>
        <img src="imgs/habitacion.png" alt="" />
        <div>
          <h2>8500</h2>
          <p>Total Bookings</p>
        </div>
      </div>
    </DashboardContainer>
  );

};