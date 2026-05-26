"use client";

import { DEFAULT_CHARACTER } from "@/app/consts/SpriteConsts";
import useBubbleDialog from "@/app/hooks/useBubbleDialog";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface PioonerGuideProps {
  contextualText?: string | null;
}

const PioonerGuide: React.FC<PioonerGuideProps> = ({ contextualText }) => {
  const {
    activeBubbleText,
    activeQuote,
    randomQuote,
    toggleBubble,
    closeBubble,
  } = useBubbleDialog();

  const displayedText = contextualText || activeQuote;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contextualText && !activeBubbleText) {
      toggleBubble();
    }
  }, [activeBubbleText, toggleBubble, contextualText]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeBubble();
      }
    };

    if (activeBubbleText) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeBubbleText, closeBubble]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center mt-auto"
    >
      <AnimatePresence>
        {activeBubbleText && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-4 p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10 w-full max-w-xs"
          >
            <p className="font-mono text-sm italic  leading-relaxed  text-black">
              {displayedText}
            </p>

            {!contextualText && (
              <button
                onClick={randomQuote}
                className="mt-3 text-xs font-bold underline hover:text-[#D91616] transition-colors"
              >
                Tell me another
              </button>
            )}

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-4 border-b-4 border-black rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="bg-blue-200 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-gray-100 transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none"
        onClick={toggleBubble}
      >
        <Image
          src={DEFAULT_CHARACTER.idle}
          alt={DEFAULT_CHARACTER.characterName}
          unoptimized
          style={{ imageRendering: "pixelated" }}
          width={160}
          height={160}
        />
      </div>
    </div>
  );
};

export default PioonerGuide;
