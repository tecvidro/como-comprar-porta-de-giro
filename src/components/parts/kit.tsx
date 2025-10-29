type KitProps = {
  title: string
}

export function Kit({ title }: KitProps) {
  return (
    <div className="bg-gray-100 p-4 rounded flex flex-col items-center gap-4">
      <h3 className="font-bold text-orange">
        {title}
      </h3>
      <img src="images/kits/desenho-kit-standard.png" width={349} height={742} />
    </div>
  )
}
