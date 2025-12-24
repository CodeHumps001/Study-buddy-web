import { ArrowBigDown, ArrowBigLeft, MenuIcon } from "lucide-react";
import { useLayout } from "../context/LayoutContext";
import View from "../components/View";
import styled from "styled-components";
import SessionCard from "../components/SessionCard";

const FeedView = styled.div`
  display: flex;
  height: 85vh;
`;
const FeedCard = styled.ul`
  display: flex;
`;
function HomePage() {
  return (
    <div className="bg-gray-50 h-full rounded-2xl relative">
      <FeedView className="flex justify-start items-start flex-col p-2">
        <h1 className="text-3xl font-bold text-indigo-900">Recently Posted</h1>
        <FeedCard className="flex justify-start items-start p-3 flex-wrap gap-10 overflow-y-auto w-full h-full">
          <SessionCard />
        </FeedCard>
      </FeedView>
    </div>
  );
}

export default HomePage;
