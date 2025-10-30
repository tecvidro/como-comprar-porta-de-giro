import { ArrowDown, ArrowLeft } from "lucide-react"
import { Heading } from "../ui/Heading"

type HomeInstructionsProps = {
  title: string
  textDesktop: string
  textMobile: string
}

export function HomeInstructions({ title, textDesktop, textMobile }: HomeInstructionsProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="order-1 md:order-2">
        <img className="rounded" src="images/montare-porta-de-giro-todos.jpg" alt="Montare Porta de Giro" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 order-2 md:order-1">
        <ArrowLeft className="text-orange hidden md:block" size={62} />
        <div>
          <Heading align="left">{title}</Heading>
          <p className="hidden md:block text-left">{textDesktop}</p>
          <p className="md:hidden text-center">{textMobile}</p>
        </div>
        <ArrowDown className="text-orange md:hidden" size={62} />
      </div>
    </div>
  )
}
