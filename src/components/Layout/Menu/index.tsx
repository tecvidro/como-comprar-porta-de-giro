import { ProductType } from "@/src/types/product";
import { Card } from "../../ui/Card";

type MenuProps = {
  pageTitle: string;
  models: ProductType[];
};

export function Menu({ pageTitle, models }: MenuProps) {
  return (
    <nav className="pt-4 px-4 flex flex-col gap-4 @container">
      <h2 className="text-orange font-bold">{pageTitle}</h2>
      <div className="grid @2xs:grid-cols-2 @md:grid-cols-3 gap-2">
        {!!models && models.map((item) => (
          <Card key={item.id} title={item.title} link={`/${item.slug}`} imageUrl={`/images/${item.featuredImage}`} />
        ))}
      </div>
    </nav>
  )
}
