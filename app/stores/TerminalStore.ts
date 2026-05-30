import { create } from "zustand";
import { HistoryLine, LineType } from "../interfaces/Terminal";

interface TerminalState {
  history: HistoryLine[];
  commandHistory: string[];
  addHistoryLines: (lines: HistoryLine[]) => void;
  addCommandToHistory: (cmd: string) => void;
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
  commandHistory: [],
  addHistoryLines: (lines) =>
    set((state) => ({ history: [...state.history, ...lines] })),

  addCommandToHistory: (cmd) =>
    set((state) => ({ commandHistory: [...state.commandHistory, cmd] })),
  clearHistory: () => set({ history: [] }),
}));
