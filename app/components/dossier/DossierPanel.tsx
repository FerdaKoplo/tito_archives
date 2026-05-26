import { REGION_CONTENT } from "@/app/consts/RegionContent";
import { AnimatePresence, motion } from "framer-motion";
import Stamp from "../shared/Stamp";
import { ARCHIVE_MAP, SLOVENIA_ARCHIVE } from "@/app/consts/ArchiveConst";
import Link from "next/link";

interface DossierPanelProps {
  activeRegionId: string | null;
}

const DossierPanel: React.FC<DossierPanelProps> = ({ activeRegionId }) => {
  const data = activeRegionId ? REGION_CONTENT[activeRegionId] : null;

  const activeArchive = activeRegionId ? ARCHIVE_MAP[activeRegionId] : null;

  return (
    <div className=" h-[500px] bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col ">
      <div className="bg-black text-white p-3 border-b-4 border-black flex justify-between items-center">
        <h2 className="text-lg font-bold uppercase tracking-wider font-serif">
          Subject Dossier
        </h2>
        <div className="font-mono text-xs opacity-70 flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${data ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
          ></div>
          DATALINK
        </div>
      </div>

      <div className="flex-1 bg-[#F4F1EA] relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {!data ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-6 opacity-50"
            >
              <div className="w-16 h-16 border-4 border-dashed border-black rounded-full animate-spin-slow mb-4" />
              <p className="font-mono font-bold text-sm uppercase">
                Awaiting Region Selection...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex-1 gap-3 flex flex-col p-5 overflow-y-auto"
            >
              <div className="border-b-2 border-black p-4  my-4 text-black font-mono text-sm">
                <div className="flex flex-col gap-6 px-8">
                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-bold">DESIGNATION:</span>
                    <span className="text-right">{data.name}</span>
                  </div>

                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-bold">CAPITAL:</span>
                    <span className="text-right">{data.capital}</span>
                  </div>

                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-bold">POP. (1981):</span>
                    <span className="text-right">{data.population}</span>
                  </div>

                  <div className="flex justify-between border-b border-gray-300 pb-1">
                    <span className="font-bold mb-1">PRIMARY INDUSTRY:</span>
                    <span className="text-black">{data.primaryIndustry}</span>
                  </div>
                </div>
              </div>

              <div className="px-8 flex-1 mb-4">
                <p className="font-serif text-sm leading-relaxed text-black ">
                  {data.description}
                </p>
              </div>

              {activeArchive && (
                <div className="px-8 pb-4 mt-auto">
                  <Link
                    href={`/archives?region=${activeRegionId}`}
                    className="text-center p-3 border-2 border-black bg-[#C8102E] text-white hover:bg-black transition-colors duration-200 block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                  >
                    <span className="block font-bold uppercase font-mono tracking-widest text-sm">
                      Access Regional Archives
                    </span>
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DossierPanel;
