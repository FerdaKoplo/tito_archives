import { ArchiveEntry } from "../interfaces/ArchiveInterface";

export const SLOVENIA_ARCHIVE: Record<string, ArchiveEntry> = {
  "slo-hist-01": {
    id: "slo-hist-01",
    type: "text",
    category: "History",
    title: "Post-War Industrialization",
    date: "1948",
    content: [
      "After World War II, Slovenia became part of the Socialist Federal Republic of Yugoslavia...",
      "The republic underwent rapid industrialization under Tito's economic reforms...",
    ],
    source: "Federal Archives",
  },
  "slo-geo-01": {
    id: "slo-geo-01",
    type: "visualization",
    category: "Geography",
    title: "Slovenian Territory Through History",
    dateRange: "1918–1991",
    visualizationId: "territory_timeline",
    description:
      "Territorial changes of Slovenia from the Kingdom of Serbs, Croats and Slovenes through the dissolution of Yugoslavia.",
    geoDataUrl: "/map.json",
    targetEntity: "Slovenia",
  },
};

export const CROATIA_ARCHIVE: Record<string, ArchiveEntry> = {
  "cro-hist-01": {
    id: "cro-hist-01",
    type: "text",
    category: "History",
    title: "Maritime Infrastructure & Coastal Tourism",
    date: "1965",
    content: [
      "SR Croatia served as the primary naval and commercial maritime hub of the Federation.",
      "The development of the Adriatic Highway (Jadranska magistrala) revolutionized coastal tourism, generating crucial foreign currency for the state.",
    ],
    source: "Federal Secretariat for Tourism",
  },
  "cro-geo-01": {
    id: "cro-geo-01",
    type: "visualization",
    category: "Geography",
    title: "Croatian Territorial Evolution",
    dateRange: "1918–1991",
    visualizationId: "territory_timeline",
    description:
      "Observe the shifting boundaries from the Kingdom of Croatia-Slavonia to the Banovina of Croatia, and finally the Socialist Republic.",
    geoDataUrl: "/map.json",
    targetEntity: "Croatia",
  },
};

export const BOSNIA_ARCHIVE: Record<string, ArchiveEntry> = {
  "bih-hist-01": {
    id: "bih-hist-01",
    type: "text",
    category: "History",
    title: "The Fortress of the Federation",
    date: "1953",
    content: [
      "Due to its central location and defensible mountainous terrain, SR Bosnia and Herzegovina was chosen as the primary base for the Yugoslav military industry.",
      "The republic became a symbol of 'Brotherhood and Unity', housing a highly diverse demographic makeup.",
    ],
    source: "Ministry of Defense Archives",
  },
  "bih-geo-01": {
    id: "bih-geo-01",
    type: "visualization",
    category: "Geography",
    title: "Bosnian Territorial Evolution",
    dateRange: "1878–1992",
    visualizationId: "territory_timeline",
    description:
      "Tracing the borders from the Austro-Hungarian condominium period to its establishment as a central Socialist Republic.",
    geoDataUrl: "map.json",
    targetEntity: "Bosnia-Herzegovina",
  },
};

export const SERBIA_ARCHIVE: Record<string, ArchiveEntry> = {
  "srb-hist-01": {
    id: "srb-hist-01",
    type: "text",
    category: "History",
    title: "The Administrative Core",
    date: "1974",
    content: [
      "As the largest republic and seat of the federal capital (Belgrade), SR Serbia functioned as the bureaucratic heart of the nation.",
      "The 1974 Constitution formalized the status of its two autonomous provinces: SAP Vojvodina to the north and SAP Kosovo to the south.",
    ],
    source: "Federal Assembly Records",
  },
  "srb-geo-01": {
    id: "srb-geo-01",
    type: "visualization",
    category: "Geography",
    title: "Serbian Territorial Evolution",
    dateRange: "1912–1992",
    visualizationId: "territory_timeline",
    description:
      "Borders spanning the Balkan Wars, the Kingdom of Serbia, the interwar Banovinas, and the post-WWII socialist framework.",
    geoDataUrl: "map.json",
    targetEntity: "Serbia",
  },
};

export const MACEDONIA_ARCHIVE: Record<string, ArchiveEntry> = {
  "mac-hist-01": {
    id: "mac-hist-01",
    type: "text",
    category: "History",
    title: "The Rebuilding of Skopje",
    date: "1963",
    content: [
      "Following the devastating 1963 earthquake, the capital city of Skopje was rebuilt through a massive campaign of international solidarity.",
      "The republic also stood as a crucial agricultural pillar, renowned for its tobacco and produce yields.",
    ],
    source: "United Nations Reconstruction Log",
  },
  "mac-geo-01": {
    id: "mac-geo-01",
    type: "visualization",
    category: "Geography",
    title: "Macedonian Territorial Evolution",
    dateRange: "1913–1991",
    visualizationId: "territory_timeline",
    description:
      "The transition from the Vardar Banovina under the Kingdom of Yugoslavia to the recognized Socialist Republic of Macedonia.",
    geoDataUrl: "map.json",
    targetEntity: "",
  },
};

export const MONTENEGRO_ARCHIVE: Record<string, ArchiveEntry> = {
  "mne-hist-01": {
    id: "mne-hist-01",
    type: "text",
    category: "History",
    title: "The Coastal Shield",
    date: "1946",
    content: [
      "Despite having the smallest population in the Federation, SR Montenegro possessed a fierce history of partisan resistance.",
      "Its rugged black mountains and critical deep-water naval access at the Bay of Kotor made it a vital strategic asset.",
    ],
    source: "Naval Command Diaries",
  },
  "mne-geo-01": {
    id: "mne-geo-01",
    type: "visualization",
    category: "Geography",
    title: "Montenegrin Territorial Evolution",
    dateRange: "1910–1992",
    visualizationId: "territory_timeline",
    description:
      "Documenting the boundaries from the independent Kingdom of Montenegro through its integration into the Yugoslav state.",
    geoDataUrl: "map.json",
    targetEntity: "Macedonia (FYROM\/North Macedonia)",
  },
};

export const ARCHIVE_MAP: Record<string, Record<string, ArchiveEntry>> = {
  slovenia: SLOVENIA_ARCHIVE,
  croatia: CROATIA_ARCHIVE,
  bosnia: BOSNIA_ARCHIVE,
  serbia: SERBIA_ARCHIVE,
  macedonia: MACEDONIA_ARCHIVE,
  montenegro: MONTENEGRO_ARCHIVE,
};
