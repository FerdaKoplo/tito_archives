"use client";

import DossierPanel from "@/app/components/dossier/DossierPanel";
import YugoMap from "@/app/components/map/YugoMap";
import { useTourStore } from "@/app/stores/TourStore";
import europeGeoData from "@/app/data/europe.json";

const InteractiveMapSection = () => {
  const currentRegion = useTourStore((state) => state.currentRegion);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 items-center justify-center">
      <div className=" bg-[#E5E5E5] w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <YugoMap geoData={europeGeoData} />
      </div>

      <DossierPanel activeRegionId={currentRegion} />
    </div>
  );
};

export default InteractiveMapSection;
