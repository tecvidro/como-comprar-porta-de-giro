type PageHeaderProps = {
  title: string
  subTitle: string
}

export function PageHeader({ title, subTitle }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-orange font-bold text-xl">{title}</h1>
      <h2><b>Comprar:</b> {subTitle}</h2>
    </header>
  )
}
