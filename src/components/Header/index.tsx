import React, { useState, useContext } from 'react'
import Link from 'next/link'
import {
  Container,
  Links,
  ListLinks,
  LogoImage,
  MenuHamburgue,
  NavBar,
  SearchBar,
  SearchButton,
  SearchInput
} from './styles'
import { SearchIcon } from '../icons'
import { HeaderContext } from '@/context/navigation/header'
import { bottomLinks } from '@/utils/mocks/header'

const Header: React.FC = () => {
  const { setVisible } = useContext(HeaderContext)

  const openSideBar = () => {
    setVisible(true)
  }
  return (
    <Container>
      <NavBar>
        <Link href="/">
          <LogoImage src={'/assets/images/logo.svg'} alt="logo" />
        </Link>

        <ListLinks>
          {bottomLinks.map(({ title, ref }) => (
            <Links key={title + 'link'} href={ref}>
              {title}
            </Links>
          ))}
        </ListLinks>

        <SearchBar>
          <SearchInput placeholder="Encontre a sua receita...  " />
          <SearchButton>
            <SearchIcon id={'icon'} />
          </SearchButton>
        </SearchBar>
        <MenuHamburgue id={'hamburgue'} onClick={openSideBar} />
      </NavBar>
    </Container>
  )
}

export default Header
