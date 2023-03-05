import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100vw;
`

export const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 ${({ theme }) => theme.padding.rootPadding};
  padding-top: 5rem;
  flex-direction: row;
  display: flex;
`

export const QuestionSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0 ${({ theme }) => theme.padding.rootPadding};
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
`

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const SectionTilte = styled.h3`
  font-size: 2rem;
  font-weight: 900;
`

export const Title = styled.h2`
  font-size: 4rem;
  text-align: left;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.title};
`

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  max-width: max-content;
  margin-top: 50px;
  padding: 20px 41px;
  background-color: ${({ theme }) => theme.colors.secundary};
  text-transform: uppercase;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.headerLinkText};
  box-shadow: 1px 5px 6px #0000007f;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  transition: transform 0.3s linear;

  :hover {
    transform: translateY(-5px);
    background-color: #d64f07;
  }
`

export const CardWrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.padding.rootPadding};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 36px;
`
