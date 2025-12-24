import { useMutation } from "@tanstack/react-query";
import supabase from "../services/supabase";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: async ({ email, password, name, phone, about, skills }) => {
      // 1. Auth Signup
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw new Error(authError.message);

      // 2. Profile Creation
      if (authData.user) {
        const skillsArray = skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: authData.user.id,
            full_name: name,
            whatsapp_number: phone,
            about_me: about,
            skills: skillsArray,
          },
        ]);

        if (profileError) throw new Error(profileError.message);
      }
    },
    onSuccess: () => {
      toast.success("Account created! Check your email to verify.");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
