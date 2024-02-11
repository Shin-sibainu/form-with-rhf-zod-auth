"use client";

import { useRouter } from "next/navigation";
import Button from "./components/elements/buttons/Button";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-medium mb-5">Hello RHF & Zod</h2>
      <div className="flex gap-3">
        <Button
          colorClass="bg-blue-500 hover:bg-blue-700"
          label="新規登録"
          onClick={() => router.push("/auth/signup")}
        />
        <Button
          colorClass="bg-red-500 hover:bg-red-700"
          label="ログイン"
          onClick={() => router.push("/auth/login")}
        />
      </div>
    </main>
  );
}
