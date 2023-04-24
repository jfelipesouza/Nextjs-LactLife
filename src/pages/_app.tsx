import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles/global'
import { ligthTheme } from '@/styles/themes'
import { HeaderContextProvider } from '@/context/navigation/header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <HeaderContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </HeaderContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
