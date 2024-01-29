/** @type {import('next').NextConfig} */
const isProd = ['production'].includes(process.env.NODE_ENV);

const nextConfig = ( ) => {
  if(!isProd) {
    return [
      {
        source: '/api/:slug*',
        destination: process.env.PROXY
      }
    ]
  } else {
    return []
  }
};

export default nextConfig;
