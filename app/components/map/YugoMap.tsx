"use client";
import { useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { Region, useTourStore } from "../../stores/TourStore";
import { REGION } from "../../consts/MapConsts";
import RegionBubble from "./RegionBubble";
import { FormatName } from "@/app/helpers/FormatName";
import {
  GeoFeature,
  GeoFeatureCollection,
  MapPathData,
} from "@/app/interfaces/GeoInterface";

interface YugoMapProps {
  geoData: GeoFeatureCollection | null;
}

const YugoMap = ({ geoData }: YugoMapProps) => {
  const { currentRegion, setRegion } = useTourStore();

  const width = 900;
  const height = 600;

  const mapPaths = useMemo(() => {
    if (!geoData || !geoData.features) return [];

    const filteredFeatures = geoData.features.filter((feature: GeoFeature) => {
      const rawName = feature.properties.NAME?.toLowerCase() || "";
      return Object.prototype.hasOwnProperty.call(REGION, rawName);
    });

    const yugoslaviaGeoJSON = {
      type: "FeatureCollection",
      features: filteredFeatures,
    };

    const projection = geoMercator().fitSize(
      [width, height],
      yugoslaviaGeoJSON as unknown as Parameters<typeof projection.fitSize>[1],
    );
    const pathGenerator = geoPath().projection(projection);

    return yugoslaviaGeoJSON.features.map((feature: GeoFeature) => {
      const rawName = feature.properties.NAME?.toLowerCase() || "";
      const mappedRegionId = REGION[rawName];

      const centroid = pathGenerator.centroid(
        feature as unknown as Parameters<typeof pathGenerator.centroid>[0],
      );

      return {
        uniqueKey: rawName,
        stateId: mappedRegionId,
        svgPath:
          pathGenerator(
            feature as unknown as Parameters<typeof pathGenerator>[0],
          ) || "",
        centroid: centroid,
        displayName: FormatName(mappedRegionId),
      };
    });
  }, [geoData]);

  const activePathData = mapPaths.find(
    (p: MapPathData) => p.stateId === currentRegion,
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4 relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {mapPaths.map((republic: MapPathData) => {
          const isActive = currentRegion === republic.stateId;

          return (
            <path
              key={republic.uniqueKey}
              d={republic.svgPath}
              onClick={() => setRegion(republic.stateId)}
              className={`
                                cursor-pointer transition-all duration-200
                                stroke-black stroke-[2px] hover:stroke-[4px]
                                ${isActive ? "fill-[#D91616]" : "fill-[#E8EDF2] hover:fill-[#B4C2D1]"}
                            `}
            />
          );
        })}

        {activePathData?.centroid && (
          <RegionBubble
            centroid={activePathData.centroid}
            name={activePathData.displayName}
            scale={1.5}
          />
        )}
      </svg>
    </div>
  );
};

export default YugoMap;
