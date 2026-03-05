import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 - RealFakePhotos 复刻",
  description: "RealFakePhotos 复刻版的隐私政策。我们重视您的隐私，了解我们如何处理您的数据。",
};

export default function PrivacyPolicy() {
  return (
    <div className="container py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
        隐私政策
      </h1>
      <div className="prose prose-zinc">
        <p className="text-zinc-600 mb-6">最后更新日期：{new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mb-4 mt-8">1. 简介</h2>
        <p className="mb-4 text-zinc-700">
          欢迎使用 RealFakePhotos 复刻版（&ldquo;我们&rdquo;）。本隐私政策说明了当您访问我们的网站时，我们如何收集、使用和保护您的信息。
          请注意，这是一个演示项目，不涉及真实的个人数据处理或商业交易。
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">2. 我们收集的信息</h2>
        <p className="mb-4 text-zinc-700">
          由于这是一个演示项目，我们实际上不会存储您上传的照片。所有前端交互仅用于演示目的。
          但在真实场景中，可能会收集：
        </p>
        <ul className="list-disc pl-5 mb-4 text-zinc-700 space-y-2">
          <li>您上传的照片（用于生成 AI 头像）</li>
          <li>联系信息（如电子邮件地址）</li>
          <li>使用数据和 Cookies</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4 mt-8">3. 数据使用</h2>
        <p className="mb-4 text-zinc-700">
          我们使用收集的信息来提供和改进我们的服务，包括生成头像、客户支持和分析网站使用情况。
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">4. 联系我们</h2>
        <p className="mb-4 text-zinc-700">
          如果您对本隐私政策有任何疑问，请通过 GitHub 仓库联系项目维护者。
        </p>
      </div>
    </div>
  );
}
