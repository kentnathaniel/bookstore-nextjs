/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {
    domains: ["db.nteimmronqaznldgopsg.supabase.co"],
  },
};

module.exports = nextConfig;
