import { create } from "zustand";
import { HistoryLine, LineType } from "../interfaces/Terminal";

interface TerminalState {
  history: HistoryLine[];
  addHistoryLines: (lines: HistoryLine[]) => void;
  clearHistory: () => void;
}

const INITIAL_HISTORY: HistoryLine[] = [
  {
    id: "init-1",
    text: "FEDERAL SECURE TERMINAL v2.4.1",
    type: LineType.SYSTEM,
  },
  {
    id: "init-2",
    text: "TYPE 'HELP' TO INITIALIZE INTERFACE...",
    type: LineType.SYSTEM,
  },
];

export const useTerminalStore = create<TerminalState>((set) => ({
  history: INITIAL_HISTORY,
  addHistoryLines: (lines) =>
    set((state) => ({ history: [...state.history, ...lines] })),
  clearHistory: () => set({ history: [] }),
}));
