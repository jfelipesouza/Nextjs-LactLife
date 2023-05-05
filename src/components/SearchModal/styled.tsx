import { motion } from "framer-motion";
import { MdClose, MdSearch } from "react-icons/md";
import styled from "styled-components";

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled(motion.div)`
  position: relative;
  min-width: 70vw;
  min-height: max-content;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem 2rem 1rem;
  color: ${({ theme: { colors } }) => colors.primary};
  gap: 1rem;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const SearchTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.9rem 4.5rem 0.9rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  background-color: ${({ theme: { colors } }) => colors.gray};

  :focus {
    outline: 0;
  }
`;

export const SearchParagraph = styled.p`
  font-size: 1.25rem;
`;

export const SearchButton = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 0 1rem;
  background-color: ${({ theme: { colors } }) => colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
  :hover,
  :active {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const SearchIcon = styled(MdSearch)`
  font-size: 2rem;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const CloseIcon = styled(MdClose)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 2.5rem;

  color: ${({ theme: { colors } }) => colors.primary};
`;

export const SearchFilterButtonContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    gap: 0.5rem 1rem;
  }
`;
