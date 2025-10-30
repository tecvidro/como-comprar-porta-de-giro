import { Image } from "@/src/types/product"
import { Equal, Plus } from "lucide-react"

type KitProps = {
  title: string
  images: Image[]
}

export function Kit({ title, images }: KitProps) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <div className="bg-gray-100 p-4 col-span-5 rounded flex flex-col items-center gap-4">
        <h3 className="font-bold text-orange">
          {title}
        </h3>
        <img src="images/kits/desenho-kit-standard.png" width={349} height={742} />
      </div>
      <div className="flex col-span-7 w-full justify-between items-center">
        {!!images && images.map((image) => (
          <div key={image.alt} className="flex items-center justify-around w-full">
            <Signal type={image.signal} />
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div >
  )
}

function Signal({ type = 'plus' }: { type?: 'equal' | 'plus' }) {
  return (
    <>
      {type == 'plus' && <Plus />}
      {type == 'equal' && <Equal />}
    </>
  )
}
