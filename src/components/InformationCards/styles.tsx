import styled from 'styled-components'

export const Container = styled.div`
  width: 343px;
  height: 146px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  box-shadow: 1px 2px 3px #0000007f;
  padding: 1rem;
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
  font-size: 1.2rem;
`

export const Content = styled.p`
  text-align: justify;
  font-size: 1rem;
`
