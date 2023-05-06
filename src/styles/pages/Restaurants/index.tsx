import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding-top: 7.9rem;
`;

export const LocalContainer = styled.div`
  padding: 0 5rem;
  margin-top: 4rem;
  width: 100%;
  padding: 0 3rem;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 1rem;
`;
export const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secundary};
  font-weight: 900;
  margin-bottom: 2rem;
`;

export const RestaurantWrapper = styled.div`
  width: 100%;
  margin: 5rem 0rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RestaurantCard = styled.div`
  width: auto;
  height: 300px;
  background-color: blue;
  border-radius: 1rem;
  padding: 2rem 1rem;
`;
