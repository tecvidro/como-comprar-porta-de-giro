import { cva, VariantProps } from "class-variance-authority"
import { HTMLAttributes, ReactNode } from "react"


const headingVariants = cva(["text-orange font-bold text-xl"],
  {
    variants: {
      align: {
        left: ["text-center md:text-left"],
        center: ["text-center"]
      }
    }
  })

type HeadingProps = {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof headingVariants>


export function Heading({ children, align = "center", ...props }: HeadingProps) {
  return (
    <h1 className={headingVariants({ align })} {...props}>{children}</h1>
  )
}
