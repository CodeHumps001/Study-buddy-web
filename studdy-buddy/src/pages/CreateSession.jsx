import styled from "styled-components";
import Button from "../components/Button";
import { ArrowBigLeftDash, Plus, Send } from "lucide-react";
import { NavLink } from "react-router";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default function CreateSession() {
  return (
    <div className="bg-gray-50 flex flex-col  gap-3 justify-center items-center h-full">
      <NavLink
        to="/"
        className="flex hover:underline text-xl justify-center items-center gap-2"
      >
        <ArrowBigLeftDash />
        <span>Go back</span>
      </NavLink>
      <h1 className="text-4xl font-bold bg-linear-to-br from-pink-400 to-indigo-500 text-transparent bg-clip-text text-shadow-2xl">
        Create a session{" "}
      </h1>
      <p>Fill in the form to create your session and wait for the magic!</p>
      <form className="grid grid-cols-2 w-3xl shadow gap-2 p-3">
        <Field>
          <label htmlFor="">Course name</label>
          <input
            type="text"
            placeholder="enter course name"
            className="p-2 rounded-xl border-indigo-900 border   outline-indigo-800 placeholder:text-xl"
          />
        </Field>
        <Field>
          <label htmlFor="">location</label>
          <input
            type="text"
            placeholder="where is this taking place"
            className="p-2 rounded-xl border-indigo-900 border   outline-indigo-800 placeholder:text-xl"
          />
        </Field>
        <Field>
          <label htmlFor="">Commence Date</label>
          <input
            type="datetime-local"
            placeholder="enter course name"
            className="p-2 rounded-xl border-indigo-900 border   outline-indigo-800 placeholder:text-xl"
          />
        </Field>
        <Field className="grid col-span-2">
          <label htmlFor="">About session</label>
          <textarea
            type="text"
            placeholder="Give a little description about this sessction"
            className="p-2 rounded-xl border-indigo-900 border   outline-indigo-800 placeholder:text-xl "
          />
        </Field>

        <Button>
          <span>Create Session</span>
          <Plus />
        </Button>
      </form>
    </div>
  );
}
