import { HTMLAttributes, ReactNode } from "react"

type CallToActionProps = {
  link: string
  text: string
  icon?: ReactNode
  isExternal?: boolean
} & HTMLAttributes<HTMLDivElement>

export function CallToAction({ link, text, icon, isExternal, ...props }: CallToActionProps) {
  return (
    <div {...props}>
      {!!isExternal && (
        <a href={link} target="_blank" className="group flex flex-col md:flex-row items-center gap-4 border border-green rounded-xl px-4 py-2 hover:bg-green active:bg-orange transition ">
          <div>
            {!!icon && icon}
          </div>
          <div className="font-bold text-dark-blue group-hover:text-white text-center md:text-left">
            {text}
          </div>
        </a>
      )}
    </div>
  )
}
