let userConfig = undefined;
try {
  userConfig = await import("./user-next.config.mjs");
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 构建过程中忽略 ESLint 错误
  },
  typescript: {
    ignoreBuildErrors: true, // 构建过程中忽略 TypeScript 类型错误
  },
  images: {
    // unoptimized: true, // 禁用 Next.js 内置的图片优化功能
  },
  experimental: {
    webpackBuildWorker: true, // 启用 webpack 构建工作线程
    parallelServerBuildTraces: true, // 启用服务器构建追踪的并行处理
    parallelServerCompiles: true, // 启用服务器编译的并行处理
  },
  reactStrictMode: true, // 启用 React 严格模式
  swcMinify: true, // 使用 SWC 进行代码压缩而非 Terser
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === "object" &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
