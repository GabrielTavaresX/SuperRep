import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const Header = styled.header`
 border-bottom: 0.8rem solid var(--black);
    display: flex;
    height: 5rem;
    background-color: black;
   align-items: center;
     img{
      align-items: center;
      height: 3.5rem;
     }
     #txtBusca {
   float: left;
    background-color: white;
    padding-left: 5px;
    font-style: italic;
    font-size: 18px;
    border-radius: 200px;
    height: 105%;
    width: 725%;
    align-items: center;
    display: flex;
}
     
     `
     export const NavBar = styled.nav`
     display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        font-size: large;
        text-decoration: none;
        color: ${colors.white };
      }
    }
    li:hover {
      background-color: ${colors.third};
    }
  }


        
     `