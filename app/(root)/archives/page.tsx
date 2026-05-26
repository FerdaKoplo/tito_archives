"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ARCHIVE_MAP, SLOVENIA_ARCHIVE } from "@/app/consts/ArchiveConst";
import ArchiveRenderer from "@/app/components/commons/ArchiveRenderer";
import TerminalSidebar from "@/app/components/shared/TerminalSidebar";
import { useMemo, useState } from "react";
import { div } from "framer-motion/client";

const ArchivePage = () => {
  const searchParams = useSearchParams();

  const regionParam = searchParams.get("region");
  const archiveId = searchParams.get("id");

  const [activeDocId, setActiveDocId] = useState<string | null>(archiveId);

  const activeRegion = regionParam ? ARCHIVE_MAP[regionParam] : null;

  const documentEntries = activeRegion
    ? Object.entries(activeRegion.documents)
    : [];

  const activeEntry =
    activeRegion && activeDocId ? activeRegion.documents[activeDocId] : null;

  if (!activeRegion) {
    return (
      <div className="min-h-screen text-black flex items-center justify-center p-8">
        <p className="text-xl font-bold uppercase bg-white p-4 border-4 border-black">
          Critical Error: Region not specified in datalink.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-row gap-8 items-center justify-center p-8">
      <TerminalSidebar
        title={`${activeRegion.regionName} Archives`}
        sysCode="SYS.OP_92"
        defaultItemName="OVERVIEW"
        activeDocId={activeDocId}
        documentEntries={documentEntries}
        setActiveDocId={setActiveDocId}
      />

      <div className="flex-1 min-w-0 flex flex-col gap-8 shrink-0  ">
        {activeDocId === null ? (
          <div className=" bg-[#E5E5E5] w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold uppercase text-gray-500">
                Select a document from the regional datalink.
              </p>
            </div>
          </div>
        ) : !activeEntry ? (
          <div className=" bg-[#E5E5E5] w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
            <div className="flex items-center justify-center h-full text-red-600">
              <p className="text-xl font-bold uppercase">
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
