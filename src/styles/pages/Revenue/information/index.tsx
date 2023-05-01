import styled from "styled-components";
import NextImage from "next/image";
import { MdCheck } from "react-icons/md";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding-top: 7.9rem;
`;

export const HeroSection = styled.section`
  width: 100vw;
  display: flex;
  min-height: calc(100vh - 7.9rem);
  padding: 2rem 5rem;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 40vw;
`;
export const Image = styled(NextImage)`
  object-fit: cover;
  border-radius: 2rem;
`;

export const InformationContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 4rem;
  gap: 2.5rem;
`;

export const FoodNameTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secundary};
`;

export const IngredientsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${({ theme }) => theme.colors.secundary};
  height: max-content;
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

export const IngredientsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const IngredientItem = styled.div`
  display: flex;
  margin-bottom: 0.1rem;
  .info:nth-child(2n) {
    margin-right: 0.5rem;
  }
  .info {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
  }
`;

export const CheckItem = styled(MdCheck)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secundary};
  margin-right: 0.5rem;
`;
