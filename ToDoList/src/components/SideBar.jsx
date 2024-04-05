import { Plus } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-1/3 z-40 bg-gray-50 dark:bg-black text-stone-50 rounded-r-xl md:w-72 sm:w-36">
      <div className="px-3 py-4 ">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <button className="bg-slate-500 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow relative">
          <Plus className="mr-2"></Plus>Start a new project
        </button>
      </div>
    </aside>
  );
}
