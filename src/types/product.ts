export type Image = {
  alt: string
  width: number
  height: number
  src: string
  signal?: "plus" | "equal"
}

export type ProductType = {
  title: string
  subtitle: string
  slug: string
  featuredImage: string
  id: number
  images: Image[]
  content: string
}
