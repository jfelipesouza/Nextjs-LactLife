import styled from "styled-components";

export const CommunityContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 7.9rem 5rem 0 5rem;
  margin-bottom: 3rem;
`;

export const CommunityTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.secundary};
`;
