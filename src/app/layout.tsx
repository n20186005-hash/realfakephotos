import { ClerkProvider } from "@clerk/nextjs";
import { zhCN } from "@clerk/localizations";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "RealFakePhotos 复刻 - #1 AI 职业头像生成器",
    template: "%s | RealFakePhotos 复刻",
  },
  description: "无需摄影棚，3分钟内生成专业级 AI 职业头像。上传自拍，获取适合 LinkedIn、简历和公司官网的完美头像。体验 AI 摄影师的魅力。",
  keywords: ["AI头像", "职业照", "LinkedIn头像", "AI生成器", "商务摄影", "个人形象照", "RealFakePhotos"],
  authors: [{ name: "RealFakePhotos Clone" }],
  creator: "RealFakePhotos Clone Team",
  publisher: "RealFakePhotos Clone",
  metadataBase: new URL("https://realfakephotos-clone.example.com"), // 请替换为实际部署域名
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RealFakePhotos 复刻 - #1 AI 职业头像生成器",
    description: "无需摄影棚，3分钟内生成专业级 AI 职业头像。上传自拍，获取适合 LinkedIn、简历和公司官网的完美头像。",
    url: "https://realfakephotos-clone.example.com",
    siteName: "RealFakePhotos 复刻",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/images/hero-collage.png", // 确保此图片存在
        width: 1200,
        height: 630,
        alt: "RealFakePhotos AI 头像示例",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RealFakePhotos 复刻 - AI 职业头像生成器",
    description: "3分钟生成专业 LinkedIn 头像。无需摄影师，AI 帮您搞定。",
    images: ["/images/hero-collage.png"],
    creator: "@realfakephotos_clone",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RealFakePhotos Clone",
    "applicationCategory": "PhotographyApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "9.99",
      "priceCurrency": "EUR"
    },
    "description": "使用 AI 技术在几分钟内生成专业职业头像。",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "21342"
    }
  };

  return (
    <ClerkProvider localization={zhCN}>
      <html lang="zh-CN" className={`${display.variable} ${body.variable}`}>
        <body className="antialiased">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
