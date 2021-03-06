import { createGlobalStyle } from "styled-components"

//TODO -- THIS HAS ALL BEEN COPIED WILL NEED RE-WORKED
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  `