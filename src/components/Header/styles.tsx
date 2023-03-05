import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.secundary};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 2px 3px 5px #0000007f;
`

export const NavBar = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 ${({ theme }) => theme.padding.rootPadding};
`

export const ListLinks = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`

export const Links = styled(Link)`
  color: ${({ theme }) => theme.colors.headerLinkText};
  font-size: ${({ theme }) => theme.fontSize.md};
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.contrast};
    margin-top: ${({ theme }) => theme.padding.md};
    transition: all 0.3s linear;
    border-radius: 1rem;
  }
  :hover {
    ::after {
      width: 100%;
    }
  }
`
