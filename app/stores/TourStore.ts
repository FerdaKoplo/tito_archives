import { create } from "zustand";

export type Region =
  | "yugoslavia"
  | "slovenia"
  | "croatia"
  | "bosnia"
  | "serbia"
  | "montenegro"
  | "macedonia";

interface TourState {
  currentRegion: Region;
  isCrying: boolean;
  setRegion: (region: Region) => void;
  toggleCrying: (val: boolean) => void;
}

export const useTourStore = create<TourState>((set) => ({
  currentRegion: "yugoslavia",
  isCrying: false,

  setRegion: (region) => set({ currentRegion: region }),
  toggleCrying: (val) => set({ isCrying: val }),
}));

