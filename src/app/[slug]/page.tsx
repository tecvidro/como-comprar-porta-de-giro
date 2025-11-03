import { Metadata } from "next";
import { PageHeader } from "@/src/components/parts/PageHeader";
import { getAllProducts, getProductBySlug } from "@/src/lib/api"
import { notFound } from "next/navigation";
import { Mdx } from "@/src/components/parts/mdx";
import { Kit } from "@/src/components/parts/Kit";
import { ArrowLeft } from "lucide-react";
import { BocContainer } from "@/src/components/parts/BoxContainer";
import Link from "next/link";

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
    <div className="flex flex-col gap-4 h-full">
      <div className="block">
        <Link className="flex gap-2 bg-orange w-fit pl-1 pr-4 py-2 items-center text-white text-sm rounded md:hidden hover:bg-blue-400 active:bg-dark-blue transition" href={"/"}><ArrowLeft size={18} className="text-inherit" />Voltar</Link>
      </div>
      <BocContainer>
        <PageHeader title={page.title} subTitle={page.subtitle} />
        <Kit title="Kit Standard: Perfis + acessórios" images={page.images} />
        <Mdx source={page.content} />
      </BocContainer>
    </div>
  )
}
