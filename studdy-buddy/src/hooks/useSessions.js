import { useQuery } from "@tanstack/react-query";
import supabase from "../services/supabase";

// hooks/useSessions.js
export function useSessions() {
  return useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sessions")
        .select(
          `
          *,
          profiles!host_id (full_name, whatsapp_number),
          attendees(user_id)
        `
        )
        // ONLY GET SESSIONS THAT ARE IN THE FUTURE
        .gt("session_date", new Date().toISOString())
        .order("session_date", { ascending: true });

      if (error) throw error;

      return data?.map((session) => ({
        ...session,
        hostName: session.profiles?.full_name || "Unknown Host",
        hostWhatsApp: session.profiles?.whatsapp_number || null,
        attendeeCount: session.attendees?.length || 0,
      }));
    },
  });
}
