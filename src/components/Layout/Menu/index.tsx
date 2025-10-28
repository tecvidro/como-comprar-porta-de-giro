import Link from "next/link";

type Model = {
  name: string;
  imageUrl: string;
  id: number;
  link: string
};

type MenuProps = {
  pageTitle: string;
  models: Model[];
};

export function Menu({ pageTitle, models }: MenuProps) {
  return (
    <nav className="p-4 flex flex-col">
      <h2 className="text-orange font-bold">{pageTitle}</h2>
      <div>
        {!!models && models.map((item) => (
          <div key={item.id}>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  )
}
