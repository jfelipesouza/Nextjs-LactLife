import React from 'react'
import { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@/styles/global'
import { ligthTheme } from '@/styles/themes'
import { HeaderContextProvider } from '@/context/navigation/header'
import { Sidebar } from '../components/Sidebar'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ligthTheme}>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <HeaderContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <Sidebar />
      </HeaderContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
