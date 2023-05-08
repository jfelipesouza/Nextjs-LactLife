import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 60vh;
  border-radius: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ChatHeader = styled.header`
  display: flex;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.secundary};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const ChatMessagesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  position: relative;
  padding: 0.5rem 2rem;
`;

export const ChatFootter = styled.form`
  display: flex;
  align-items: center;
  padding: 0rem 2rem;
  padding-bottom: 1rem;
  gap: 1rem;
`;

export const ChatMessageInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
`;

export const ChatMessageItem = styled.div<{ invert: boolean }>`
  display: flex;

  flex-direction: column;
  gap: 0.5rem;
  align-items: ${({ invert }) => (invert ? "flex-end" : "flex-start")};
  margin: 0.5rem 0;
`;
export const ChatMessageItemAuthor = styled.label`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.4;
`;

export const ChatMessageItemText = styled.p<{ invert: boolean }>`
  padding: ${({ invert }) =>
    `0.5rem ${invert ? 1 : 2}rem 0.5rem ${invert ? 2 : 1}rem`};
  width: max-content;
  border-radius: 0.4rem;
  max-width: 50%;
  background-color: ${({ theme }) => theme.colors.grayHue};
  font-size: 1.25rem;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const ChatSendMessageButton = styled.button`
  display: flex;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secundary};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .icon {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
  }
`;
