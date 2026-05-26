"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ARCHIVE_MAP, SLOVENIA_ARCHIVE } from "@/app/consts/ArchiveConst";
import ArchiveRenderer from "@/app/components/commons/ArchiveRenderer";
import TerminalSidebar from "@/app/components/shared/TerminalSidebar";
import { useState } from "react";

const ArchivePage = () => {
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const [bioPage, setBioPage] = useState<number>(0);
  const searchParams = useSearchParams();
  const archiveId = searchParams.get("id");

  let activeEntry = null;
  if (archiveId) {
    for (const regionArchives of Object.values(ARCHIVE_MAP)) {
      if (regionArchives[archiveId]) {
        activeEntry = regionArchives[archiveId];
        break;
      }
    }
  }

  return (
    <div className="min-h-screen text-black p-8 flex flex-col items-center">
      <div className="w-full max-w-5xl mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold uppercase tracking-wide border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Kembali
        </Link>
      </div>

      <div className="w-full max-w-5xl p-8 ">
        <TerminalSidebar
          title="Writing Records"
          sysCode="SYS.OP_92"
          defaultItemName="BIOGRAPHY"
          activeDocId={activeDocId}
          documentEntries={}
          setActiveDocId={}
        />

        {!archiveId ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold uppercase">No archive selected.</p>
          </div>
        ) : !activeEntry ? (
          <div className="flex items-center justify-center h-full text-red-600">
            <p className="text-xl font-bold uppercase">
              Archive record [{archiveId}] classified or missing.
            </p>
          </div>
        ) : (
          <ArchiveRenderer activeEntry={activeEntry} />
        )}
      </div>
    </div>
  );
};

export default ArchivePage;
