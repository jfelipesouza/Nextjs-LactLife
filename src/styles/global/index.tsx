import { createGlobalStyle } from "styled-components";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const GlobalStyles = createGlobalStyle`

  :root{
    font-size:16px;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${lato.style.fontFamily};
    font-weight:${lato.style.fontWeight};
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  body{
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    scrollbar-width: auto;
    scrollbar-color:${({ theme }) => theme.colors.contrast} #494646;

    ::-webkit-scrollbar {
      width: 0.5rem;
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
`;
