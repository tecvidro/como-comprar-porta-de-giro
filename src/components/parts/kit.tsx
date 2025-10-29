type KitProps = {
  title: string
}

export function Kit({ title }: KitProps) {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h3 className="font-bold text-orange">
        {title}
      </h3>
    </div>
  )
}
