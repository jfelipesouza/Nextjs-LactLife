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

const Header: React.FC = () => {
  const { setVisible } = useContext(HeaderContext)

  const bottomLinks = [
    {
      title: 'Home',
      ref: ''
    },
    {
      title: 'Receitas',
      ref: ''
    },
    {
      title: 'Dúvidas',
      ref: ''
    },
    {
      title: 'Tenho intolerância a Lactose?',
      ref: ''
    },
    {
      title: 'Onde comer?',
      ref: ''
    }
  ]
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
            <Links href={ref}>{title}</Links>
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
