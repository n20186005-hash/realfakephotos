import Image from "next/image";

const items = [
  {
    name: "Daniel Dippold",
    title: "Founder & Investor",
    quote:
      "不想耗时拍摄？用 AI 一键生成职业照，超省事。",
    img: "/images/image_w2048_h2048_headshot-05.png",
  },
  {
    name: "Jerome Mercier",
    title: "CEO",
    quote: "我们给团队统一生成头像，风格一致，交付很快。",
    img: "/images/image_w2048_h2048_headshot-03.png",
  },
  {
    name: "Gonca Yılmaz",
    title: "Applied Scientist",
    quote: "几分钟下单，几个小时后就能拿到一组可用的头像。",
    img: "/images/image_w2048_h2048_headshot-02.png",
  },
  {
    name: "Leon Marti",
    title: "Founder",
    quote: "从沙发上搞定 LinkedIn 头像，这体验挺离谱（但好用）。",
    img: "/images/image_w2048_h2048_headshot-06.png",
  },
  {
    name: "Donna Mägi",
    title: "Software Engineer",
    quote: "更新 Slack / 简历头像变得特别轻松。",
    img: "/images/image_w2048_h2048_headshot-01.png",
  },
  {
    name: "John Schanbacher",
    title: "Value PE",
    quote: "比去摄影棚便宜太多，而且看起来更像‘我最好的版本’。",
    img: "/images/image_w2048_h2048_headshot-04.png",
  },
];

function Card({
  name,
  title,
  quote,
  img,
}: {
  name: string;
  title: string;
  quote: string;
  img: string;
}) {
  return (
    <div className="rounded-[22px] border border-[var(--border)] bg-white overflow-hidden" style={{ boxShadow: "0 10px 30px rgba(0,0,0,.06)" }}>
      <div className="aspect-[4/3] relative">
        <Image src={img} alt={`${name} 头像示例`} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              {name}
            </p>
            <p className="text-sm text-zinc-500">{title}</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-lg border border-[var(--border)]">AI</span>
        </div>
        <p className="mt-3 text-sm text-zinc-700 leading-relaxed">“{quote}”</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            用户评价（瀑布流复刻）
          </h2>
          <div className="hidden sm:flex items-center gap-1 text-sm text-zinc-500">
            <span className="font-semibold text-zinc-700">★★★★★</span>
            <span>Trusted by 21,342+ customers</span>
          </div>
        </div>

        <div className="mt-7 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((it) => (
            <div key={it.name} className="break-inside-avoid mb-5">
              <Card {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
