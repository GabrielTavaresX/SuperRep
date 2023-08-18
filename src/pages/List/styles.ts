import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"
export const Section = styled.section`
  width: 40%;
  margin: 0 auto;
  img {
    height: 80%;
    width: 60%;
    padding-left: 4.5rem;
    padding-top: 4.5rem;
  }
 p{
  align-items: center;
  font-size: x-large;
  padding-right: 5rem;
  font-style:italic;
  color: ${colors.black};
  
 }
 h1{
  font-size: xx-large;
  font-style: oblique;
  padding-top: 7rem;
  
 }

 @media(max-width: 1160px){
  img{
    width: 80%;
    height: 70%;
  };
}

  @media(max-width: 910px){
  img{
    width: 85%;
    height: 80%;
  }
  p{
    font-size: medium;
  }  
  }

  @media(max-width: 660px){
  img{
    width: 85%;
    height: 50%;
  }
  flex-direction: column;
  p{
    font-size: smaller;
  }  
  }
  `
