import z from "zod";

export const signupFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は2文字以上で入力してください。" }),
  email: z.string().email("適切なメールアドレスを入力してください。"),
  password: z
    .string()
    .min(6, { message: "パスワードは6文字以上で入力してください。" })
    .max(15, { message: "パスワードは15文字以上で入力してください。" }),
});

export const loginFormSchema = z.object({
  email: z.string().email("適切なメールアドレスを入力してください。"),
  password: z
    .string()
    .min(6, { message: "パスワードは6文字以上で入力してください。" })
    .max(15, { message: "パスワードは15文字以上で入力してください。" }),
});
