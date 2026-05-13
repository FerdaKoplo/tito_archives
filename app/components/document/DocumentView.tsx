import { WRITING_CONTENT } from "@/app/consts/ContentPage";
import React from "react";
import Stamp from "../shared/Stamp";

interface DocumentViewProps {
  docId: string;
}

const DocumentView: React.FC<DocumentViewProps> = ({ docId }) => {
  const document = WRITING_CONTENT[docId];

  if (!document)
    return (
      <div className="p-8 bg-white border-4 border-black shadow-neubrutalism text-center">
        <p className="font-bold text-red-600">
          Error 404: Document '{docId}' missing from the archive.
        </p>
      </div>
    );

  const { title, date, content } = document;

  return (
    <article className="max-w-3xl flex flex-col min-h-full bg-[#F4F1EA] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      <header className="border-b-4 border-black flex flex-col">
        <div className="grid grid-cols-2 border-b-2 border-black bg-black text-white font-mono text-xs font-bold uppercase tracking-widest">
          <div className="px-4 py-2 border-r-2 border-white">DEPT: ARCHIVE</div>
          <div className="px-4 py-2 border-r-2 bg-[#C8102E] border-white text-center">
            {docId.substring(0, 6)}
          </div>
        </div>

        <div className="flex justify-between items-start p-8 relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          <div className="pr-12">
            <h1 className="text-4xl font-black uppercase font-serif tracking-tight leading-none mb-2">
              {title}
            </h1>
            <div className="flex gap-4 font-mono text-sm font-bold opacity-70">
              <p>DATE: {date ? date : "UNKNOWN"}</p>
            </div>
          </div>

          <div className="absolute right-8 top-4">
            <Stamp text="MARXIST" color="#2563EB" rotation={15} />
          </div>
        </div>
      </header>

      <div className="flex-grow p-8 relative font-mono text-sm md:text-base leading-relaxed text-black">
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-red-400/60"></div>

        <div className="pl-6 space-y-6">
          {content.map((paragraph, i) => (
            <p key={i} className="indent-8 text-justify tracking-tight">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="border-t-2 border-black p-2 px-8 flex justify-between font-mono text-xs opacity-50">
        <span>END OF FILE</span>
        <span>YUGOSLAV ARCHIVE COMMISION</span>
      </div>
    </article>
  );
};

export default DocumentView;

