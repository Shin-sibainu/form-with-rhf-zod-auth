import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema, signupFormSchema } from "../../lib/formSchema";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const { email, password } = data;
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log(email, password);

      // console.log(signInError?.message);
      if (signInError) {
        console.log(signInError.message);
        throw signInError;
      }

      setError("");
      router.push("/");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(err.message);
      } else {
        setError("ログイン中にエラーが発生しました。");
      }
    }
  };

  return { form, onSubmit, error };
};
