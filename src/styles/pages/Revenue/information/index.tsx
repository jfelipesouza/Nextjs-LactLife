import { MdDone } from 'react-icons/md'
import styled from 'styled-components'

export const MainSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: calc(100vh - 8rem);
  display: flex;
  margin-top: 7.8rem;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
  .image {
    width: 667.38px;
    height: 849.83px;
    object-fit: cover;
    border-radius: 1rem;
  }
  .informationContainer {
    display: flex;
    flex: 1;
    height: 70vh;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.secundary};

      margin-bottom: 2rem;
    }

    .ingredientsContainer {
      width: 70%;
      height: 500px;
      border: 3px solid ${({ theme }) => theme.colors.secundary};
      padding: 4rem 2rem;
      align-items: center;
      border-radius: 1rem;
      .ingredientsContent{
        f
      }
      .ingredientsTitle {
        font-size: 3rem;
        margin-bottom: 3rem;
        color: ${({ theme }) => theme.colors.primary};
      }
      .ingredient {
        font-size: 1.5rem;
      }
      .bold {
        font-size: 1.5rem;
        font-weight: 900;
      }
      .icons {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

export const Icon = styled(MdDone)`
  font-size: 2rem;
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
