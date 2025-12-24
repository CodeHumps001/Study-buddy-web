import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  MessageCircle,
  Clock,
  BookOpen,
  CheckCircle,
  Share2,
  ShieldCheck,
} from "lucide-react";

const SessionProfile = ({ session, onBack }) => {
  // Local state to simulate the "Join" action for your UI testing
  const [hasJoined, setHasJoined] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10 font-sans">
      {/* 1. TOP NAVIGATION */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-[#5D3FD3] font-semibold transition-all group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Feed
          </button>
          <div className="flex gap-4">
            <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg">
                Verified Session
              </span>
            </div>

            <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              {session?.title || "Data Structures & Algorithms"}
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
                  <p className="text-sm font-bold text-slate-800">
                    {session?.location || "Engineering Block - Room B12"}
                  </p>
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
                    {session?.time || "Today • 16:00"}
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
              <p className="text-slate-500 leading-relaxed text-md">
                {session?.description ||
                  "In this session, we'll focus on binary search trees and heap sort. Please bring your lecture notes and a laptop for practice problems."}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Action */}
        <div className="space-y-6">
          {/* Host Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 text-center relative overflow-hidden">
            {/* Background pattern decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#5D3FD3]"></div>

            <div className="relative inline-block">
              <img
                src={session?.hostAvatar || "https://i.imgur.com/8Km9tLL.png"}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-50 shadow-lg object-cover"
                alt="Host"
              />
              <div className="absolute bottom-4 right-0 bg-emerald-500 border-2 border-white w-5 h-5 rounded-full"></div>
            </div>

            <h4 className="text-xl font-black text-slate-900">
              {session?.hostName || "Yaw Fosu"}
            </h4>
            <p className="text-[#5D3FD3] text-xs font-bold uppercase tracking-widest mt-1">
              Session Host
            </p>

            <p className="text-slate-400 text-sm mt-4 px-2 italic">
              "
              {session?.hostAbout ||
                "Passionate about clean code and teaching others."}
              "
            </p>

            <div className="my-8 border-t border-slate-50"></div>

            {/* Action Button */}
            {hasJoined ? (
              <div className="space-y-3 animate-in fade-in zoom-in duration-300">
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold bg-emerald-50 py-4 rounded-2xl border border-emerald-100">
                  <CheckCircle size={20} /> You are Booked!
                </div>
                <button
                  onClick={() => window.open("https://wa.me/2330000000")}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-green-100"
                >
                  <MessageCircle size={20} /> Open WhatsApp Chat
                </button>
              </div>
            ) : (
              <button
                onClick={() => setHasJoined(true)}
                className="w-full bg-[#5D3FD3] hover:bg-[#4B32A7] text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-indigo-100 hover:shadow-indigo-200 active:scale-95"
              >
                Join Study Session
              </button>
            )}

            <p className="text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck size={12} /> Your data is safe with eizyConnect
            </p>
          </div>

          {/* Social Proof Card */}
          <div className="bg-[#1E1B4B] rounded-[2rem] p-6 text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold flex items-center gap-2">
                  <Users size={18} /> {session?.buddies || "2"} Buddies
                </h4>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-[#1E1B4B] bg-slate-700"
                    ></div>
                  ))}
                </div>
              </div>
              <p className="text-indigo-200 text-xs leading-relaxed">
                Collaborate with others from your campus. Coordinate study
                materials once you join!
              </p>
            </div>
            {/* Design circle decoration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SessionProfile;
