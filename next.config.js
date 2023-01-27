/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript :{
    ignoreBuildErrors: true,
  },
  images:{ 
    unoptimized:true,
    
  },
  trailingSlash: true,

}


module.exports = nextConfig
