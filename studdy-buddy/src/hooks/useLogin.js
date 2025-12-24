import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../services/supabase";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error(error.message);
      return data.user;
    },
    onSuccess: (user) => {
      // Manually set the user data in the cache so useUser() picks it up immediately
      queryClient.setQueryData(["user-profile"], user);

      toast.success(`Welcome back!`);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
