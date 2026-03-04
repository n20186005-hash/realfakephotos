"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { mockUploadAndGenerate } from "@/app/actions";

export default function DashboardClient({ credits, userImages }: { credits: number, userImages: any[] }) {
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    if (credits <= 0) {
      alert("积分不足，请先充值！");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      const res = await mockUploadAndGenerate(formData);
      if (!res.success) {
        alert(res.error);
      } else {
        alert("生成成功！");
      }
    } catch (e) {
      console.error(e);
      alert("发生错误");
    } finally {
      setIsUploading(false);
    }
  }, [credits]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div className="space-y-10">
      <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">上传自拍生成头像 (消耗 1 积分)</h2>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${
            isDragActive ? "border-[var(--brand)] bg-indigo-50" : "border-zinc-300 hover:border-[var(--brand)]"
          }`}
        >
          <input {...getInputProps()} />
          {isUploading ? (
            <p className="text-zinc-500 animate-pulse">正在处理 AI 生成...</p>
          ) : (
            <div className="space-y-2">
              <p className="font-medium">拖拽图片到这里，或点击上传</p>
              <p className="text-sm text-zinc-500">支持 JPG, PNG</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">我的生成记录</h2>
        {userImages.length === 0 ? (
          <p className="text-zinc-500 text-sm">暂无生成记录</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {userImages.map((img: any) => (
              <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 group">
                <Image src={img.url} alt="Generated" fill className="object-cover" />
                <a
                  href={img.url}
                  download
                  target="_blank"
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold transition"
                >
                  下载图片
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
