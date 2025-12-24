import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/getUser";
import { Loader2 } from "lucide-react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const {
    data: user,
    isLoading,
    fetchStatus,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  // 2. If there is NO authenticated user, redirect to /login
  useEffect(
    function () {
      if (!user && !isLoading && fetchStatus !== "fetching") {
        navigate("/login", { replace: true });
      }
    },
    [user, isLoading, navigate, fetchStatus]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Loader2 className="animate-spin text-indigo-600" size={64} />
      </FullPage>
    );

  // 4. If there IS a user, render the app (children)
  if (user) return children;
}

export default ProtectedRoute;
