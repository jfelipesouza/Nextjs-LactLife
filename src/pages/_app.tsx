import React from 'react'
import { AppProps } from 'next/app'
import { GlobalStyles } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { ligthTheme } from '@/styles/themes'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
