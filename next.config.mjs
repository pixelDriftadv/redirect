/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: 'https://youtube.com/playlist?list=PLcp1KqeP2WdnPdDipxOViW6aMkJl3XUQp',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
