import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { syncUser, addCredits } from "@/app/actions";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // 同步用户数据（如果不存在则创建）
  const user = await syncUser();
  if (!user) return <div>Error loading user</div>;

  // 获取用户生成的图片
  const userImages = await prisma.image.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-zinc-50 pt-10 pb-20">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg border border-zinc-200 shadow-sm font-medium">
              积分: <span className="text-[var(--brand)] font-bold">{user.credits}</span>
            </div>
            <form
              action={async () => {
                "use server";
                await addCredits(5);
              }}
            >
              <button className="px-4 py-2 rounded-lg bg-[var(--brand)] text-white font-semibold text-sm hover:opacity-90 transition">
                模拟充值 (+5)
              </button>
            </form>
          </div>
        </div>

        <DashboardClient credits={user.credits} userImages={userImages} />
      </div>
    </div>
  );
}
