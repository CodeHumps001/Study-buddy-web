import styled from "styled-components";

const Li = styled.li`
  list-styled: none;
`;

export default function SkillsList({ skills }) {
  return (
    <>
      {skills.map((skill, i) => (
        <Li
          className="p-3 rounded-3xl shadow  inline-block  bg-gray-700 text-white font-bold"
          key={i}
        >
          {skill}
        </Li>
      ))}
    </>
  );
}
