import { Metadata } from "next";
import { PageHeader } from "@/src/components/parts/pageHeader";
import { getAllProducts, getProductBySlug } from "@/src/lib/api"
import { notFound } from "next/navigation";
import { Mdx } from "@/src/components/parts/mdx";
import { Kit } from "@/src/components/parts/kit";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getProductBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Como comprar a Porta de Giro Montare - Tec`;

  return {
    title,
    // openGraph: {
    //   title,
    //   images: [page.ogImage.url],
    // },
  };
}

export async function generateStaticParams() {
  const posts = getAllProducts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page(props: Params) {
  const params = await props.params
  const page = getProductBySlug(params.slug)

  if (!page) {
    return notFound();
  }

  return (
    <div className="h-full flex flex-col justify-between text-center bg-white rounded-lg border-dashed border-orange border p-4">
      <PageHeader title={page.title} subTitle={page.subtitle} />
      <Kit title="Kit Standard: Perfis + acessórios" images={page.images} />
      <Mdx source={page.content} />
    </div>
  )
}
