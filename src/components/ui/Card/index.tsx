'use client'
import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"

type CardProps = {
  title: string
  link: string
  imageUrl: string
}

const cardVariants = cva(["flex", "flex-col", "justify-between", "items-center", "rounded-md", "gap-2", "p-4", "border border-dashed", "transition"],
  {
    variants: {
      state: {
        default: ["bg-white", "border-dark-blue", "hover:bg-orange", "hover:text-white",],
        selected: ["bg-dark-blue", "text-white", "border-orange", "pointer-events-none"]
      }
    },
    defaultVariants: {
      state: "default"
    }
  }
)

export function Card({ title, link, imageUrl }: CardProps) {

  const pathName = usePathname()
  const isCurrent = pathName === link
  const state = isCurrent ? "selected" : "default"

  return (
    <Link href={link} className={cardVariants({ state })} aria-disabled={isCurrent}>
      <img src={imageUrl} width={155} height={275} alt="title" />
      <div className="flex justify-center text-center text-sm font-bold">
        {title}
      </div>
    </Link>
  )
}
