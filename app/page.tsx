"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BOOT_SEQUENCE } from "./consts/StartupConst";
import { resolve } from "dns";
import BootLine from "./components/terminal/BootLine";

export default function Home() {
  const [lines, setLines] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("system_booted") === "true") {
      router.replace("/yugoslavia-map");
      return;
    }
    let isMounted = true;

    const runBootSequence = async () => {
      for (let i = 0; i < BOOT_SEQUENCE.length; i++) {
        if (!isMounted) return;
        setLines((prev) => [...prev, BOOT_SEQUENCE[i].text]);
        await new Promise((resolve) =>
          setTimeout(resolve, BOOT_SEQUENCE[i].delay),
        );
      }

      if (!isMounted) return;

      await new Promise((resolve) => setTimeout(resolve, 5000));

      if (isMounted) {
        sessionStorage.setItem("system_booted", "true");
        router.replace("/yugoslavia-map");
      }
    };

    runBootSequence();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-black font-mono p-8 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />

      <div className="relative z-20 flex flex-col gap-1 max-w-3xl">
        {lines.map((text, index) => {
          const isActive =
            index === lines.length - 1 && lines.length !== BOOT_SEQUENCE.length;

          return <BootLine key={index} text={text} isActive={isActive} />;
        })}

        {lines.length < BOOT_SEQUENCE.length && (
          <div className="flex items-center mt-1">
            <span className="mr-4 text-white opacity-50">{">"}</span>
            <span className="w-3 h-5 bg-white animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
