import { useQuery } from "@tanstack/react-query";
import supabase from "../services/supabase";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;
      return session?.user || null;
    },
  });
}
