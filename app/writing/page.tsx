"use client";

import React, { useCallback } from "react";
import DocumentView from "../components/document/DocumentView";
import {
  BIOGRAPHY,
  WRITING_CONTENT,
  WRITING_NAVIGATION_COLOR,
} from "../consts/ContentPage";
import { motion, AnimatePresence } from "framer-motion";
import {
  documentVariants,
  emptyStateVariants,
  textPaginationVariants,
} from "../consts/AnimationConst";
import Pagination from "../components/shared/Pagination";
import Stamp from "../components/shared/Stamp";
import TerminalSidebar from "../components/shared/TerminalSidebar";

const WritingPage = () => {
  const [activeDocId, setActiveDocId] = React.useState<string | null>(null);
  const [bioPage, setBioPage] = React.useState<number>(0);
  const [activeColor, setActiveColor] = React.useState(
    WRITING_NAVIGATION_COLOR[0],
  );
  const [direction, setDirection] = React.useState<number>(1);

  const documentEntries = Object.entries(WRITING_CONTENT);

  const handleNextBio = useCallback(() => {
    setDirection(1);
    setBioPage((prevPage: number) => {
      if (prevPage < BIOGRAPHY.biography.content.length - 1) {
        return prevPage + 1;
      }

      return prevPage;
    });
  }, []);

  const handlePrevBio = useCallback(() => {
    console.log("1. handlePrevBio triggered!");

    setDirection(-1);
    setBioPage((prevPage) => {
      console.log("2. Inside Updater. prevPage is:", prevPage);
      if (prevPage > 0) {
        return prevPage - 1;
      }
      return prevPage;
    });
  }, []);

  return (
    <div className="h-screen text-black  p-8 flex gap-8 overflow-hidden">
      <TerminalSidebar
        title="Writing Records"
        sysCode="SYS.OP_92"
        defaultItemName="BIOGRAPHY"
        activeDocId={activeDocId}
        setActiveDocId={setActiveDocId}
        documentEntries={documentEntries}
      />

      <main className="w-2/3  overflow-y-auto pr-4 pb-4">
        <AnimatePresence mode="wait">
          {activeDocId ? (
            <motion.div
              key={activeDocId}
              variants={documentVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="h-full"
            >
              <DocumentView docId={activeDocId} />
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              variants={emptyStateVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h-full flex flex-col items-start w-full max-w-3xl justify-between bg-[#F4F1EA] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="w-full border-b-4 border-black flex flex-col">
                <div className="flex bg-black text-white font-mono text-xs font-bold uppercase tracking-widest">
                  <div className="px-4 py-2 border-r-2 border-white bg-[#C8102E]">
                    CLASS: TERBATAS
                  </div>
                  <div className="px-4 py-2 border-r-2 border-white">
                    SUBJ: BIOGRAPHY
                  </div>
                  <div className="px-4 py-2 ml-auto">{bioPage + 1}</div>
                </div>

                <div className="flex justify-between bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] items-start p-6 relative">
                  <div>
                    <h1 className="text-4xl   font-black uppercase font-serif tracking-tight">
                      {BIOGRAPHY.biography.title}
                    </h1>
                    {BIOGRAPHY.biography.source && (
                      <p className="text-sm font-mono mt-1 text-gray-700 font-bold">
                        REF: {BIOGRAPHY.biography.source}
                      </p>
                    )}
                  </div>

                  <div className="relative right-4 top-2">
                    <Stamp color="#C8102E" text="ARCHIVED" rotation={-8} />
                  </div>
                </div>
              </div>

              <div className="font-mono text-base leading-relaxed p-8 h-48 flex items-start w-full relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-300/50"></div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={bioPage}
                    custom={direction}
                    variants={textPaginationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="pl-4 text-black font-medium"
                  >
                    {BIOGRAPHY.biography.content[bioPage]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="w-full border-t-4 border-black bg-white p-4">
                <Pagination
                  currentPage={bioPage}
                  totalPages={BIOGRAPHY.biography.content.length}
                  onNext={handleNextBio}
                  onPrev={handlePrevBio}
                  IntervalTime={2000}
                  isAutoPlay={true}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default WritingPage;
