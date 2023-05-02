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

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secundary};
  margin-bottom: 3rem;
  font-size: 3.25rem;
  font-weight: 900;
`;

export const PreparationSection = styled.section`
  width: 100vw;
  padding: 2rem 5rem;
  min-height: 100vh;
  margin-bottom: 5rem;
`;

export const PreparationItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const PreparationStep = styled.span`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.white};
  margin-right: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 0.5rem;
`;

export const PreparationStepDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const PreparationCardContainer = styled.div`
  display: flex;
  margin-top: 4rem;
`;

export const PreparationCard = styled.div`
  padding: 1rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  margin-right: 3rem;
  .icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const PreparationCardContent = styled.div`
  font-size: 1.25rem;
`;
export const PreparationCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
`;
