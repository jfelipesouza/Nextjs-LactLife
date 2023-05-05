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
  padding: 5rem 5rem;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 3rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 3rem 1rem;
    align-items: center;
    min-height: 100vh;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 40vw;

  @media screen and (max-width: 1150px) {
    height: 40vw;
    width: 100%;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 500px) {
    height: 50vh;
  }
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

  @media screen and (max-width: 1150px) {
    width: 100%;
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 2rem;
    padding: 0;
  }
`;

export const FoodNameTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secundary};

  @media screen and (max-width: 700px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const IngredientsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${({ theme }) => theme.colors.secundary};
  height: max-content;
  border-radius: 1rem;
  padding: 1rem 2rem;

  @media screen and (max-width: 500px) {
    padding: 1rem 1rem;
  }
`;

export const IngredientsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const IngredientItem = styled.div`
  display: flex;
  margin-bottom: 0.1rem;
  align-items: center;

  .info:nth-child(2n) {
    margin: 0 0.5rem;
  }
  .info {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    .info:nth-child(2n) {
      font-size: 1.25rem;
    }
    .info {
      font-size: 1rem;
      word-wrap: keep-all;
    }
    margin-bottom: 0.4rem;
  }
`;

export const CheckItem = styled(MdCheck)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secundary};
`;

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secundary};
  margin-bottom: 3rem;
  font-size: 3.25rem;
  font-weight: 900;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const PreparationSection = styled.section`
  width: 100vw;
  padding: 2rem 5rem;
  min-height: 100vh;
  margin-bottom: 5rem;

  @media screen and (max-width: 1150px) {
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }
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
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const PreparationCardContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    margin-top: 2rem;
  }
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

  @media screen and (max-width: 500px) {
    padding: 0.5rem 1rem;
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

export const RevenueSections = styled.section`
  width: 100vw;
  background: ${({ theme }) => theme.colors.gray};
  padding: 3rem 0rem 3rem ${({ theme }) => theme.padding.rootPadding};

  @media screen and (max-width: 1150px) {
    padding: 2rem 0 2rem 2rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;
