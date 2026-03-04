import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RealFakePhotos Clone",
    short_name: "RealFakePhotos",
    description: "AI 职业头像生成器复刻版",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7e5fff", // 假设这是品牌色
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
