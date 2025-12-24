import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../services/supabase"; // MAKE SURE THIS PATH IS CORRECT
import { toast } from "react-hot-toast"; // MAKE SURE THIS IS IMPORTED

export function useCreateSession() {
  const queryClient = useQueryClient();

  const { mutate: createSession, isLoading } = useMutation({
    mutationFn: async (newSession) => {
      // 1. Get current user
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData.user) {
        throw new Error("Authentication failed. Please log in again.");
      }

      const user = userData.user;

      // 2. Insert the session
      const { data: session, error: insertError } = await supabase
        .from("sessions")
        .insert([
          {
            ...newSession,
            host_id: user.id,
          },
        ])
        .select()
        .single();

      if (insertError) {
        console.error("Database Insert Error:", insertError);
        throw new Error(insertError.message);
      }

      // 3. Automatically add the host as an attendee
      const { error: attendeeError } = await supabase
        .from("attendees")
        .insert([{ session_id: session.id, user_id: user.id }]);

      if (attendeeError) {
        console.error("Failed to add host as attendee:", attendeeError);
      }

      return session;
    },
    onSuccess: () => {
      toast.success("Session created successfully!");
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
    onError: (err) => {
      console.error("Mutation Error:", err.message);
      toast.error(err.message);
    },
  });

  return { createSession, isLoading };
}
