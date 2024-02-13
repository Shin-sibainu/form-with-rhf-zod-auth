import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupFormSchema } from "../../lib/formSchema";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export const useSignupForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const { username, email, password } = data;
    //signup api or signup with supabase client auth;
    //TODO:New User already exist middleware added?
  };

  return { form, onSubmit };
};
