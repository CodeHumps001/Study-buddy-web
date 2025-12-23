import styled from "styled-components";
import SkillsList from "./SkillsList";
import { useState } from "react";

const Aside = styled.aside`
  grid-column: 1 /2;
  grid-row: 2/-1
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
  return (
    <Aside className="shadow flex justify-start items-center flex-col gap-3 rounded-2xl">
      <Avarta className="bg-gray-100 shadow-lg flex justify-center items-center overflow-hidden">
        <img
          src="/img_5terre.jpg"
          alt="profile image"
          className="h-full w-full"
        />
      </Avarta>
      <Details>
        <h3 className="bg-linear-to-br from-pink-400 to-indigo-700 text-transparent bg-clip-text text-2xl ">
          name
        </h3>
        <h1>Yaw fosu</h1>
      </Details>
      <Details>
        <h4 className="bg-linear-to-br from-pink-400 to-indigo-600 text-transparent bg-clip-text">
          About you
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos
          corrupti culpa fuga magni debitis ab exercitationem eveniet sunt id.
        </p>
      </Details>
      <Details>
        <p>Joined (3) sessions</p>
      </Details>
      <Details>
        <h4 className="bg-linear-to-br from-pink-400 to-indigo-800 text-transparent bg-clip-text mb-2">
          skills
        </h4>
        <ul className="flex flex-wrap gap-1 justify-start max-w-full">
          <SkillsList />
        </ul>
      </Details>
    </Aside>
  );
}
