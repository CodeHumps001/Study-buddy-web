import styled from "styled-components";

const Li = styled.li`
  list-styled: none;
`;

export default function SkillsList() {
  const skills = ["Coding", "Reading", "Data Analyst"];
  return (
    <>
      {skills.map((skill) => (
        <Li
          className="p-3 rounded-3xl shadow  inline-block m-auto bg-gray-800 text-white font-bold"
          key={skill}
        >
          {skill}
        </Li>
      ))}
    </>
  );
}
