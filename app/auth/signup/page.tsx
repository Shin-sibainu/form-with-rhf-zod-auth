"use client";

import Button from "@/app/components/elements/buttons/Button";
import InputField from "@/app/features/auth/components/InputField";
import { useSignupForm } from "@/app/features/auth/hooks/useSignupForm";
import Link from "next/link";
import React from "react";

const Signup = () => {
  const { form, onSubmit, error } = useSignupForm();

  return (
    <div className="max-w-sm mx-auto my-14">
      <h2 className="text-center font-medium text-2xl mb-4">新規登録</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField
          label="ユーザー名"
          name="username"
          register={form.register}
          type="text"
        />
        <p className="text-red-500">
          {form.formState.errors.username?.message}
        </p>
        <InputField
          label="メールアドレス"
          name="email"
          register={form.register}
          type="text"
        />
        <p className="text-red-500">{form.formState.errors.email?.message}</p>
        <InputField
          label="パスワード"
          name="password"
          register={form.register}
          type="password"
        />
        <p className="text-red-500">
          {form.formState.errors.password?.message}
        </p>
        <div className="mt-4">
          <Button
            colorClass="bg-blue-500 hover:bg-blue-700"
            label="新規登録"
            type="submit"
          />
        </div>
      </form>

      <Link href="/auth/login" className="mt-4 block text-center text-blue-400">
        すでに登録済みの方はこちら
      </Link>
    </div>
  );
};

export default Signup;
