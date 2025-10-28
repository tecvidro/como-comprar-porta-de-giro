import { Logo } from "../Logo"

type HeaderProps = {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-dark-blue p-6 flex justify-between items-center gap-8">
      <Logo />
      <h1 className="font-bold text-gray-100 text-right">{title}</h1>
    </header>
  )
}
