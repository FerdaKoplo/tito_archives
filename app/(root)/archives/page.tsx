"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ARCHIVE_MAP } from "@/app/consts/ArchiveConst";
import ArchiveRenderer from "@/app/components/commons/ArchiveRenderer";
import TerminalSidebar from "@/app/components/shared/TerminalSidebar";
import { useState } from "react";
import { SidebarDocument } from "@/app/interfaces/NavigationInterface";

const ArchivePage = () => {
  const searchParams = useSearchParams();
  const regionParam = searchParams.get("region");
  const archiveId = searchParams.get("id");

  const [activeDocId, setActiveDocId] = useState<string | null>(archiveId);

  const activeRegion = regionParam ? ARCHIVE_MAP[regionParam] : null;

  const documentEntries = (activeRegion && activeRegion.documents
    ? Object.entries(activeRegion.documents)
    : []) as unknown as [string, SidebarDocument][];

  const activeEntry =
    activeRegion && activeDocId ? activeRegion.documents[activeDocId] : null;

  if (!activeRegion) {
    return (
      <div className="min-h-screen bg-[#E5E5E5] text-black flex items-center justify-center p-8">
        <div className="bg-[#C8102E] text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono max-w-lg text-center">
          <p className="text-2xl font-bold uppercase mb-4">Critical Error</p>
          <p className="mb-6">Region not specified or invalid in datalink.</p>
          <Link
            href="/"
            className="inline-block border-2 border-white px-6 py-2 bg-black hover:bg-white hover:text-black transition-colors font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Return to Map
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full mx-auto flex flex-col md:flex-row gap-8 items-center justify-center p-8 max-w-6xl">
      <TerminalSidebar
        title={`${activeRegion.regionName || regionParam} Archives`}
        sysCode="SYS.OP_92"
        defaultItemName="OVERVIEW"
        activeDocId={activeDocId}
        documentEntries={documentEntries}
        setActiveDocId={setActiveDocId}
      />

      <div className="flex-1 w-full min-w-0 flex flex-col shrink-0">
        {activeDocId === null ? (
          <div className="min-h-[500px] bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col animate-fade-in">
            <div className="bg-black text-white p-3 border-b-4 border-black flex justify-between items-center">
              <h2 className="text-lg font-bold uppercase tracking-wider font-serif">
                System Overview
              </h2>
              <div className="font-mono text-xs opacity-70 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                DATALINK
              </div>
            </div>
            <div className="flex-1 bg-[#F4F1EA] p-8 flex flex-col relative overflow-hidden">
              <h3 className="text-3xl font-black uppercase font-serif border-b-4 border-black pb-4 mb-6 text-black">
                {activeRegion.regionName || regionParam} Regional Data
              </h3>
              <p className="font-mono text-sm leading-relaxed text-black mb-4">
                Please select a classified document or visual archive from the
                terminal on the left to begin decryption and viewing.
              </p>
              <div className="mt-auto border-l-4 border-[#C8102E] pl-4">
                <p className="font-mono font-bold text-xs uppercase opacity-70 text-black">
                  SYSTEM STATUS: STANDBY
                </p>
                <p className="font-mono font-bold text-xs uppercase opacity-70 text-black">
                  AWAITING USER INPUT...
                </p>
              </div>
            </div>
          </div>
        ) : !activeEntry ? (
          <div className="min-h-[500px] bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col animate-fade-in">
            <div className="bg-black text-white p-3 border-b-4 border-black flex justify-between items-center">
              <h2 className="text-lg font-bold uppercase tracking-wider font-serif text-[#C8102E]">
                Security Alert
              </h2>
              <div className="font-mono text-xs opacity-70 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                DISCONNECTED
              </div>
            </div>
            <div className="flex-1 bg-[#F4F1EA] p-8 flex flex-col items-center justify-center relative overflow-hidden text-center">
              <div className="text-[#C8102E] mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p className="text-xl font-bold uppercase font-mono text-black border-4 border-black p-4 bg-white shadow-[8px_8px_0px_0px_#C8102E]">
                Archive record [{activeDocId}] classified or missing.
              </p>
            </div>
          </div>
        ) : (
          <ArchiveRenderer activeEntry={activeEntry} />
        )}
      </div>
    </div>
  );
};

export default ArchivePage;
