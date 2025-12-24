import styled from "styled-components";
import SkillsList from "./SkillsList";
import { getCurrentUser } from "../services/getUser";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const Aside = styled.aside`
  grid-column: 1 / 2;
  grid-row: 2 / -1;
  padding: 20px;
  width: 350px;
  height: auto;
`;

const Avarta = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Details = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export default function Sidebar() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  if (isLoading) {
    return (
      <Aside className="shadow flex justify-center items-center rounded-2xl h-[600px] bg-white">
        <Loader2 className="animate-spin text-indigo-600" size={40} />
      </Aside>
    );
  }

  if (!user) return null;

  // 1. Generate the Avatar URL based on the logged-in user's name
  const userAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.full_name || "User"
  )}&background=5D3FD3&color=fff&bold=true&size=150`;

  return (
    <Aside className="shadow flex justify-start items-center flex-col gap-4 rounded-2xl bg-white z-50 max-[700px]:w-full">
      {/* 2. Update the Avatar container to use the dynamic source */}
      <Avarta className="bg-gray-100 shadow-lg flex justify-center items-center overflow-hidden border-4 border-indigo-50 mt-2">
        <img
          src={userAvatar}
          alt={user.full_name}
          className="h-full w-full object-cover"
        />
      </Avarta>

      <Details className="mt-2">
        <h3 className="bg-gradient-to-br from-pink-400 to-indigo-700 text-transparent bg-clip-text text-xs font-bold uppercase tracking-widest">
          Full Name
        </h3>
        <h1 className="text-xl font-black text-gray-800">{user.full_name}</h1>
      </Details>

      <Details>
        <h4 className="bg-gradient-to-br from-pink-400 to-indigo-600 text-transparent bg-clip-text text-xs font-bold uppercase tracking-widest">
          About you
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed text-wrap">
          {user.about_me || "No bio added yet."}
        </p>
      </Details>

      <Details>
        <h4 className="bg-gradient-to-br from-pink-400 to-indigo-600 text-transparent bg-clip-text text-xs font-bold uppercase tracking-widest">
          Email
        </h4>
        <p className="text-gray-600 text-sm font-medium">{user.email}</p>
      </Details>

      <Details>
        <h4 className="bg-gradient-to-br from-pink-400 to-indigo-600 text-transparent bg-clip-text text-xs font-bold uppercase tracking-widest">
          WhatsApp
        </h4>
        <p className="text-gray-600 text-sm font-medium">
          {user.whatsapp_number || "Not linked"}
        </p>
      </Details>

      <Details>
        <h4 className="bg-gradient-to-br from-pink-400 to-indigo-800 text-transparent bg-clip-text text-xs font-bold uppercase tracking-widest mb-2">
          Skills
        </h4>
        <ul className="flex flex-wrap gap-1 ">
          <SkillsList skills={user.skills || []} />
        </ul>
      </Details>
    </Aside>
  );
}
