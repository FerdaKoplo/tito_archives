"use client";

import Link from "next/link";
import TerminalLine from "../components/terminal/TerminalLine";
import useTerminalLogic from "../hooks/useTerminalLogic";
import { LineType } from "../interfaces/Terminal";
import { useTerminalStore } from "../stores/TerminalStore";
import { useEffect, useRef, useState } from "react";

const TerminalPage = () => {
  const { history } = useTerminalStore();
  const { isTyping, setIsTyping, processCommand } = useTerminalLogic();

  const [input, setInput] = useState<string>("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isTyping, input]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isTyping && input.trim()) {
      processCommand(input);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-[#8A9A86] p-8 flex flex-col items-center justify-center font-mono">
      <div className="w-full max-w-4xl mb-6 flex justify-between items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold uppercase tracking-wide border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Close Terminal
        </Link>
        <span className="font-bold text-black uppercase tracking-widest bg-[#C8102E] text-white px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          SYS_OVERRIDE ACTIVE
        </span>
      </div>

      <div
        className="w-full max-w-4xl h-[600px] bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 overflow-y-auto cursor-text relative group"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex flex-col gap-2 relative z-20">
          {history.map((line, index) => {
            const isLastGroup =
              index >=
              history.length -
                history.filter((l) => l.type !== LineType.COMMAND).length;
            const shouldAnimate =
              isLastGroup && isTyping && line.type !== LineType.COMMAND;

            return (
              <TerminalLine
                key={line.id}
                line={line}
                shouldAnimate={shouldAnimate}
                onComplete={() => {
                  if (index === history.length - 1) setIsTyping(false);
                }}
              />
            );
          })}

          <div className="flex items-center text-white mt-2">
            <span className="mr-2">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              className="bg-transparent border-none outline-none flex-1 text-white uppercase caret-white"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
            {!isTyping && input.length === 0 && (
              <span className="w-2 h-5 bg-white animate-pulse ml-1 absolute left-4 pointer-events-none" />
            )}
          </div>

          <div ref={bottomRef} className="h-4" />
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;
