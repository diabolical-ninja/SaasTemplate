import type { NextConfig } from 'next'
import nextMdx from '@next/mdx' // Use standard TS import

// Define the MDX plugin configuration function
const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {},
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
