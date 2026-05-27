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
      <div className="flex flex-col gap-0 w-full max-w-3xl bg-[#F4F1EA] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-fade-in">
        <div className="w-full border-b-4 border-black flex flex-col">
          <div className="flex bg-black text-white font-mono text-xs font-bold uppercase tracking-widest">
            <div className="px-4 py-2 border-r-2 border-white bg-[#C8102E]">
              TEXT_RECORD
            </div>
            <div className="px-4 py-2 border-r-2 border-white">
              {activeEntry.category}
            </div>
            <div className="px-4 py-2 ml-auto text-[#B4C2D1]">
              DATE: {activeEntry.date || "UNKNOWN"}
            </div>
          </div>

          <div className="bg-white p-6 border-b-4 border-black">
            <h2 className="text-3xl font-black uppercase font-serif tracking-tight text-black">
              {activeEntry.title}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-8 font-serif text-black flex flex-col gap-8">
          {activeEntry.content && activeEntry.content.length > 0 && (
            <div className="flex flex-col gap-4">
              {activeEntry.content.map((paragraph, idx) => (
                <p
                  key={`content-${idx}`}
                  className="leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {activeEntry.sections?.map((section, sIdx) => (
            <div key={`section-${sIdx}`} className="flex flex-col gap-4">
              {section.subtitle && (
                <h3 className="font-bold text-xl uppercase font-mono border-b-2 border-black inline-block self-start pb-1">
                  {section.subtitle}
                </h3>
              )}
              <div className="flex flex-col gap-4">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={`paragraph-${sIdx}-${pIdx}`}
                    className="leading-relaxed text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {activeEntry.source && (
          <div className="bg-white p-4 font-mono text-xs font-bold border-t-4 border-black uppercase text-black flex items-center gap-2">
            <span className="text-[#C8102E]">{">"}</span> SOURCE_ORIGIN:{" "}
            {activeEntry.source}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full p-6 text-white bg-[#C8102E] border-4 border-black font-mono shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <p className="font-bold uppercase">System Error:</p>
      <p>Unknown archive format detected.</p>
    </div>
  );
};

export default ArchiveRenderer;
