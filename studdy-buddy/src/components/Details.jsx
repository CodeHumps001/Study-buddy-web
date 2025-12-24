import React from "react";
import { MapPin, Clock, BookOpen, Loader2, CheckCircle2 } from "lucide-react";
import { useParams } from "react-router";
import { formatSessionDate } from "../helpers/formatDate";
import { useSessions } from "../hooks/useSessions";

export default function Details() {
  const { id } = useParams();

  // Fetch sessions from the existing cache
  const { data: sessions, isLoading } = useSessions();

  // Find the specific session
  const currentSession = sessions?.find((s) => s.id == id);

  if (isLoading)
    return (
      <div className="p-8 text-center">
        <Loader2 className="animate-spin mx-auto text-[#5D3FD3]" />
      </div>
    );

  if (!currentSession)
    return (
      <div className="p-8 text-center text-slate-500 font-bold">
        Session not found.
      </div>
    );

  const { course_name, location, reason, session_date } = currentSession;

  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
            Verified Session
          </span>
        </div>

        <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
          {course_name}
        </h1>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="p-3 bg-white rounded-xl shadow-sm text-[#5D3FD3]">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Location
              </p>
              <p className="text-sm font-bold text-slate-800">{location}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="p-3 bg-white rounded-xl shadow-sm text-[#5D3FD3]">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Time & Date
              </p>
              <p className="text-sm font-bold text-slate-800">
                {formatSessionDate(session_date)}
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <BookOpen size={20} className="text-[#5D3FD3]" />
            About this Session
          </h3>
          <p className="text-slate-500 leading-relaxed text-md">{reason}</p>
        </div>
      </div>
    </div>
  );
}
