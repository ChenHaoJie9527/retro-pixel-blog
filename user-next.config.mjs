const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 这里可以添加用户自定义的 Next.js 配置
  // 例如：
  // images: {
  //   domains: ['example.com'],
  // },
  // 或者其他任何 Next.js 支持的配置选项
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/": path.resolve(__dirname, "./*"),
    };
    return config;
  },
  // 这里可以添加用户自定义的环境变量
  // 例如：
  // env: {
  //   API_URL: process.env.API_URL,
  // },
  // 重写路由
  async rewrites() {
    // return [
    //   {
    //     source: "/",
    //     destination: "/index",
    //   },
    // ];
  },
  distDir: "dist",
};

export default nextConfig;
