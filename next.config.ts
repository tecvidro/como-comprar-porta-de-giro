import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // Optionally, add any other Next.js config below
}

export default withMDX(nextConfig)
