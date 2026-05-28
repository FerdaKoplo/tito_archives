import { WRITING_NAVIGATION_COLOR } from "@/app/consts/ContentPage";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
  menuContainerVariants,
  menuItemVariants,
  sidebarVariants,
} from "@/app/consts/AnimationConst";
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import PioonerGuide from "./PioonerGuide";
import { SidebarDocument } from "@/app/interfaces/NavigationInterface";

interface TerminalSidebarProps {
  title: string;
  sysCode: string;
  defaultItemName: string;
  activeDocId: string | null;
  setActiveDocId: (id: string | null) => void;
  documentEntries: [string, SidebarDocument][];
}

const TerminalSidebar: React.FC<TerminalSidebarProps> = ({
  activeDocId,
  title,
  defaultItemName,
  documentEntries,
  setActiveDocId,
  sysCode,
}) => {
  const [activeColor, setActiveColor] = useState(WRITING_NAVIGATION_COLOR[0]);

  const handleElementClick = useCallback(
    (key: string) => {
      setActiveDocId(key);
      const randomIndex = Math.floor(
        Math.random() * WRITING_NAVIGATION_COLOR.length,
      );
      setActiveColor(WRITING_NAVIGATION_COLOR[randomIndex]);
    },
    [setActiveDocId],
  );
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
      className="w-1/3 flex flex-col gap-6 shrink-0"
    >
      <Link href={"/"}>
        <motion.div
          className="bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col"
          whileTap={{ scale: 0.84, y: 10 }}
        >
          <button className="bg-black text-white p-3 border-b-4 border-black flex gap-10 text-2xl items-center font-bold font-mono hover:text-[#C8102E] transition-colors">
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
            {title}
          </h2>
          <div className="font-mono text-xs opacity-70">{sysCode}</div>
        </div>

        <motion.div
          variants={menuContainerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-0 p-3 bg-[#F4F1EA]"
        >
          <motion.button
            variants={menuItemVariants}
            onClick={() => setActiveDocId(null)}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
            className={`text-left p-3 border-b-2 border-black transition-all font-mono text-sm font-bold uppercase flex justify-between items-center
                ${activeDocId === null ? "bg-black text-white border-x-4 border-black shadow-inner" : "bg-transparent text-black hover:bg-[#C8102E] hover:text-white"}`}
          >
            <span>{defaultItemName}</span>
            {activeDocId === null && (
              <span className="w-2 h-2 rounded-full shrink-0 bg-[#C8102E]"></span>
            )}
          </motion.button>

          {documentEntries.map(([key, doc]) => {
            const isActive = activeDocId === key;
            return (
              <motion.button
                variants={menuItemVariants}
                key={key}
                onClick={() => handleElementClick(key)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left p-3 border-b-2 last:border-b-0 border-black transition-all font-mono text-sm font-bold uppercase flex justify-between items-center
                    ${isActive ? `${activeColor.bg} ${activeColor.text} border-x-4 border-black shadow-inner` : "bg-transparent text-black hover:bg-[#C8102E] hover:text-white"}`}
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
  );
};

export default TerminalSidebar;
