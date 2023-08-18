import * as S from './styles'
import BatMano from "../../assets/Screenshot_1 2.png"


export function List() {
  return (
    <>
      <S.Section>
        <img src={BatMano} alt="Batmano" />
      </S.Section>
      <S.Section>
        <h1>
        Batman- A morte da familia 
        <br/>
        Sinopse:
        </h1>

        <p>
        O Coringa retornou, agora transformado em algo ainda mais perigoso do que qualquer uma de suas encarnações passadas. Desta vez, porém, parece que o Cavaleiro das Trevas não é o alvo direto do vilão, mas sim todos aqueles que o herói chama ou já chamou de “família”! Comissário Gordon, Alfred, Batgirl, Robin, Capuz Vermelho… todos estão prestes a se tornar alvos de um Palhaço do Crime mais imprevisível, impiedoso e psicótico do que nunca. Conseguirá o Batman deter o ataque mais mortal de seu mais perturbado arquirrival? Ou a revelação de um segredo antigo entre os dois destruirá tudo que o Morcego mais ama?.
        </p>
      </S.Section>
    </>
  )
}
