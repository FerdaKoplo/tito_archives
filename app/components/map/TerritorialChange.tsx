import useTerritorialPath from "@/app/hooks/useTerritorialPath";
import { VisualArchiveInterface } from "@/app/interfaces/ArchiveInterface";
import { useTourStore } from "@/app/stores/TourStore";
import { useEffect, useState } from "react";

const geoDataCache: Record<string, any> = {};

const TerritorialChange = ({
  territoryData,
}: {
  territoryData: VisualArchiveInterface;
}) => {
  const [geoData, setGeoData] = useState<any>(
    () => geoDataCache[territoryData.geoDataUrl] || null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const mapWidth = 800;
  const mapHeight = 500;

  const mapVisuals = useTerritorialPath(
    geoData,
    mapWidth,
    mapHeight,
    territoryData.targetEntity,
  );

  useEffect(() => {
    const fetchMapData = async () => {
      if (!territoryData.geoDataUrl) return;

      if (geoDataCache[territoryData.geoDataUrl]) {
        setGeoData(geoDataCache[territoryData.geoDataUrl]);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(territoryData.geoDataUrl);

        if (!response.ok) {
          throw new Error(
            "Failed to load historical boundaries from datalink.",
          );
        }

        const data = await response.json();
        geoDataCache[territoryData.geoDataUrl] = data;
        setGeoData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMapData();
  }, [territoryData.geoDataUrl]);

  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-[#F4F1EA] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
        <p className="text-black font-mono font-bold uppercase">
          [ RETRIEVING CARTOGRAPHIC ARCHIVES... ]
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 text-white bg-[#C8102E] border-4 border-black font-mono shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <p className="font-bold uppercase">System Error:</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0 w-full max-w-3xl bg-[#F4F1EA] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="w-full border-b-4 border-black flex flex-col">
        <div className="flex bg-black text-white font-mono text-xs font-bold uppercase tracking-widest">
          <div className="px-4 py-2 border-r-2 border-white bg-[#C8102E]">
            VISUAL_DATA
          </div>
          <div className="px-4 py-2 border-r-2 border-white">
            {territoryData.targetEntity.toUpperCase()}
          </div>
        </div>

        <div className="bg-white p-6 border-b-4 border-black">
          <h2 className="text-3xl font-black uppercase font-serif tracking-tight text-black mb-2">
            {territoryData.title}
          </h2>
          <p className="text-sm font-mono text-black leading-relaxed">
            {territoryData.description}
          </p>
        </div>
      </div>

      <div className="w-full bg-[#B4C2D1] relative overflow-hidden flex justify-center items-center p-4">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(black 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        ></div>
        <svg
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
          className="w-full relative z-10"
          style={{ minHeight: "400px" }}
        >
          {mapVisuals?.svgPath ? (
            <path
              d={mapVisuals.svgPath}
              fill="#F4F1EA"
              stroke="black"
              strokeWidth={3}
              strokeLinejoin="miter"
              className="hover:fill-[#C8102E] transition-colors duration-200 cursor-crosshair"
            />
          ) : (
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="black"
              className="font-mono font-bold"
            >
              NO GEODATA FOUND FOR: {territoryData.targetEntity.toUpperCase()}
            </text>
          )}
        </svg>
      </div>
    </div>
  );
};

export default TerritorialChange;
