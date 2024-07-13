/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: 'https://youtube.com/playlist?list=PLcp1KqeP2WdnV_P4OS4SHt23gU5jRF9ts',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
