"use client";

import Button from "@/app/components/elements/buttons/Button";
import InputField from "@/app/features/auth/components/InputField";
import { signupFormSchema } from "@/app/features/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-sm mx-auto my-14">
      <h2 className="text-center font-medium text-2xl mb-4">新規登録</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="ユーザー名"
          name="username"
          register={register}
          type="text"
        />
        <p className="text-red-500">{errors.username?.message}</p>
        <InputField
          label="メールアドレス"
          name="email"
          register={register}
          type="text"
        />
        <InputField
          label="パスワード"
          name="password"
          register={register}
          type="password"
        />
        <div className="mt-4">
          <Button
            colorClass="bg-blue-500 hover:bg-blue-700"
            label="新規登録"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
