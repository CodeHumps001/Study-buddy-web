import { AlarmCheck, MapPin, TimerIcon, Users } from "lucide-react";
import { formatPostedTime, formatSessionDate } from "../helpers/formatDate";
import styled from "styled-components";
import { NavLink } from "react-router";

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export default function SessionCard({ session }) {
  // 1. THE FIX: Guard clause to prevent "undefined" errors
  if (!session) return null;

  const attendeeCount = session?.attendees?.length || 0;

  return (
    <NavLink
      to={`/sessions/${session.id}`}
      className="block w-full max-w-xl mx-auto"
    >
      <li className="flex flex-col shadow hover:shadow-lg rounded-3xl p-4 md:p-6 transition-all gap-3 bg-white border border-gray-100 list-none">
        <h2 className="text-xl md:text-2xl font-bold text-emerald-600 line-clamp-1">
          {session.course_name}
        </h2>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-500 text-xs md:text-sm">
          <span className="flex items-center gap-1">
            <MapPin size={16} /> {session.location}
          </span>
          <span className="flex items-center gap-1 border-l pl-4 border-gray-200">
            <TimerIcon size={16} /> {formatSessionDate(session.session_date)}
          </span>
        </div>

        <p className="text-gray-700 text-sm md:text-base font-normal line-clamp-2 md:line-clamp-3">
          {session.reason}
        </p>

        <CardFooter>
          <div className="flex flex-col gap-1 text-gray-600">
            <span className="flex items-center gap-2 text-xs md:text-sm font-medium">
              <Users size={16} />
              {attendeeCount}{" "}
              {attendeeCount > 1
                ? "Buddies"
                : attendeeCount === 0
                ? "First to join"
                : "Buddy"}{" "}
              Joined
            </span>
            <span className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 italic">
              <AlarmCheck size={14} />
              Posted {formatPostedTime(session.created_at)}
            </span>
          </div>

          <button className="w-full md:w-auto px-6 py-2 text-sm font-bold text-white bg-indigo-700 rounded-xl hover:bg-indigo-800 transition-colors shadow-sm cursor-pointer">
            View details
          </button>
        </CardFooter>
      </li>
    </NavLink>
  );
}
