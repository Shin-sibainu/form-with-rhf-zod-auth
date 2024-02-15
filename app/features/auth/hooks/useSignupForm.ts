import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupFormSchema } from "../../lib/formSchema";
import { supabase } from "../../lib/supabaseClient";
import { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export const useSignupForm = () => {
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
      });

      console.log(data.user);
      console.log(signUpError?.message);
      if (signUpError) throw signUpError;

      const { error: userError } = await supabase
        .from("User")
        .insert([{ id: data.user?.id, username, email }]);

      if (userError) throw userError;

      setError("");
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
