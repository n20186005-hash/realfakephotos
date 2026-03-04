import { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务条款 - RealFakePhotos 复刻",
  description: "RealFakePhotos 复刻版的服务条款。使用本网站即表示您同意这些条款。",
};

export default function TermsOfService() {
  return (
    <div className="container py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
        服务条款
      </h1>
      <div className="prose prose-zinc">
        <p className="text-zinc-600 mb-6">最后更新日期：{new Date().toLocaleDateString()}</p>
        
        <h2 className="text-xl font-semibold mb-4 mt-8">1. 接受条款</h2>
        <p className="mb-4 text-zinc-700">
          访问和使用 RealFakePhotos 复刻版网站，即表示您接受并同意受本协议条款和条件的约束。
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">2. 演示免责声明</h2>
        <p className="mb-4 text-zinc-700">
          本网站是一个技术演示（Clone）项目。它不提供真实的 AI 头像生成服务。
          任何支付按钮或上传功能仅用于展示 UI/UX 流程，不会产生实际扣费或后台处理。
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">3. 知识产权</h2>
        <p className="mb-4 text-zinc-700">
          本网站的设计和代码仅供学习交流。原网站 RealFakePhotos 的品牌和资产归原作者所有。
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">4. 修改</h2>
        <p className="mb-4 text-zinc-700">
          我们保留随时修改这些条款的权利。修改后的条款一经发布即生效。
        </p>
      </div>
    </div>
  );
}
