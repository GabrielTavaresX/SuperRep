import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Khand', sans-serif;
    font-weight: 900;
  }
`
export const colors = {
  primary: "#2B75E2",
  secondary: "#FFC107",
  secondaryLight: "#f0dea5",
  third: "#230333",
  thirdLight: "#d9d9d9",
  black: "#000",
  white: "#fff"
}
