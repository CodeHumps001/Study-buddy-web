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
        <li className="flex flex-col shadow hover:shadow-lg rounded-3xl p-4 transition-all gap-2 w-xl">
          <h2 className="text-2xl font-medium text-emerald-500 ">
            {session.courseName}
          </h2>
          <p className="flex gap-1 text-gray-400">
            <MapPin /> {session.location} | <TimerIcon />
            {formatSessionDate(session.sessionDate)}
          </p>
          <p className="text-gray-800 text-lg font-medium">{session.reason}</p>
          <CardFooter>
            <p className="flex flex-col gap-2">
              <span className="flex gap-1">
                <Users /> {session.attendees.length}{" "}
                {session.attendees.length > 1
                  ? "Buddies "
                  : session.attendees.length === 0
                  ? "No Buddy yet"
                  : "Buddy"}{" "}
                Joined
              </span>
              <span className="flex gap-1">
                <AlarmCheck />
                {formatPostedTime(session.createdAt)}
              </span>
            </p>
            <button className="px-6 py-2 text-lg font-medium text-white bg-linear-150 from-indigo-500 to-indigo-800 rounded-2xl hover:shadow-lg shadow-indigo-600 transition-all cursor-pointer">
              Join Session
            </button>
          </CardFooter>
        </li>
      ))}
    </>
  );
}
