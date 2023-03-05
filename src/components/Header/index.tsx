import React from 'react'
import { Container, Links, ListLinks, NavBar } from './styles'

const Header: React.FC = () => {
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

  return (
    <Container>
      <NavBar>
        <div>Logo icone</div>
        <ListLinks>
          {bottomLinks.map(({ title, ref }) => (
            <Links href={ref}>{title}</Links>
          ))}
        </ListLinks>
        <div>Campo de login</div>
      </NavBar>
    </Container>
  )
}

export default Header
