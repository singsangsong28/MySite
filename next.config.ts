import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["172.30.1.15"], // 같은 Wi-Fi의 폰/PC에서 dev 서버 접속용
  images: { unoptimized: true },
};

export default nextConfig;
