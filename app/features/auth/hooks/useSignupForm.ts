import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupFormSchema } from "../../lib/formSchema";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export const useSignupForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const { username, email, password } = data;
    //signup api or signup with supabase client auth;
    //TODO:New User already exist middleware added?
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        // options: {
        //   emailRedirectTo: `${window.location.origin}/welcome`,
        // },
      });

      // console.log(data.user);
      if (signUpError) throw signUpError;

      const { error: userError } = await supabase
        .from("User")
        .insert([{ id: data.user?.id, username, email }]);

      if (userError) {
        if (
          userError.message.includes(
            "duplicate key value violates unique constraint"
          )
        ) {
          setError("既に存在するユーザーです。");
          return;
        }
      }

      setError("");
      router.push("/auth/email-confirm");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(err.message);
      } else {
        setError("登録中にエラーが発生しました。");
      }
    }
  };

  return { form, onSubmit, error };
};
