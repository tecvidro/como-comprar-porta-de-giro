import { BoxContainer } from "../components/parts/BoxContainer";
import { HomeInstructions } from "../components/parts/HomeInstructions";

export default function Page() {
  return (
    <BoxContainer>
      <HomeInstructions
        title="Porta de Giro Montare"
        textDesktop="Escolha o modelo no menu ao lado para detalhes de como comprar."
        textMobile="Escolha o modelo no menu abaixo para detalhes de como comprar."
      />
    </BoxContainer>
  )
}

