import { routeModule } from "next/dist/build/templates/pages";
import { create } from "zustand";

interface NavState {
  activeRoute: string;
  setActiveRoute: (route: string) => void;
}

export const useNavigationStore = create<NavState>((set) => ({
  activeRoute: "/",
  setActiveRoute: (route) => set({ activeRoute: route }),
}));
