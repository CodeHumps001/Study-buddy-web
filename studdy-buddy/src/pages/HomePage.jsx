import { MenuIcon, Loader2 } from "lucide-react";
import { useLayout } from "../context/LayoutContext";
import styled from "styled-components";
import SessionCard from "../components/SessionCard";
import { useSessions } from "../hooks/useSessions"; // Import the hook

const FeedView = styled.div`
  display: flex;
  height: 85vh;
`;

const FeedCard = styled.ul`
  display: flex;
  /* Ensure scrolling works within the 85vh height */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
`;

function HomePage() {
  // 1. Fetch real data from Supabase via React Query
  const { data: sessions, isLoading, error } = useSessions();

  return (
    <div className="bg-gray-50 h-full rounded-2xl relative">
      <FeedView className="flex justify-start items-start flex-col p-2">
        <h1 className="text-3xl font-bold text-indigo-900 ml-3 mt-2">
          Recently Posted
        </h1>

        <FeedCard className="flex justify-start items-start p-3 flex-wrap gap-10 w-full h-full">
          {/* 2. Show a loader while fetching */}
          {isLoading && (
            <div className="flex justify-center items-center w-full h-40">
              <Loader2 className="animate-spin text-indigo-600" size={40} />
            </div>
          )}

          {/* 3. Handle Errors */}
          {error && (
            <p className="text-red-500 text-center w-full">
              Failed to load sessions. Please try again.
            </p>
          )}

          {/* 4. Map over real sessions */}
          {!isLoading && sessions?.length > 0
            ? sessions.map((session) => (
                <SessionCard key={session.id} session={session} />
              ))
            : !isLoading && (
                <p className="text-gray-500 text-center w-full mt-10 italic">
                  No sessions found. Be the first to create one!
                </p>
              )}
        </FeedCard>
      </FeedView>
    </div>
  );
}

export default HomePage;
