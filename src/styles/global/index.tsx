import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root{
    font-size:16px;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fontFamily.lato};
  }
  body{
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden; 
    scrollbar-width: auto;
    scrollbar-color:${({ theme }) => theme.colors.contrast} #494646;
 
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: #494646;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.contrast};
      border-radius: 10px;
      border: 0px solid #ffffff;
    }
  }

  a{
    text-decoration: none;
  }
  li,ul{
    text-decoration: none;
    list-style: none;
  }
`
