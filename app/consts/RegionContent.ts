export type RegionData = {
  id: string;
  name: string;
  capital: string;
  population: string;
  primaryIndustry: string;
  status: string;
  description: string;
};

export const REGION_CONTENT: Record<string, RegionData> = {
  bosnia: {
    id: "bosnia",
    name: "SR Bosnia and Herzegovina",
    capital: "Sarajevo",
    population: "4,124,000",
    primaryIndustry: "Mining & Heavy Industry",
    status: "STRATEGIC CENTER",
    description:
      "The central republic. Highly diverse demographic makeup. Serves as the primary military manufacturing hub due to its defensible mountainous terrain.",
  },
  croatia: {
    id: "croatia",
    name: "SR Croatia",
    capital: "Zagreb",
    population: "4,601,000",
    primaryIndustry: "Tourism & Shipbuilding",
    status: "ECONOMIC GATEWAY",
    description:
      "Coastal republic generating significant foreign currency through Adriatic tourism. Highly industrialized with strong maritime infrastructure.",
  },
  macedonia: {
    id: "macedonia",
    name: "SR Macedonia",
    capital: "Skopje",
    population: "1,909,000",
    primaryIndustry: "Agriculture & Metallurgy",
    status: "SOUTHERN FRONTIER",
    description:
      "Southernmost republic. Crucial agricultural producer, particularly tobacco. Rebuilt capital following the devastating 1963 earthquake.",
  },
  montenegro: {
    id: "montenegro",
    name: "SR Montenegro",
    capital: "Titograd",
    population: "584,000",
    primaryIndustry: "Aluminum & Maritime",
    status: "COASTAL GUARD",
    description:
      "The smallest republic by population. Rugged terrain with crucial deep-water naval access. Proud history of partisan resistance.",
  },
  serbia: {
    id: "serbia",
    name: "SR Serbia",
    capital: "Belgrade",
    population: "9,313,000",
    primaryIndustry: "Administration & Manufacturing",
    status: "ADMINISTRATIVE HUB",
    description:
      "The largest republic and seat of the federal government. Contains two autonomous provinces (SAP Vojvodina, SAP Kosovo). The bureaucratic heart of the nation.",
  },
  slovenia: {
    id: "slovenia",
    name: "SR Slovenia",
    capital: "Ljubljana",
    population: "1,891,000",
    primaryIndustry: "Electronics & High-Tech",
    status: "INDUSTRIAL LEADER",
    description:
      "The most economically developed republic. Borders Western Europe. Responsible for a disproportionate amount of federal exports and technical innovation.",
  },
};
