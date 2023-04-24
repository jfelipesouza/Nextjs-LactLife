import Header from '@/components/Header'
import React from 'react'

import { ActionLink, HeroSection } from '@/styles/pages/Revenue'

const RevenueScreen: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection>
        <img
          alt="banner"
          src={'/assets/images/revenueBanner.svg'}
          id={'banner'}
        />
        <div id={'hero-section-question'}>
          <h2 id={'subtitle-question'}>Soverte zero Lactose</h2>

          <ActionLink href={'/about'}>Clique aqui para saber +</ActionLink>
        </div>
      </HeroSection>
    </>
  )
}

export default RevenueScreen
