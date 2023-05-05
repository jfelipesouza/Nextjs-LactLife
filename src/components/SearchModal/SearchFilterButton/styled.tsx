import styled from "styled-components";

export const Button = styled.span<{ focus: boolean }>`
  padding: 0.5rem;
  background-color: ${({ theme: { colors }, focus }) =>
    focus ? colors.secundary : colors.gray};
  border-radius: 0.3rem;
  font-size: 1.125rem;
  color: ${({ theme: { colors }, focus }) =>
    focus ? colors.white : colors.secundary};
`;
