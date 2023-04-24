import Link from 'next/link'
import styled from 'styled-components'

export const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: calc(100vh - 8rem);
  display: flex;
  margin-top: 8rem;
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
    font-size: 5rem;
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
    margin-top: 6.39rem;
  }
  @media screen and (max-width: 350px) {
    #hero-section-question {
      margin-left: 1rem;
    }
    #subtitle-question {
      font-size: 1.75rem;
    }
  }
`

export const ActionLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 4rem;
  width: max-content;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;
  font-size: 1.5rem;

  @media screen and (max-width: 700px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 450px) {
    margin-top: 2rem;
    padding: 0.8rem 1rem;
    font-size: 1.125rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1rem;
  }
`
export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  #icon {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secundary};
    margin-left: 1rem;
  }

  @media screen and (max-width: 450px) {
    #icon {
      font-size: 2.25rem;
      color: ${({ theme }) => theme.colors.secundary};
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 350px) {
    #icon {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.secundary};
      margin-left: 1rem;
    }
  }
`
export const QuestionSection = styled.section`
  width: 100vw;
  padding: 2rem ${({ theme }) => theme.padding.rootPadding};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  #center {
    align-self: center;
  }

  @media screen and (max-width: 350px) {
    padding: 2rem 1rem;
  }
`

export const SectionTilte = styled.h3`
  font-size: 2rem;
  color: black;
  font-weight: 800;
  @media screen and (max-width: 450px) {
    font-size: 1.75rem;
  }
`

export const QuestionSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const RevenueSection = styled.section`
  width: 100vw;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: 350px) {
    padding: 2rem 1rem;
  }
`

export const RestaurantsSection = styled.section`
  width: 100vw;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 350px) {
    padding: 2rem 1rem;
  }
`

export const RestourantContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
