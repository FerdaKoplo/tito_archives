"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  isAutoPlay: boolean;
  IntervalTime: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  isAutoPlay,
  IntervalTime,
}) => {
  const [autoDirection, setAutoDirection] = useState<"forward" | "backward">(
    "forward",
  );

  useEffect(() => {
    console.log("TIMER TICK ->", {
      direction: autoDirection,
      currentPage: currentPage,
      totalPages: totalPages,
    });
    if (!isAutoPlay || totalPages <= 1) {
      return;
    }

    const timer = setInterval(() => {
      if (autoDirection === "forward") {
        if (currentPage >= totalPages - 1) {
          setAutoDirection("backward");
          onPrev();
        } else {
          onNext();
        }
      } else {
        if (currentPage <= 0) {
          setAutoDirection("forward");
          onNext();
        } else {
          onPrev();
        }
      }
    }, IntervalTime);
    return () => {
      console.log("EFFECT KILLED: Destroying timer");
      clearInterval(timer);
    };
  }, [
    IntervalTime,
    currentPage,
    totalPages,
    isAutoPlay,
    onNext,
    onPrev,
    autoDirection,
  ]);

  const handleManualNext = () => {
    setAutoDirection("forward");
    onNext();
  };

  const handleManualPrev = () => {
    setAutoDirection("backward");
    onPrev();
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-between w-full items-center gap-4 mt-auto">
      <motion.button
        whileHover={currentPage === 0 ? {} : { scale: 1.02, x: 5 }}
        whileTap={currentPage === 0 ? {} : { scale: 0.98 }}
        onClick={handleManualPrev}
        disabled={currentPage === 0}
        className={`text-left p-3 border-2 border-black transition-colors font-mono text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    ${
      currentPage === 0
        ? "bg-black text-white cursor-not-allowed shadow-none translate-y-1 translate-x-1 pointer-events-none"
        : "bg-white text-black hover:bg-gray-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
    }`}
      >
        <IoIosArrowBack />
      </motion.button>

      <span className="font-mono font-bold text-sm text-black">
        {currentPage + 1} / {totalPages}
      </span>

      <motion.button
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleManualNext}
        disabled={currentPage === totalPages - 1}
        className={`text-left p-3 border-2 border-black transition-colors font-mono text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          ${
            currentPage === totalPages - 1
              ? "bg-black text-white cursor-not-allowed shadow-none translate-y-1 translate-x-1"
              : "bg-white text-black hover:bg-gray-200 active:translate-y-1 active:translate-x-1 active:shadow-none"
          }`}
      >
        <IoIosArrowForward />
      </motion.button>
    </div>
  );
};

export default Pagination;
