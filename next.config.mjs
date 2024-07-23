/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.instagram.com/necroz.xyc/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
