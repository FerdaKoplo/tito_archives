import { ArchiveEntry } from "../interfaces/ArchiveInterface";

export interface RegionArchive {
  regionId: string;
  regionName: string;
  documents: Record<string, ArchiveEntry>;
}

export const SLOVENIA_ARCHIVE: Record<string, ArchiveEntry> = {
  "slo-hist-01": {
    id: "slo-hist-01",
    type: "text",
    category: "History",
    title: "Post-War Industrialization & Independence",
    date: "1948–1991",
    sections: [
      {
        subtitle: "Formation within Yugoslavia",
        paragraphs: [
          "After World War II, Slovenia became part of the Socialist Federal Republic of Yugoslavia.",
          "The republic underwent rapid industrialization under Tito's economic reforms, shifting from an agrarian society to the most economically advanced region in the federation.",
        ],
      },
      {
        subtitle: "The Ten-Day War",
        paragraphs: [
          "In June 1991, Slovenia declared independence, leading to a brief conflict with the Yugoslav People's Army (JNA).",
          "Due to its strong territorial defense forces and strategic maneuvering, Slovenia secured its borders with minimal casualties, paving the way for international recognition.",
        ],
      },
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
    title: "Maritime Infrastructure & Independence",
    date: "1965–1995",
    sections: [
      {
        subtitle: "The Adriatic Economic Boom",
        paragraphs: [
          "SR Croatia served as the primary naval and commercial maritime hub of the Federation.",
          "The development of the Adriatic Highway (Jadranska magistrala) revolutionized coastal tourism, generating crucial foreign currency for the state.",
        ],
      },
      {
        subtitle: "The Homeland War",
        paragraphs: [
          "Following its 1991 declaration of independence, Croatia entered a protracted conflict to secure its recognized borders.",
          "The conflict concluded in 1995 following major military offensives that restored sovereignty over the majority of its territory.",
        ],
      },
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
    date: "1945–1992",
    sections: [
      {
        subtitle: "The Military-Industrial Complex",
        paragraphs: [
          "Due to its central location and defensible mountainous terrain, SR Bosnia and Herzegovina was chosen as the primary base for the Yugoslav military industry.",
          "The republic housed significant defense infrastructure, producing everything from ammunition to aircraft.",
        ],
      },
      {
        subtitle: "A Demographic Microcosm",
        paragraphs: [
          "Often referred to as Yugoslavia in miniature, the republic became a symbol of 'Brotherhood and Unity'.",
          "It housed a highly diverse demographic makeup of Bosniaks, Serbs, and Croats living in closely intertwined communities.",
        ],
      },
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
    date: "1945–2006",
    sections: [
      {
        subtitle: "The Federal Center",
        paragraphs: [
          "As the largest republic and seat of the federal capital (Belgrade), SR Serbia functioned as the bureaucratic and political heart of the nation.",
          "It drove much of the federation's administrative apparatus and heavy industry.",
        ],
      },
      {
        subtitle: "The 1974 Constitution",
        paragraphs: [
          "The 1974 Yugoslav Constitution significantly altered Serbia's internal structure.",
          "It formalized the status of its two autonomous provinces: SAP Vojvodina to the north and SAP Kosovo to the south, granting them de facto republic-level autonomy.",
        ],
      },
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
    date: "1944–1991",
    sections: [
      {
        subtitle: "The 1963 Earthquake",
        paragraphs: [
          "Following a devastating earthquake in 1963 that destroyed over 80% of the city, the capital of Skopje was rebuilt.",
          "The reconstruction was a massive campaign of international solidarity, featuring modernist architecture led by renowned urban planners.",
        ],
      },
      {
        subtitle: "Economic Role in the Federation",
        paragraphs: [
          "The republic stood as a crucial agricultural pillar within Yugoslavia.",
          "It was highly renowned for its significant tobacco harvests, wine production, and fresh produce yields.",
        ],
      },
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
    targetEntity: "Macedonia (FYROM\/North Macedonia)",
  },
};

export const MONTENEGRO_ARCHIVE: Record<string, ArchiveEntry> = {
  "mne-hist-01": {
    id: "mne-hist-01",
    type: "text",
    category: "History",
    title: "The Coastal Shield",
    date: "1945–2006",
    sections: [
      {
        subtitle: "Partisan Legacy",
        paragraphs: [
          "Despite having the smallest population in the Federation, SR Montenegro possessed a fierce history of anti-fascist partisan resistance during WWII.",
          "This legacy heavily influenced its post-war political standing and high representation in the federal military leadership.",
        ],
      },
      {
        subtitle: "Strategic Maritime Assets",
        paragraphs: [
          "Its rugged black mountains provided formidable natural defenses.",
          "Crucially, its deep-water naval access at the Bay of Kotor made the republic a vital strategic asset and primary base for the Yugoslav Navy.",
        ],
      },
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
    targetEntity: "Montenegro",
  },
};

export const ARCHIVE_MAP: Record<string, RegionArchive> = {
  slovenia: {
    regionId: "slovenia",
    regionName: "Slovenia",
    documents: SLOVENIA_ARCHIVE,
  },
  croatia: {
    regionId: "croatia",
    regionName: "Croatia",
    documents: CROATIA_ARCHIVE,
  },
  bosnia: {
    regionId: "bosnia",
    regionName: "Bosnia & Herzegovina",
    documents: BOSNIA_ARCHIVE,
  },
  serbia: {
    regionId: "serbia",
    regionName: "Serbia",
    documents: SERBIA_ARCHIVE,
  },
  macedonia: {
    regionId: "macedonia",
    regionName: "Macedonia",
    documents: MACEDONIA_ARCHIVE,
  },
  montenegro: {
    regionId: "montenegro",
    regionName: "Montenegro",
    documents: MONTENEGRO_ARCHIVE,
  },
};
