import { LucideCode2, Plus, User, LogOut } from "lucide-react";
import styled from "styled-components";
import { useLayout } from "../context/LayoutContext";
import { NavLink, useNavigate } from "react-router";
import supabase from "../services/supabase"; // Ensure you have your supabase client imported
import { useQueryClient } from "@tanstack/react-query";

const HeaderTag = styled.header`
  grid-column: 1 / -1;
  min-height: 70px;
`;

export default function Header() {
  const { isHide, setIshide } = useLayout();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleLogout() {
    try {
      // 1. Sign out from Supabase
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      // 2. Clear all cached React Query data (very important for security!)
      queryClient.clear();

      // 3. Redirect to login or home
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  }

  return (
    <HeaderTag className="flex justify-between items-center px-4 md:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100">
      {/* Logo */}
      <NavLink
        to="/"
        className="hidden sm:flex gap-2 text-2xl md:text-3xl items-center font-bold transition-all bg-gradient-to-br from-pink-400 to-indigo-500 text-transparent bg-clip-text"
      >
        <LucideCode2 color="#4338ca" strokeWidth={4} size={32} />
        <span>eizyConnect</span>
      </NavLink>

      {/* Actions Area */}
      <div className="flex justify-center items-center gap-2 md:gap-4">
        {/* Create Session Button */}
        <NavLink
          to="/session/create"
          className="p-2 hover:bg-indigo-50 rounded-full transition-colors group"
          title="Create Session"
        >
          <Plus
            className="text-indigo-700 group-hover:scale-110 transition-transform"
            size={26}
          />
        </NavLink>

        {/* User Profile Toggle */}
        <div
          className="rounded-full flex justify-center items-center bg-gray-950 cursor-pointer transition-all shadow-md hover:shadow-indigo-200 gap-2 px-3 py-1.5 md:px-4 md:py-2"
          onClick={() => setIshide(!isHide)}
        >
          <h1 className="text-xs md:text-sm font-bold text-gray-100 hidden xs:block">
            Profile
          </h1>
          <User color="#4338ca" size={18} />
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
          title="Logout"
        >
          <LogOut size={22} />
        </button>
      </div>
    </HeaderTag>
  );
}
