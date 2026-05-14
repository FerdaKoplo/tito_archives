"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { DEFAULT_CHARACTER } from "../consts/SpriteConsts";
import DocumentView from "../components/document/DocumentView";
import {
  BIOGRAPHY,
  WRITING_CONTENT,
  WRITING_NAVIGATION_COLOR,
} from "../consts/ContentPage";
import { motion, AnimatePresence } from "framer-motion";
import {
  chibiVariants,
  documentVariants,
  emptyStateVariants,
  menuContainerVariants,
  menuItemVariants,
  sidebarVariants,
  textPaginationVariants,
} from "../consts/AnimationConst";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Pagination from "../components/shared/Pagination";
import PioonerGuide from "../components/commons/PioonerGuide";
import Stamp from "../components/shared/Stamp";
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

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

  const handleRandomSidebarBackgroundColor = useCallback((key: string) => {
    setActiveDocId(key);
    // random the indexes of the active color
    const randomIndex = Math.floor(
      Math.random() * WRITING_NAVIGATION_COLOR.length,
    );
    setActiveColor(WRITING_NAVIGATION_COLOR[randomIndex]);
  }, []);

  return (
    <div className="h-screen text-black  p-8 flex gap-8 overflow-hidden">
      <motion.aside
        variants={sidebarVariants}
        initial="hidden"
        animate="show"
        className="w-1/3 flex flex-col gap-6"
      >
        <Link href={"/"}>
          <motion.div
            className=" bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
            whileTap={{ scale: 0.84, y: 10 }}
          >
            <button className=" bg-black text-white p-3 border-b-4 border-black flex gap-10 text-2xl  items-center font-bold font-mono">
              <span>
                <MdKeyboardDoubleArrowLeft />
              </span>
              KEMBALI
            </button>
          </motion.div>
        </Link>

        <div className="bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
          <div className="bg-black text-white p-3 border-b-4 border-black flex justify-between items-center">
            <h2 className="text-xl font-bold uppercase tracking-wider font-serif">
              Archive Records
            </h2>
            <div className="font-mono text-xs opacity-70">SYS.OP_92</div>
          </div>

          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-0 p-3 bg-[#F4F1EA]"
          >
            {documentEntries.map(([key, doc]) => {
              const isActive = activeDocId === key;

              return (
                <motion.button
                  variants={menuItemVariants}
                  key={key}
                  onClick={() => handleRandomSidebarBackgroundColor(key)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-3 border-b-2 last:border-b-0 border-black transition-all font-mono text-sm font-bold uppercase flex justify-between items-center
                    ${
                      isActive
                        ? `${activeColor.bg} ${activeColor.text} border-x-4 border-black shadow-inner`
                        : "bg-transparent text-black hover:bg-[#C8102E] hover:text-white"
                    }`}
                >
                  <span className="truncate">{doc.title}</span>

                  {isActive && (
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${activeColor.dot}`}
                    ></span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <PioonerGuide />
      </motion.aside>

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
