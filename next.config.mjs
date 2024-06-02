/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kjeffjntaocztsemhfgj.supabase.co',

        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
