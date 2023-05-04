import styled from "styled-components";

type ContainerProps = {
  focus: boolean;
};

export const Container = styled.div<ContainerProps>`
  padding: 1rem 1rem;
  background-color: ${({ theme: { colors }, focus }) =>
    focus ? colors.secundary : colors.gray};
  border-radius: 0.2rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme: { colors }, focus }) =>
    focus ? colors.white : colors.secundary};

  transition: all 0.25s ease-in-out;
`;
