import {
  ArchiveEntry,
  VisualArchiveInterface,
} from "@/app/interfaces/ArchiveInterface";
import TerritorialChange from "../map/TerritorialChange";

const ArchiveRenderer = ({ activeEntry }: { activeEntry: ArchiveEntry }) => {
  if (!activeEntry) return null;

  if (activeEntry.type === "visualization") {
    return (
      <div className="w-full h-full animate-fade-in">
        <TerritorialChange
          territoryData={activeEntry as VisualArchiveInterface}
        />
      </div>
    );
  }

  if (activeEntry.type === "text") {
    return (
      <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 animate-fade-in">
        <div className="border-b pb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-slate-800">
              {activeEntry.title}
            </h2>
            <span className="px-3 py-1 text-xs font-semibold bg-red-50 text-red-700 rounded-full">
              {activeEntry.date}
            </span>
          </div>
          <p className="text-xs text-slate-500 uppercase tracking-wider">
            {activeEntry.category}
          </p>
        </div>
        <div className="prose prose-slate max-w-none">
          {activeEntry.content?.map((paragraph, idx) => (
            <p key={idx} className="text-slate-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        {activeEntry.source && (
          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
            Source: {activeEntry.source}
          </div>
        )}
      </div>
    );
  }

  return <div>Unknown archive format.</div>;
};

export default ArchiveRenderer;
