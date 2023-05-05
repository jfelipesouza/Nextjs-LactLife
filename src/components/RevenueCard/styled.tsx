import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const Card = styled(motion.div)`
  width: calc(50vw - 5rem);
  min-width: 600px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  margin-right: 2rem;
  position: relative;
  background-color: #fff;

  @media screen and (max-width: 750px) {
    width: calc(80vw);
    min-width: calc(80vw - 3rem);
    border-radius: 1rem;
  }
  @media screen and (max-width: 350px) {
    width: 300px;
  }
`;

export const CardImageContainer = styled.div`
  width: 40%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 750px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  pointer-events: none;
  object-fit: cover;

  @media screen and (max-width: 750px) {
    border-radius: 1rem;
  }
`;
export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 0rem 2rem;

  .foodName {
    color: black;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  .link {
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.secundary};
    width: max-content;
    font-size: 1rem;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    align-self: center;
  }
  .link:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    justify-content: flex-end;
    padding: 1rem 0 2rem 0rem;
    padding-bottom: 1.5rem;
    align-items: flex-start;
    z-index: 2;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
    border-radius: 1rem;
    .foodName {
      color: white;
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0rem 1rem;
    padding-bottom: 2rem;
    .foodName {
      margin-left: 0;
    }
  }
`;
