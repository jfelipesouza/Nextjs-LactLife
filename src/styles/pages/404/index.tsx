import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorCode = styled.h2`
  font-size: 12rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 10rem;
  }
`;

export const ErrorDescription = styled.p`
  color: white;
  margin-bottom: 2rem;
  font-size: 3rem;
  width: 100%;
  text-align: center;

  font-weight: 700;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const ErrorLink = styled.span`
  cursor: pointer;
  font-size: 3rem;
  color: #011b35;
  position: relative;

  :after {
    content: "";
    position: absolute;
    bottom: -0.1rem;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: #011b35;
    transition: all 200ms linear;
  }

  :hover {
    :after {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;
