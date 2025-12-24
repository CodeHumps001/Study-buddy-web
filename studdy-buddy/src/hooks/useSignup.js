import { useMutation } from "@tanstack/react-query";
import supabase from "../services/supabase";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: async ({ email, password, name, phone, about, skills }) => {
      // Create the skills array here
      const skillsArray = skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      // 1. Auth Signup ONLY
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Pass all extra info here so the TRIGGER can see it
          data: {
            full_name: name,
            whatsapp_number: phone,
            about_me: about,
            skills: skillsArray,
          },
        },
      });

      if (error) throw new Error(error.message);
      return data;
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
