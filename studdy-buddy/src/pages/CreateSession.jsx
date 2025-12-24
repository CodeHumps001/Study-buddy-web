import styled from "styled-components";
import Button from "../components/Button";
import { ArrowBigLeftDash, Plus, Loader2 } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { useCreateSession } from "../hooks/useCreateSession";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function CreateSession() {
  const navigate = useNavigate();
  const { createSession, isLoading } = useCreateSession();

  const [courseName, setCourseName] = useState("");
  const [location, setLocation] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Debugging: If you don't see this in the console, the button type is the issue
    console.log("FORM SUBMITTED", {
      courseName,
      location,
      sessionDate,
      reason,
    });

    if (!courseName || !location || !sessionDate || !reason) return;

    createSession(
      {
        course_name: courseName,
        location,
        session_date: sessionDate,
        reason,
      },
      {
        onSuccess: () => {
          navigate("/feed");
        },
      }
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col gap-4 justify-center items-center min-h-full py-10 px-4">
      <NavLink
        to="/feed"
        className="flex hover:underline text-lg md:text-xl justify-center items-center gap-2"
      >
        <ArrowBigLeftDash />
        <span>Go back</span>
      </NavLink>

      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-pink-400 to-indigo-500 text-transparent bg-clip-text text-center">
        Create a session
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3xl shadow-lg bg-white gap-4 p-4 md:p-6 rounded-2xl"
      >
        <Field>
          <label className="font-semibold">Course name</label>
          <input
            type="text"
            required
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Enter course name"
            className="p-3 rounded-xl border-slate-200 border focus:border-indigo-500 outline-none transition-all"
          />
        </Field>

        <Field>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where is this taking place"
            className="p-3 rounded-xl border-slate-200 border focus:border-indigo-500 outline-none transition-all"
          />
        </Field>

        <Field className="md:col-span-1">
          <label className="font-semibold">Commence Date</label>
          <input
            type="datetime-local"
            required
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
            className="p-3 rounded-xl border-slate-200 border focus:border-indigo-500 outline-none transition-all"
          />
        </Field>

        <Field className="md:col-span-2">
          <label className="font-semibold">About session</label>
          <textarea
            rows="4"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Give a little description about this session"
            className="p-3 rounded-xl border-slate-200 border focus:border-indigo-500 outline-none transition-all"
          />
        </Field>

        <div className="md:col-span-2 mt-2">
          {/* We MUST pass type="submit" here */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center gap-2 py-4 bg-[#5D3FD3] text-white rounded-xl font-bold hover:bg-[#4B32A7] disabled:bg-slate-300 transition-all"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <span>Create Session</span>
                <Plus size={20} />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
