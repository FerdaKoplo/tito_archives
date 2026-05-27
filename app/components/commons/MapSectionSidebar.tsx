"use client";

import {
  menuContainerVariants,
  menuItemVariants,
  sidebarVariants,
} from "@/app/consts/AnimationConst";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useTourStore } from "@/app/stores/TourStore";
import { REGION_CONTENT, SPRITE_COMMENTARY } from "@/app/consts/RegionContent";
import PioonerGuide from "../shared/PioonerGuide";
import useSound from "use-sound";

const MapSectionSidebar = () => {
  const currentRegion = useTourStore((state) => state.currentRegion);
  const setRegion = useTourStore((state) => state.setRegion);

  const republicKeys = Object.keys(REGION_CONTENT) as Region[];
  const guideText = SPRITE_COMMENTARY[currentRegion]?.description;

  const [playClick] = useSound("sounds/ui_hacking_charenter_01.wav");

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
      className="w-full flex flex-col gap-6"
    >
      <div className="bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
        <div className="bg-black text-white p-3 border-b-4 border-black flex justify-between items-center">
          <h2 className="text-xl font-bold uppercase tracking-wider font-serif">
            MAP CONTROLS
          </h2>
          <div className="font-mono text-xs opacity-70">NAV_SYS</div>
        </div>

        <motion.div
          variants={menuContainerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-0 p-3 bg-[#F4F1EA]"
        >
          <motion.button
            variants={menuItemVariants}
            onClick={() => setRegion("yugoslavia")}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`text-left p-3 border-b-2 border-black transition-all font-mono text-sm font-bold uppercase flex justify-between items-center
                ${
                  currentRegion === "yugoslavia"
                    ? "bg-black text-white border-x-4 border-black shadow-inner"
                    : "bg-transparent text-black hover:bg-[#C8102E] hover:text-white"
                }`}
          >
            <span>FEDERAL OVERVIEW</span>
            {currentRegion === "yugoslavia" && (
              <span className="w-2 h-2 rounded-full shrink-0 bg-[#C8102E]"></span>
            )}
          </motion.button>

          {republicKeys.map((key) => {
            const isActive = currentRegion === key;
            const regionData = REGION_CONTENT[key];

            return (
              <motion.button
                variants={menuItemVariants}
                key={key}
                onClick={() => {
                  playClick();
                  setRegion(key as Region);
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left p-3 border-b-2 last:border-b-0 border-black transition-all font-mono text-sm font-bold uppercase flex justify-between items-center
                    ${
                      isActive
                        ? "bg-[#8A9A86] text-black border-x-4 border-black shadow-inner"
                        : "bg-transparent text-black hover:bg-[#C8102E] hover:text-white"
                    }`}
              >
                <span className="truncate min-w-0 block">
                  {regionData?.name || key}
                </span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full shrink-0 bg-white border border-black"></span>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <PioonerGuide contextualText={guideText} />
    </motion.aside>
  );
};

export default MapSectionSidebar;
