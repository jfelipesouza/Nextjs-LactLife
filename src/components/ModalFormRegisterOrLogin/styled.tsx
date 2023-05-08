import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const ModalFormContainer = styled(motion.div)`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalForm = styled(motion.div)`
  width: 70%;
  min-height: 50vh;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const ModalFormHeader = styled.header`
  width: 100%;
  display: flex;

  .focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secundary};
  }
`;

type ModalFormHeaderButtonsProps = {
  visible: boolean;
};
export const ModalFormHeaderButtons = styled.div<ModalFormHeaderButtonsProps>`
  display: flex;
  flex: 1;
  padding: 1rem;
  color: ${({ theme: { colors }, visible }) =>
    visible ? colors.white : colors.secundary};
  background-color: ${({ theme: { colors }, visible }) =>
    visible ? colors.secundary : colors.white};
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid gray;
  font-size: 1.5rem;

  cursor: pointer;

  :nth-child(2n - 1) {
    border-right: 2px solid gray;
    border-top-left-radius: 1rem;
  }
  :nth-child(2n) {
    border-top-right-radius: 1rem;
  }
`;

export const ModalFormContent = styled.form`
  padding: 2rem 3rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 2rem 1rem;
  }
`;

export const ModalTextField = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModalTextFieldLabel = styled.label`
  font-size: 1.35rem;
  font-weight: 900;
  color: #222;
  align-self: flex-start;
`;

export const ModalTextFieldInput = styled.input`
  width: 100%;
  padding: 1rem 1rem;
  font-size: 1.25rem;
  color: #222;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.gray};
`;

export const ModalAction = styled.button`
  align-self: center;
  padding: 1rem 2rem;
  background-color: ${({ theme: { colors } }) => colors.secundary};
  font-size: 1.25rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 900;
  margin: 1rem 0;
  cursor: pointer;
  :hover {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const CloseIcon = styled(MdClose)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 2.5rem;

  color: ${({ theme: { colors } }) => colors.primary};
`;
