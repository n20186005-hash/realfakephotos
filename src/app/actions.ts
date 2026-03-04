"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getUserCredits() {
  const { userId } = await auth();
  if (!userId) return 0;

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  return user?.credits || 0;
}

export async function syncUser() {
  const { userId } = await auth();
  const user = await currentUser();
  
  if (!userId || !user) return null;

  const email = user.emailAddresses[0]?.emailAddress;

  const dbUser = await prisma.user.upsert({
    where: { clerkId: userId },
    update: { email },
    create: {
      clerkId: userId,
      email: email || "",
      credits: 5, // 新用户赠送 5 积分，作为新人福利
    },
  });

  return dbUser;
}

export async function mockUploadAndGenerate(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // 1. 检查积分
  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user || user.credits < 1) {
    return { success: false, error: "积分不足，请先充值" };
  }

  // 2. 扣除积分
  await prisma.user.update({
    where: { clerkId: userId },
    data: { credits: { decrement: 1 } },
  });

  // 3. 模拟生成（实际这里应该调用 Replicate/OpenAI）
  // 这里我们只是创建一条数据库记录，并返回一个静态图片
  const mockImageUrl = `/images/image_w2048_h2048_headshot-0${Math.ceil(Math.random() * 6)}.png`;

  await prisma.image.create({
    data: {
      userId: user.id,
      url: mockImageUrl,
      status: "COMPLETED",
      prompt: "Professional headshot",
    },
  });

  revalidatePath("/dashboard");
  return { success: true, url: mockImageUrl };
}

export async function addCredits(amount: number) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  await prisma.user.update({
    where: { clerkId: userId },
    data: { credits: { increment: amount } },
  });

  revalidatePath("/dashboard");
}
