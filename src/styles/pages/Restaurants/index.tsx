import { color } from "framer-motion";
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

  @media (max-width: 700px) {
    padding: 0 2rem;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 1rem;
  margin: 5rem 0;

  @media (max-width: 700px) {
    margin: 3rem 0;
  }
`;
export const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secundary};
  font-weight: 900;

  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

export const RestaurantInfomation = styled.div`
  width: 100%;

  .title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: ${({ theme: { colors } }) => colors.secundary};
    font-weight: 900;
  }

  @media (max-width: 700px) {
    margin: 0rem 0;

    .title {
      font-size: 2rem;
    }
  }
`;

export const RestaurantInfomationItem = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;

  span {
    font-size: 1.75rem;
    font-weight: 900;
    margin-right: 0.5rem;
    color: ${({ theme: { colors } }) => colors.text};
  }

  .star {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.75rem;
    transition: all 0.2s linear;
  }
  .star:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 700px) {
    margin: 1rem 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    span {
      font-size: 1.5rem;
    }
  }
`;

export const RestaurantWrapper = styled.div`
  width: 100%;
  margin: 5rem 0rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

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

export const InformationContainer = styled.div`
  width: 100%;
  padding: 3rem 5rem;
  @media (max-width: 700px) {
    padding: 3rem 1rem;
  }
`;

export const InformationTexts = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 3rem;

  @media (max-width: 700px) {
    text-align: justify;
  }
`;
