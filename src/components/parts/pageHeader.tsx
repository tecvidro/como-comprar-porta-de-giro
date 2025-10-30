import { Heading } from "../ui/Heading"

type PageHeaderProps = {
  title: string
  subTitle?: string
}

export function PageHeader({ title, subTitle }: PageHeaderProps) {
  return (
    <header>
      <Heading>{title}</Heading>
      {!!subTitle && <h2><b>Comprar:</b> {subTitle}</h2>}
    </header>
  )
}
