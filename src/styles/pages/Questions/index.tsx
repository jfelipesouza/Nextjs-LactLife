import Link from "next/link";
import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export const HeroSection = styled.div`
  position: relative;
  width: 100vw;
  min-height: calc(100vh - 8rem);
  display: flex;
  margin-top: 7.9rem;
  align-items: center;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);

  #banner {
    position: absolute;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    top: 0;
  }

  #hero-section-question {
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
  }
  #subtitle-question {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.white};
    font-size: 4rem;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    #subtitle-question {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 700px) {
    #hero-section-question {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    #subtitle-question {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 500px) {
    min-height: calc(50vh - 5rem);
    #subtitle-question {
      font-size: 2.25rem;
    }
  }

  @media screen and (max-width: 450px) {
    margin-top: 6.3rem;
  }
  @media screen and (max-width: 350px) {
    #hero-section-question {
      margin-left: 1rem;
    }
    #subtitle-question {
      font-size: 1.75rem;
    }
  }
`;

export const ActionLink = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  background-color: ${({ theme: { colors } }) => colors.secundary};
  width: max-content;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }

  @media screen and (max-width: 450px) {
    font-size: 1.25rem;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 350px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const QuestionsSection = styled.section`
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme: { colors } }) => colors.secundary};
  font-weight: 700;
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const QuestionItem = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.gray};
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const QuestionItemTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 900;
`;

export const QuestionItemDescription = styled.p`
  font-size: 1.125rem;
`;
