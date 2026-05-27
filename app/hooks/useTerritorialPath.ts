import { geoArea, geoIdentity, geoMercator, geoPath } from "d3-geo";
import { useMemo } from "react";

const useTerritorialPath = (
  geoData: any,
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
        primaryFeature = geoData.features.find((f: any) => {
          const nameInJson =
            f.properties?.cntry_name ||
            f.properties?.CNTRY_NAME ||
            f.properties?.name ||
            "";

          return (
            nameInJson.toString().trim().toLowerCase() ===
            targetEntityName.trim().toLowerCase()
          );
        });

        if (!primaryFeature) {
          const availableNames = Array.from(
            new Set(
              geoData.features.map(
                (f: any) => f.properties?.cntry_name || f.properties?.name,
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

      if (!primaryFeature || !primaryFeature.geometry) {
        return null;
      }

      const projection = geoIdentity()
        .reflectY(true)
        .fitExtent(
          [
            [40, 40],
            [width - 40, height - 40],
          ],
          primaryFeature,
        );

      const pathGenerator = geoPath().projection(projection);
      const svgPath = pathGenerator(primaryFeature) || "";

      return {
        svgPath,
        properties: primaryFeature.properties || {},
      };
    } catch (error) {
      console.error("D3 Projection error:", error);
      return null;
    }
  }, [geoData, width, height, targetEntityName]);
};

export default useTerritorialPath;
