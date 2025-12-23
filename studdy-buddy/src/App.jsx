import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import SessionProfile from "./pages/SessionProfile";
import { BrowserRouter, Routes, Route } from "react-router";
import HomepageLayout from "./pages/ui/HomepageLayout";
import { LayoutProvider } from "./context/LayoutContext";
import CreateSession from "./pages/CreateSession";
// import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <LayoutProvider>
                <HomepageLayout />
              </LayoutProvider>
            }
          >
            <Route index element={<Homepage />} />
            <Route path="feed" element={<Homepage />} />
            <Route path="sessions/:id" element={<SessionProfile />} />
            <Route path="session/create" element={<CreateSession />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
