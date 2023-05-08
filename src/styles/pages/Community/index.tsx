import styled from "styled-components";

export const CommunityContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 7.9rem 5rem 0 5rem;
  margin-bottom: 3rem;

  @media (max-width: 760px) {
    padding: 7.9rem 2rem 0 2rem;
  }
  @media (max-width: 500px) {
    padding: 7.9rem 1rem 0 1rem;
  }
`;

export const CommunityTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.secundary};

  @media (max-width: 760px) {
    font-size: 2.75rem;
    margin-bottom: 2rem;
  }
`;
