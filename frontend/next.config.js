/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ここに他のカスタム Next.js 設定を追加
};

const withVideos = require('next-videos');

module.exports = withVideos(nextConfig);
