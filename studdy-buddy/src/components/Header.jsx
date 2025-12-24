import { LucideCode2, Plus, User, Menu } from "lucide-react";
import styled from "styled-components";
import { useLayout } from "../context/LayoutContext";
import { NavLink } from "react-router";

const HeaderTag = styled.header`
  grid-column: 1 / -1;
  /* Use min-height instead of fixed height for better mobile scaling */
  min-height: 70px;
`;

export default function Header() {
  const { isHide, setIshide } = useLayout();

  return (
    <HeaderTag className="flex justify-between items-center px-4 md:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-50 max-[780px]:justify-end">
      {/* Logo: Hidden on very small screens, visible from 'sm' up */}
      <NavLink
        to="/"
        className="hidden sm:flex gap-2 text-2xl md:text-3xl items-center font-bold transition-all bg-linear-to-br from-pink-400 to-indigo-500 text-transparent bg-clip-text"
      >
        <LucideCode2 color="#4338ca" strokeWidth={4} size={32} />
        <span>eizyConnect</span>
      </NavLink>

      {/* Actions Area */}
      <div className="flex justify-center items-center gap-3 md:gap-5">
        <NavLink
          to="/session/create"
          className="p-2 hover:bg-indigo-50 rounded-full transition-colors"
          title="Create Session"
        >
          <Plus className="text-indigo-700" size={28} />
        </NavLink>

        <div
          className="rounded-full flex justify-center items-center bg-gray-950 cursor-pointer transition-all shadow-md hover:shadow-indigo-200 gap-2 px-3 py-1.5 md:px-4 md:py-2"
          onClick={() => setIshide(!isHide)}
        >
          {/* Hide name on very small devices to save space */}
          <h1 className="text-xs md:text-sm font-bold text-gray-100 hidden xs:block">
            Welcome, Yaw
          </h1>
          <User color="#4338ca" size={20} />
        </div>
      </div>
    </HeaderTag>
  );
}
