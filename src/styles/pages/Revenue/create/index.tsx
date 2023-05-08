import styled from "styled-components";

export const CreateRevenueContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-top: 7.9rem;
  padding: 2rem 2rem;
`;

export const CreateRevenueForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CreateRevenueDivision = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
  padding: 0 2rem;
  justify-content: flex-start;

  .fieldArray {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .items {
      display: flex;
      gap: 0.4rem;
      .count {
        width: min-content;
        max-width: 3rem;
      }
    }
  }
`;

export const CreateTextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const CreateTextFieldLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.25rem;
  button {
    border: none;
    color: ${({ theme }) => theme.colors.secundary};
    background-color: transparent;
    cursor: pointer;
    font-size: 1.25rem;
  }
`;

export const CreateTextFieldInput = styled.input`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: 0.3rem;
  font-size: 1.25rem;
`;
