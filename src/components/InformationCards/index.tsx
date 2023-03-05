import React from 'react'
import { Container, Content, Title } from './styles'

interface InformationCardsProps {
  title?: string
  description?: string
}

export const InformationCards: React.FC<InformationCardsProps> = ({
  title,
  description
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{description}</Content>
    </Container>
  )
}
