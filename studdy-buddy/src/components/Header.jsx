import {
  Clipboard,
  CodeSquare,
  LucideCode2,
  MenuIcon,
  Plus,
  User,
} from "lucide-react";
import styled from "styled-components";
import { useLayout } from "../context/LayoutContext";
import { NavLink } from "react-router";

const HeaderTag = styled.header`
  grid-column: 1/-1;
  height: 80px;
`;
export default function Header() {
  const { isHide, setIshide } = useLayout();
  return (
    <HeaderTag className=" flex justify-between items-center px-6 max-[500px]:justify-end">
      <NavLink
        to="/"
        className="flex gap-2 text-3xl items-center font-bold text-shadow-lg h cursor-pointer transition-all  bg-linear-to-br from-pink-400 to-indigo-500 text-transparent bg-clip-text max-[500px]:hidden "
      >
        <LucideCode2 color="#4338ca" strokeWidth={4} /> <span>eizyConnect</span>
      </NavLink>
      <div className="flex  justify-center items-center gap-2">
        <NavLink to="/session/create">
          <Plus />
        </NavLink>
        <span
          className=" rounded-4xl  flex justify-center items-center bg-gray-950 cursor-pointer transition-all shadow-lg gap-2 p-2 "
          onClick={() => setIshide(!isHide)}
        >
          <h1 className="text-sm font-bold text-gray-100  ">Welcome, Yaw</h1>
          <User color="#4338ca" />
        </span>
      </div>
    </HeaderTag>
  );
}
