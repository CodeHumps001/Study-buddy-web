import styled from "styled-components";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useLayout } from "../../context/LayoutContext";

const HomeLayout = styled.div`
  height: 100vh;
  display: grid;
  /* Default Desktop: Sidebar and Content */
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 15px;
  padding: 20px;

  /* Mobile Styles (max-width: 768px) */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column */
    grid-template-rows: auto auto 1fr; /* Header, Sidebar (if visible), then Main */
    padding: 10px;
    gap: 10px;
  }
`;

const Main = styled.main`
  grid-column: 2 / -1;
  grid-row: 2 / -1;

  @media (max-width: 768px) {
    grid-column: 1 / -1; /* Take full width on mobile */
    grid-row: 3 / -1; /* Move to third row if sidebar is above it */
  }
`;

function HomepageLayout() {
  const { isHide } = useLayout();

  return (
    <HomeLayout>
      <Header />
      {/* 
         On mobile, you might want to wrap Sidebar in a 
         div that handles its specific mobile positioning 
      */}
      {isHide && <Sidebar />}
      <Main>
        <Outlet />
      </Main>
    </HomeLayout>
  );
}

export default HomepageLayout;
