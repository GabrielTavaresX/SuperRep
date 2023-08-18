import * as S from "./style"
import lupola from "../../assets/lupa2.png"
 export function Header(){
   return(
    <S.Header>
      <img src={lupola} alt="Lupola" />
       <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Buscar..." />

        </div>
       <S.NavBar>
       <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          </ul>
       </S.NavBar>
        
    </S.Header>
   )

 }
 