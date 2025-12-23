import {
  AlarmCheck,
  Locate,
  MapPin,
  TimerIcon,
  User2,
  User2Icon,
  Users,
} from "lucide-react";
import mockSessions from "../data";
import { formatPostedTime, formatSessionDate } from "../helpers/formatDate";
import styled from "styled-components";
import { NavLink } from "react-router";

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
export default function SessionCard() {
  const sessionsInfo = mockSessions;

  console.log(sessionsInfo);
  return (
    <>
      {sessionsInfo.map((session) => (
        <NavLink to={`/sessions/${session.id}`}>
          <li className="flex flex-col shadow hover:shadow-lg rounded-3xl p-4 max-[500px]:p-2 transition-all gap-2 w-xl max-[500px]:w-xs">
            <h2 className="text-2xl font-medium text-emerald-500 max-[500px]:text-lg">
              {session.courseName}
            </h2>
            <p className="flex gap-1 text-gray-400 max-[500px]:text-sm">
              <MapPin /> {session.location} | <TimerIcon />
              {formatSessionDate(session.sessionDate)}
            </p>
            <p className="text-gray-800 text-lg font-medium max-[500px]:text-sm">
              {session.reason}
            </p>
            <CardFooter>
              <p className="flex flex-col gap-2 ">
                <span className="flex gap-1 max-[500px]:text-xs">
                  <Users /> {session.attendees.length}{" "}
                  {session.attendees.length > 1
                    ? "Buddies "
                    : session.attendees.length === 0
                    ? "Be the first to join"
                    : "Buddy"}{" "}
                  Joined
                </span>
                <span className="flex gap-1 max-[500px]:text-xs">
                  <AlarmCheck />
                  {formatPostedTime(session.createdAt)}
                </span>
              </p>
              <button className="px-6 text-sm font-bold  text-white bg-linear-150 from-indigo-800 to-indigo-700 rounded-sm hover:shadow-lg shadow-indigo-600 transition-all cursor-pointer max-[500px]:text-sm max-[500px]:px-4 max-[500px]:py-1">
                View details
              </button>
            </CardFooter>
          </li>
        </NavLink>
      ))}
    </>
  );
}
