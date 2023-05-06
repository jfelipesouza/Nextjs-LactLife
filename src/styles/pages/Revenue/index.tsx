import styled from "styled-components";
import Link from "next/link";

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
`;

export const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 ${({ theme }) => theme.padding.rootPadding};
  margin-bottom: 9rem;
  @media screen and (max-width: 750px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 350px) {
    padding: 0 1rem;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0;
  justify-content: space-between;
`;

export const CategoriesContainer = styled.div``;

export const RevenuesContent = styled.main`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  .backgroundGray {
    width: auto;
    min-width: 300px;
    height: 300px;
    border-radius: 1rem;
    display: flex;
    margin-right: 2rem;
    position: relative;
    background-color: ${({ theme }) => theme.colors.gray};
    margin: 0;
  }

  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1060px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 750px) {
    .backgroundGray {
      width: 100%;
      min-width: 300px;
    }
  }
`;

export const SearchActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ActionButton = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 0.25rem;

  .icon {
    font-size: 1.5rem;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .icon-filter {
    display: none;
    font-size: 2rem;
  }
  @media screen and (max-width: 1060px) {
    .icon {
      display: none;
    }
    .icon-filter {
      display: flex;
    }
  }
`;
