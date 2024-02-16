"use client";

import { useRouter } from "next/navigation";
import Button from "./components/elements/buttons/Button";
import { supabase } from "./features/lib/supabaseClient";

//https://zenn.dev/sc30gsw/articles/56e07707a4f55b

export default function Home() {
  const router = useRouter();

  const handleBlogPost = async () => {
    const { data } = await supabase.auth.getSession();
    // console.log(data);
    if (data.session) {
      router.push("/post/createPost");
    } else {
      router.push("/auth/login");
    }
  };

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
        <Button
          colorClass="bg-slate-500 hover:bg-slate-700"
          label="ログアウト"
          onClick={async () => await supabase.auth.signOut()}
        />
      </div>

      <Button
        label="ブログ投稿"
        colorClass="bg-green-500 hover:bg-green-700 mt-4"
        onClick={handleBlogPost}
      />
    </main>
  );
}
