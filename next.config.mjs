/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: 'https://pixeldrift.vercel.app/',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
