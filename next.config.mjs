/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xnvzlntjwcqsuapztwty.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-image//**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
