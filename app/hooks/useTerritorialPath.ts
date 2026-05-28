import { geoArea, geoIdentity, geoMercator, geoPath } from "d3-geo";
import { useMemo } from "react";
import { GeoFeatureCollection, GeoFeature } from "../interfaces/GeoInterface";

const useTerritorialPath = (
  geoData: GeoFeatureCollection | null,
  width: number,
  height: number,
  targetEntityName?: string,
) => {
  return useMemo(() => {
    if (!geoData || !targetEntityName) return null;

    try {
      const isCollection = geoData.type === "FeatureCollection";
      let primaryFeature = null;

      if (isCollection) {
        primaryFeature =
          geoData.features.find((f: GeoFeature) => {
            const nameInJson =
              f.properties?.cntry_name ||
              f.properties?.CNTRY_NAME ||
              f.properties?.name ||
              "";

            return (
              nameInJson.toString().trim().toLowerCase() ===
              targetEntityName.trim().toLowerCase()
            );
          }) || null;

        if (!primaryFeature) {
          const availableNames = Array.from(
            new Set(
              geoData.features.map(
                (f: GeoFeature) =>
                  f.properties?.cntry_name || f.properties?.name || "",
              ),
            ),
          );
          console.warn(
            `⚠️ SYSTEM ERROR: Could not find "${targetEntityName}". Available names in JSON:`,
            availableNames,
          );
          return null;
        }
      } else {
        primaryFeature = geoData;
      }

      if (
        !primaryFeature ||
        (!("geometry" in primaryFeature) && !("features" in primaryFeature))
      ) {
        return null;
      }

      const projection = geoIdentity()
        .reflectY(true)
        .fitExtent(
          [
            [40, 40],
            [width - 40, height - 40],
          ],
          primaryFeature as unknown as Parameters<
            ReturnType<typeof geoIdentity>["fitExtent"]
          >[1],
        );

      const pathGenerator = geoPath().projection(projection);
      const svgPath =
        pathGenerator(
          primaryFeature as unknown as Parameters<typeof pathGenerator>[0],
        ) || "";

      const properties =
        "properties" in primaryFeature ? primaryFeature.properties : {};

      return {
        svgPath,
        properties,
      };
    } catch (error) {
      console.error("D3 Projection error:", error);
      return null;
    }
  }, [geoData, width, height, targetEntityName]);
};

export default useTerritorialPath;
