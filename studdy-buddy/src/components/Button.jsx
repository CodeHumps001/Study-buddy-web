export default function Button({ children }) {
  return (
    <button className="px-6 py-5 bg-linear-150 from-indigo-500 to-indigo-800 rounded-2xl text-2xl font-bold text-white flex text-center justify-center items-center gap-3 shadow hover:shadow-2xl cursor-pointer transition-all">
      {children}
    </button>
  );
}
