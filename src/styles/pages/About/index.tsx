import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export const BannerContainer = styled.div`
  margin-top: calc(7.9rem);
  width: 100%;
  height: 50vh;
  position: relative;

  @media screen and (max-width: 500px) {
    margin-top: 6rem;
  }
`;

export const BannerImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const InformationSection = styled.section`
  width: 100%;
  margin: 3rem 0;
  padding: 0rem 5rem;

  @media screen and (max-width: 1100px) {
    padding: 0rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const InformationTitle = styled.h2`
  font-size: 3.5rem;
  color: ${({ theme: { colors } }) => colors.secundary};
  font-weight: 900;
  margin: 2rem 0;

  @media screen and (max-width: 585px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const InformationParagraph = styled.p`
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.text};
  text-align: justify;

  @media screen and (max-width: 500px) {
    font-size: 1.125rem;
  }
`;

export const InformationSubtitle = styled.h4`
  margin: 1rem 0;
  font-size: 1.3rem;
  font-weight: 900;

  @media screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

export const QuestionsSection = styled.section`
  width: 100vw;
  padding: 0 5rem;
  margin-top: 3rem;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
    padding: 0rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const QuestionTilte = styled.h3`
  font-size: 3rem;
  color: ${({ theme: { colors } }) => colors.secundary};
  font-weight: 900;
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    font-size: 2.3rem;
  }
`;

export const QuestionCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0px;
  margin-bottom: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-row-gap: 1rem;
  }
`;
export const QuestionCards = styled.div`
  width: auto;
  height: 200px;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme: { colors } }) => colors.gray};

  @media screen and (max-width: 950px) {
    height: 190px;
  }
`;

export const QuestionCardsTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    font-size: 1.45rem;
  }
`;

export const QuestionCardInformation = styled.p`
  font-size: 1.25rem;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const QuestionLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: ${({ theme: { colors } }) => colors.secundary};
  align-self: center;
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 0.4rem;
  text-transform: uppercase;
  font-weight: 700;
  :hover {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;
