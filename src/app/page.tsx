import { HomeInstructions } from "../components/parts/homeInstructions";

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-between text-center bg-white rounded-lg border-dashed border-orange border p-4" >
      <HomeInstructions
        title="Porta de Giro Montare"
        textDesktop="Escolha o modelo no menu ao lado para detalhes de como comprar."
        textMobile="Escolha o modelo no menu abaixo para detalhes de como comprar."
      />
    </div>
  )
}

