import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../services/supabase";
import { toast } from "react-hot-toast";

export function useJoinSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ sessionId, userId }) => {
      const { data, error } = await supabase
        .from("attendees")
        .insert([{ session_id: sessionId, user_id: userId }])
        .select();

      if (error) {
        // Handle unique constraint error (user already joined)
        if (error.code === "23505")
          throw new Error("You already joined this session!");
        throw error;
      }
      return data;
    },
    onSuccess: () => {
      toast.success("Successfully joined the session!");
      // This refreshes the session list so the attendee count updates
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
}
