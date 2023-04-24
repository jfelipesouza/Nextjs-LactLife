import styled from 'styled-components'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.secundary};
  position: absolute;
  width: 100vw;
  top: 0;
`

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.padding.headerPaddingVertical}
    ${({ theme }) => theme.padding.rootPadding};

  #hamburgue {
    display: none;
  }

  @media screen and (max-width: 1060px) {
    #hamburgue {
      display: flex;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 1.5rem;
  }
`
export const LogoImage = styled.img`
  height: 60px;
  @media screen and (max-width: 450px) {
    height: 50px;
  }
`

export const ListLinks = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 3;
  height: 3.125rem;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const Links = styled(Link)`
  color: ${({ theme }) => theme.colors.headerLinkText};
  font-size: ${({ theme }) => theme.fontSize.headerLinks};
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

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  height: 3.125rem;
  justify-content: flex-end;

  @media screen and (min-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 1200px) {
    width: 350px;
    justify-content: center;
  }
  @media screen and (max-width: 770px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  height: 3.125rem;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 2rem;
  font-size: 1.125rem;

  ::placeholder {
    font-weight: 700;
  }

  :select {
    border: all 2s ${({ theme }) => theme.colors.primary};
  }
`

export const SearchButton = styled.div`
  position: absolute;
  top: 0.85rem;
  right: 0.5rem;

  #icon {
    border-radius: 20rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  :active {
    #icon {
      opacity: 0.2;
    }
  }
`

export const MenuHamburgue = styled(MdMenu)`
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
`
