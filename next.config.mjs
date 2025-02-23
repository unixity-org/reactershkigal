// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false, // حالت Strict Mode را غیرفعال کرده‌اید
//   images: {
//     domains: ['example.com'], // دامنه‌هایی که تصاویر از آن‌ها بارگیری می‌شوند
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http', // یا 'https' اگر از HTTPS استفاده می‌کنید
        hostname: '185.18.214.46', // آی‌پی شما
        port: '1234', // پورت شما
        pathname: '/uploads/**', // مسیر تصاویر
      },
    ],
  },
  experimental: {
    forceDynamic: true, // فعال کردن رفتار دینامیک برای کل پروژه
  },
};

export default nextConfig;