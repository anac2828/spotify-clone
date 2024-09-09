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
  env: {
    STRIPE_PUBLIC_KEY:
      'pk_test_51PAKLvB7VKHUT2sFIlmLvPvKgJ4cVNVadBaDvvl1xDqt0l8RD1KaZclaX8tJgCeLXKUPAGDM2YarKQETBIlDGYbW00hWQTpA7k',
  },
};

export default nextConfig;
