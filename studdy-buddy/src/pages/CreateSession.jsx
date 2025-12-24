import styled from "styled-components";
import Button from "../components/Button";
import { ArrowBigLeftDash, Plus } from "lucide-react";
import { NavLink } from "react-router";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function CreateSession() {
  return (
    // Added horizontal padding (px-4) so the form doesn't touch screen edges on mobile
    <div className="bg-gray-50 flex flex-col gap-4 justify-center items-center min-h-full py-10 px-4">
      <NavLink
        to="/"
        className="flex hover:underline text-lg md:text-xl justify-center items-center gap-2"
      >
        <ArrowBigLeftDash />
        <span>Go back</span>
      </NavLink>

      {/* text-center ensures header stays centered on small screens */}
      <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-br from-pink-400 to-indigo-500 text-transparent bg-clip-text text-center">
        Create a session
      </h1>

      <p className="text-center text-gray-600 max-w-md">
        Fill in the form to create your session and wait for the magic!
      </p>

      {/* 
        Responsive Changes:
        1. grid-cols-1 by default, md:grid-cols-2 for desktop.
        2. w-full for mobile, md:w-3xl for desktop.
      */}
      <form className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3xl shadow-lg bg-white gap-4 p-4 md:p-6 rounded-2xl">
        <Field>
          <label className="font-semibold">Course name</label>
          <input
            type="text"
            placeholder="Enter course name"
            className="p-2 rounded-xl border-indigo-900 border outline-indigo-800 placeholder:text-base md:placeholder:text-xl"
          />
        </Field>

        <Field>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            placeholder="Where is this taking place"
            className="p-2 rounded-xl border-indigo-900 border outline-indigo-800 placeholder:text-base md:placeholder:text-xl"
          />
        </Field>

        <Field className="md:col-span-1">
          <label className="font-semibold">Commence Date</label>
          <input
            type="datetime-local"
            className="p-2 rounded-xl border-indigo-900 border outline-indigo-800"
          />
        </Field>

        {/* This field spans both columns on desktop, one column on mobile */}
        <Field className="md:col-span-2">
          <label className="font-semibold">About session</label>
          <textarea
            rows="4"
            placeholder="Give a little description about this session"
            className="p-2 rounded-xl border-indigo-900 border outline-indigo-800 placeholder:text-base md:placeholder:text-xl"
          />
        </Field>

        <div className="md:col-span-2 mt-2">
          <Button className="w-full flex justify-center items-center gap-2">
            <span>Create Session</span>
            <Plus size={20} />
          </Button>
        </div>
      </form>
    </div>
  );
}
