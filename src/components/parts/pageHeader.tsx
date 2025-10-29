type PageHeaderProps = {
  title: string
  subTitle: string
}

export function PageHeader({ title, subTitle }: PageHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <h2><b>Comprar:</b> {subTitle}</h2>
    </header>
  )
}
