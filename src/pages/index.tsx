import Header from '@/components/Header'
import { InformationCards } from '@/components/InformationCards'
import {
  HeroSection,
  MainContainer,
  QuestionSection,
  Title,
  LeftContainer,
  RightContainer,
  ActionButton,
  SectionTilte,
  CardWrapper
} from '@/styles/pages/Home'
import React from 'react'

const Home: React.FC = () => {
  const questionCards = [
    {
      title: 'O que é a intolerância à lactose?',
      description:
        'A intolerância à lactose é caracterizada pela má absorção da enzima lactase, que dificulta a digestão da lactose...'
    },
    {
      title: 'O que é a intolerância à lactose?',
      description:
        'A intolerância à lactose é caracterizada pela má absorção da enzima lactase, que dificulta a digestão da lactose...'
    },
    {
      title: 'O que é a intolerância à lactose?',
      description:
        'A intolerância à lactose é caracterizada pela má absorção da enzima lactase, que dificulta a digestão da lactose...'
    },
    {
      title: 'O que é a intolerância à lactose?',
      description:
        'A intolerância à lactose é caracterizada pela má absorção da enzima lactase, que dificulta a digestão da lactose...'
    },
    {
      title: 'O que é a intolerância à lactose?',
      description:
        'A intolerância à lactose é caracterizada pela má absorção da enzima lactase, que dificulta a digestão da lactose...'
    },
    {
      title: 'O que é a intolerância à lactose?',
      description:
        'A intolerância à lactose é caracterizada pela má absorção da enzima lactase, que dificulta a digestão da lactose...'
    }
  ]
  return (
    <>
      <Header />
      <MainContainer>
        <HeroSection>
          <LeftContainer>
            <Title>Tenho Intolerância a Lactose?</Title>
            <ActionButton>Clique aqui para saber!</ActionButton>
          </LeftContainer>
          <RightContainer> asdasd </RightContainer>
        </HeroSection>
        <QuestionSection>
          <SectionTilte>Dúvidas Frequentes</SectionTilte>
          <CardWrapper>
            {questionCards.map(({ description, title }) => (
              <InformationCards title={title} description={description} />
            ))}
          </CardWrapper>
          <ActionButton style={{ alignSelf: 'center' }}>
            Carregar +
          </ActionButton>
        </QuestionSection>
      </MainContainer>
    </>
  )
}

export default Home
