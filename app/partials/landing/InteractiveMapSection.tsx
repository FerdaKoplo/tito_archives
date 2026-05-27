"use client";

import DossierPanel from "@/app/components/dossier/DossierPanel";
import YugoMap from "@/app/components/map/YugoMap";
import { useTourStore } from "@/app/stores/TourStore";
import europeGeoData from "@/app/data/europe.json";
import MapSectionSidebar from "@/app/components/commons/MapSectionSidebar";

const InteractiveMapSection = () => {
  const currentRegion = useTourStore((state) => state.currentRegion);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-row gap-8 items-center justify-center p-8">
      <div className="">
        <MapSectionSidebar />
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-8 shrink-0">
        <div className="bg-[#E5E5E5] w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
          <YugoMap geoData={europeGeoData} />
        </div>
        <DossierPanel activeRegionId={currentRegion} />
      </div>
    </div>
  );
};

export default InteractiveMapSection;
