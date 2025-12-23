import { CodeSquare, LucideCode2, MenuIcon } from "lucide-react";
import styled from "styled-components";
import { useLayout } from "../context/LayoutContext";

const HeaderTag = styled.header`
  grid-column: 1/-1;
  height: 80px;
`;
export default function Header() {
  const { isHide, setIshide } = useLayout();
  return (
    <HeaderTag className="shadow flex justify-between items-center px-6">
      <div className="flex gap-2 text-3xl items-center font-bold text-shadow-lg h cursor-pointer transition-all  bg-linear-to-br from-pink-400 to-indigo-500 text-transparent bg-clip-text ">
        <LucideCode2 color="#4338ca" strokeWidth={4} /> <span>eizyConnect</span>
      </div>
      <span
        className=" rounded-4xl  flex justify-center items-center cursor-pointer transition-all hover:shadow-lg"
        onClick={() => setIshide(!isHide)}
      >
        <MenuIcon color="#4338ca" />
      </span>
    </HeaderTag>
  );
}
