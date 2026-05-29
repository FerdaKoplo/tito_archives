"use client";

import { NAVIGATION_CONST } from "@/app/consts/NavigationConst";
import { useNavigationStore } from "@/app/stores/NavStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const BottomNavigation = () => {
  const pathName = usePathname();

  const { activeRoute, setActiveRoute } = useNavigationStore();

  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  if (pathName === "/") return null;

  return (
    <div className="fixed bottom-8 right-0 z-50 w-full max-w-sm px-4 pointer-events-none">
      <nav className="group relative isolate flex bg-[#E5E5E5] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] pointer-events-auto flex-col">
        <div className="fixed inset-0 -z-10 transition-all duration-200 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:bg-black/40" />

        {NAVIGATION_CONST.map((nav) => {
          const isActive = activeRoute === nav.url;

          return (
            <Link
              key={nav.url}
              href={nav.url}
              onClick={() => setActiveRoute(nav.url)}
              className={`flex-1 text-center py-3 px-2 font-mono text-sm font-bold uppercase tracking-widest border-b-4 border-black last:border-b-0 transition-colors duration-200 flex items-center justify-center gap-2 ${
                isActive
                  ? `bg-[#C8102E] text-black`
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {isActive && (
                <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
              )}
              {nav.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNavigation;
