import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  box-shadow: 1px 2px 3px #0000007f;
  padding: 2rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    transform: translateY(-5px);
    box-shadow: 2px 6px 9px #0000007f;
  }
`

export const Title = styled.h3`
  margin-bottom: 1rem;
  font-weight: 800;
  font-size: 1.5rem;
  @media screen and (max-width: 450px) {
    font-size: 1.3rem;
  }
`

export const Content = styled.p`
  font-size: 1.25rem;
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 2; // Quantidade de linhas
  -webkit-box-orient: vertical;

  @media screen and (max-width: 450px) {
    font-size: 1.125rem;
  }
`
