import { Region } from "../stores/TourStore";

export interface GeoFeatureProperties {
  NAME?: string;
  [key: string]: unknown;
}

export interface GeoFeature {
  type: "Feature";
  properties: GeoFeatureProperties;
  geometry: unknown;
}

export interface GeoFeatureCollection {
  type: "FeatureCollection";
  features: GeoFeature[];
}

export interface MapPathData {
  uniqueKey: string;
  stateId: Region;
  svgPath: string;
  centroid: [number, number];
  displayName: string;
}
