# RealFakePhotos Clone（Next.js）

这是一个**对 https://www.realfakephotos.com/** 的前端结构复刻项目：
- 单页落地页（Hero / 示例滑带 / 步骤 / 信任背书 / 评价瀑布流 / 定价卡片 / FAQ / Footer）
- Cookie 同意条（localStorage）
- 浮动聊天按钮（占位）

> 说明：本项目仅复刻 UI/信息结构与交互方式，**不包含真实 AI 生成、上传、登录、支付**。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开：<http://localhost:3000>

## 生产构建

```bash
pnpm build
pnpm start
```

## 主要文件

- `src/app/page.tsx`：页面组装
- `src/components/landing/*`：各模块组件
- `src/app/globals.css`：全局样式（白底 + 紫色强调）
- `public/images/*`：AI 生成的示例头像/hero 图（用于演示）

## 与原站对应的复刻点（简要）

- 顶部导航：锚点滚动 + CTA
- Hero：三条卖点 + 双按钮 + 右侧“自拍→职业照”示意图
- Examples：横向滚动头像带 + “100% AI generated”标
- Steps：两张大圆角卡片（Step 1 / Step 2）
- Testimonials：多列瀑布流卡片
- Pricing：3 档价格卡片，中档高亮
- FAQ：折叠问答 + 侧栏 CTA

---

Not affiliated with the original website.
