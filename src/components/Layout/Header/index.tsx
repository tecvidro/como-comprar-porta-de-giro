import { Logo } from "../Logo"

type HeaderProps = {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-dark-blue py-6 flex justify-center">
      <div className="w-full max-w-480 px-6 flex justify-between items-center gap-8">
        <Logo />
        <h1 className="font-bold text-gray-100 text-right">{title}</h1>
      </div>
    </header>
  )
}
