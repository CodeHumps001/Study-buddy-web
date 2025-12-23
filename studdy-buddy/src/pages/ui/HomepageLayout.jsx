import styled from "styled-components";
import View from "../../components/View";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useContext } from "react";
import { useLayout } from "../../context/LayoutContext";

const HomeLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 15px;

  padding: 20px;
`;

const Main = styled.main`
  grid-column: 2/-1;
  grid-row: 2/-1;
`;
function HomepageLayout() {
  const { isHide } = useLayout();
  return (
    <HomeLayout>
      <Header />
      {isHide && <Sidebar />}

      <Main>
        <Outlet />
      </Main>
    </HomeLayout>
  );
}

export default HomepageLayout;
