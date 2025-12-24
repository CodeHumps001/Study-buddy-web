import React from "react";
import {
  ArrowLeft,
  Users,
  MessageCircle,
  CheckCircle,
  Share2,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { NavLink, useParams } from "react-router";
import Details from "../components/Details";
import { useSessions } from "../hooks/useSessions";
import { useJoinSession } from "../hooks/useJoinSession";
import { useUser } from "../hooks/useUser";

const SessionProfile = () => {
  const { id } = useParams();
  const { data: user } = useUser();
  const { data: sessions, isLoading } = useSessions();
  const { mutate: join, isLoading: isJoining } = useJoinSession();

  const currentSession = sessions?.find((s) => s.id == id);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-[#5D3FD3]" />
      </div>
    );

  if (!currentSession)
    return (
      <div className="p-20 text-center">
        <p className="text-slate-500">Session not found</p>
        <NavLink
          to="/feed"
          className="text-[#5D3FD3] font-bold mt-4 inline-block"
        >
          Return to Feed
        </NavLink>
      </div>
    );

  // 1. DATA EXTRACTION
  const { hostName, hostWhatsApp, attendees, course_name } = currentSession;

  // 2. LOGIC FOR DISPLAY NAME
  const displayName = hostName === "Unknown Host" ? "Study Host" : hostName;

  // 3. GENERATED AVATAR
  const generatedAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    displayName
  )}&background=5D3FD3&color=fff&bold=true`;

  const hostBio =
    currentSession.host_about?.bio ||
    `Ready to study ${course_name || "together"}!`;

  const hasJoined = attendees?.some((att) => att.user_id === user?.id);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10 font-sans">
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink
            to="/feed"
            className="flex items-center gap-2 text-slate-600 hover:text-[#5D3FD3] font-semibold transition-all group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Feed
          </NavLink>
          <div className="flex gap-4">
            <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Details />

        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#5D3FD3]"></div>

            <div className="relative inline-block">
              <img
                src={generatedAvatar}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-50 shadow-lg object-cover"
                alt={displayName}
              />
              <div className="absolute bottom-4 right-0 bg-emerald-500 border-2 border-white w-5 h-5 rounded-full"></div>
            </div>

            <h4 className="text-xl font-black text-slate-900">{displayName}</h4>
            <p className="text-[#5D3FD3] text-xs font-bold uppercase tracking-widest mt-1">
              Session Host
            </p>

            <p className="text-slate-400 text-sm mt-4 px-2 italic">
              "{hostBio}"
            </p>

            <div className="my-8 border-t border-slate-50"></div>

            {hasJoined ? (
              <div className="space-y-3 animate-in fade-in zoom-in duration-300">
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold bg-emerald-50 py-4 rounded-2xl border border-emerald-100">
                  <CheckCircle size={20} /> You are Booked!
                </div>

                {hostWhatsApp ? (
                  <button
                    onClick={() => {
                      // CLEANING THE PHONE NUMBER
                      const phone = hostWhatsApp.replace(/\s+/g, "");

                      // CREATING THE DEFAULT MESSAGE
                      const defaultMsg = `Hello ${displayName}, I just joined your study session for "${course_name}" on eizyConnect! Let's coordinate the study details.`;

                      // ENCODING AND OPENING
                      window.open(
                        `https://wa.me/${phone}?text=${encodeURIComponent(
                          defaultMsg
                        )}`
                      );
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95"
                  >
                    <MessageCircle size={20} /> Open WhatsApp Chat
                  </button>
                ) : (
                  <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-xs text-slate-500">
                      Host hasn't linked a WhatsApp number yet.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => join({ sessionId: id, userId: user?.id })}
                disabled={isJoining || !user}
                className="w-full bg-[#5D3FD3] hover:bg-[#4B32A7] disabled:bg-slate-300 text-white font-black py-5 rounded-2xl transition-all shadow-xl active:scale-95"
              >
                {isJoining ? "Joining..." : "Join Study Session"}
              </button>
            )}

            {!user && (
              <p className="text-[10px] text-red-500 font-bold mt-2 uppercase">
                Please Login to Join
              </p>
            )}

            <p className="text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck size={12} /> Your data is safe with eizyConnect
            </p>
          </div>

          <div className="bg-[#1E1B4B] rounded-[2rem] p-6 text-white overflow-hidden relative shadow-lg">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold flex items-center gap-2">
                  <Users size={18} /> {attendees?.length || 0} Buddies
                </h4>
              </div>
              <p className="text-indigo-200 text-xs leading-relaxed">
                Coordinate study materials once you join!
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SessionProfile;
