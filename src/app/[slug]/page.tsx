import { Metadata } from "next";
import { PageHeader } from "@/src/components/parts/pageHeader";
import { getAllProducts, getProductBySlug } from "@/src/lib/api"
import { notFound } from "next/navigation";
import { Mdx } from "@/src/components/parts/mdx";

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
    <div>
      <PageHeader title={page.title} subTitle={page.subtitle} />
      <div>
        <Mdx code={page.content} />
      </div>
    </div>
  )
}
