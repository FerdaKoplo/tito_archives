interface BaseInterface {
  id: string;
  title: string;
  type: "text" | "visualization";
  category: "History" | "Geography" | "Demographics";
}

export interface TextSection {
  subtitle: string;
  paragraphs: string[];
}

export interface TextArchiveInterface extends BaseInterface {
  type: "text";
  date?: string;
  sections: TextSection[];
  source: string;
}

export interface VisualArchiveInterface extends BaseInterface {
  type: "visualization";
  dateRange: string;
  visualizationId: "territory_timeline" | "population_density";
  geoDataUrl: string;
  description: string;
  targetEntity: string;
}

export type ArchiveEntry = TextArchiveInterface | VisualArchiveInterface;
