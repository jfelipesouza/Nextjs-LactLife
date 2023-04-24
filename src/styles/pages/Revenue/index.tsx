import Link from 'next/link'
import styled from 'styled-components'

export const HeroSection = styled.div`
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
    width: 90%;
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

export const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 2rem;
`
export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0;
`

export const CategoryList = styled.li`
  display: flex;

  ul {
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.secundary};
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.grayHue};
    }
  }
  .focus {
    background-color: ${({ theme }) => theme.colors.secundary};
    color: ${({ theme }) => theme.colors.white};
    :hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const RevenuesContent = styled.main`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1060px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 750px) {
    align-content: center;
    justify-items: center;
  }
`

export const Card = styled.div`
  width: auto;
  min-width: 600px;
  height: 300px;
  border-radius: 1rem;
  display: flex;
  margin-right: 2rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: 750px) {
    width: 90vw;
    min-width: 300px;
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
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`
