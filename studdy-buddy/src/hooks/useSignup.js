import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import supabase from "../services/supabase";

export function useSignup() {
  const navigate = useNavigate();

  // In TanStack Query v5, use 'isPending' instead of 'isLoading'
  const { mutate: signup, isPending } = useMutation({
    mutationFn: async ({ email, password, name, phone, about, skills }) => {
      // 1. Safety check: Ensure email exists before calling Supabase
      if (!email) throw new Error("Email is required");

      // 2. Clean up skills string into an array
      const skillsArray =
        typeof skills === "string"
          ? skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          : [];

      // 3. Supabase Auth Signup
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
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
      toast.success("Account created successfully! You can now log in.");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // Return as 'isLoading' so you don't have to change your SignUp component
  return { signup, isLoading: isPending };
}
