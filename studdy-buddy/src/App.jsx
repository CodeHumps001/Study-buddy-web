import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import SessionProfile from "./pages/SessionProfile";
import { BrowserRouter, Routes, Route } from "react-router";
import HomepageLayout from "./pages/ui/HomepageLayout";
import { LayoutProvider } from "./context/LayoutContext";
import CreateSession from "./pages/CreateSession";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import GlobalStyles from "./styles/GlobalStyles";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options to match your theme
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "16px", // Matches your rounded-2xl theme
          },
          success: {
            duration: 3000,
            theme: {
              primary: "#4f46e5", // Your indigo-600 color
            },
          },
        }}
      />
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
    </QueryClientProvider>
  );
}

export default App;
