/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: 'https://youtube.com/playlist?list=PLcp1KqeP2WdkkZEpLNM4bxaEexyr2vvv9&si=SMyq_TDosUj-kM1E',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
