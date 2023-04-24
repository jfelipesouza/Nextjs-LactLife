import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Card = styled(motion.div)`
  width: 50vw;
  min-width: 600px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  margin-right: 2rem;
  position: relative;
  background-color: #fff;

  @media screen and (max-width: 750px) {
    width: calc(80vw - 2rem);
    min-width: calc(80vw - 2rem);
  }
  @media screen and (max-width: 350px) {
    width: 300px;
  }
`
export const CardImage = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  pointer-events: none;

  @media screen and (max-width: 750px) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    z-index: 1;
  }
`
export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 0rem 2rem;

  .foodName {
    color: black;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 2rem;
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

  @media screen and (max-width: 750px) {
    width: 100%;
    justify-content: flex-end;
    padding: 1rem 0 2rem 1rem;
    padding-bottom: 1.5rem;
    z-index: 9;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);

    .foodName {
      color: white;
      font-size: 1.5rem;
    }
  }
`
