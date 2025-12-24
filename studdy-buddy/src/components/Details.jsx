import React, { useState } from "react";
import { MapPin, Clock, BookOpen } from "lucide-react";
import mockSessions from "../data";
import { useParams } from "react-router";
import { formatSessionDate } from "../helpers/formatDate";

export default function Details() {
  const { id } = useParams();
  const courseInfo = mockSessions;
  const currentSession = courseInfo.find((course) => course.id === +id);
  const { courseName, location, reason, sessionDate } = currentSession;

  console.log(currentSession);
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
            Verified Session
          </span>
        </div>

        <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
          {courseName}
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
                {formatSessionDate(sessionDate)}
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
